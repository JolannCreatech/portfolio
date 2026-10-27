/* Add a reliable sheet turn to same-site links while leaving browser navigation native. */
(() => {
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let transitioning = false;

  const navigate = (event) => {
    const link = event.target.closest('a[href]');
    if (!link || transitioning) return;
    if (event.defaultPrevented || event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    if ((link.target && link.target !== '_self') || link.hasAttribute('download')) return;

    let destination;
    try { destination = new URL(link.href, window.location.href); } catch { return; }
    if (destination.origin !== window.location.origin || !destination.pathname.startsWith('/Website/')) return;
    if (destination.pathname === window.location.pathname) return;

    /* A page turn inside the site never replays the cover: only a reload or a new visit does. */
    try { sessionStorage.setItem('portfolio:cover-skip', 'true'); } catch { /* Storage is optional. */ }
    if (reduceMotion.matches) return;

    const main = document.querySelector('main');
    if (!main) return;
    event.preventDefault();
    transitioning = true;
    try { sessionStorage.setItem('portfolio:arrive', destination.pathname); } catch { /* Storage is optional. */ }
    main.classList.add('is-leaving');

    let finished = false;
    let fallback = 0;
    const cleanup = () => {
      window.clearTimeout(fallback);
      main.removeEventListener('transitionend', onTransitionEnd);
    };
    const finish = () => {
      if (finished) return;
      finished = true;
      cleanup();
      window.location.assign(destination.href);
    };
    const onTransitionEnd = (transitionEvent) => {
      if (transitionEvent.target === main && transitionEvent.propertyName === 'transform') finish();
    };
    main.addEventListener('transitionend', onTransitionEnd);
    fallback = window.setTimeout(finish, 560);
  };

  const init = () => {
    document.documentElement.classList.remove('no-js');
    document.documentElement.classList.add('js-ready');
    document.addEventListener('click', navigate);

    /* A pending cover flag only concerns the page it navigated to: the home page
       consumes it in its head, every other page drops it here. */
    try { sessionStorage.removeItem('portfolio:cover-skip'); } catch { /* Storage is optional. */ }

    let intendedArrival = '';
    try {
      intendedArrival = sessionStorage.getItem('portfolio:arrive') || '';
      sessionStorage.removeItem('portfolio:arrive');
    } catch { /* Storage is optional. */ }
    if (intendedArrival === window.location.pathname && !reduceMotion.matches) {
      const main = document.querySelector('main');
      if (main) {
        main.classList.add('is-arriving');
        let fallback = 0;
        const cleanup = () => {
          window.clearTimeout(fallback);
          main.removeEventListener('transitionend', onTransitionEnd);
          main.classList.remove('is-arriving', 'has-arrived');
        };
        const onTransitionEnd = (transitionEvent) => {
          if (transitionEvent.target === main && transitionEvent.propertyName === 'transform') cleanup();
        };
        main.addEventListener('transitionend', onTransitionEnd);
        requestAnimationFrame(() => requestAnimationFrame(() => main.classList.add('has-arrived')));
        fallback = window.setTimeout(cleanup, 700);
      }
    }

    window.addEventListener('pageshow', (event) => {
      if (event.persisted) document.querySelector('main')?.classList.remove('is-leaving', 'is-arriving', 'has-arrived');
    });

  };

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init, { once: true });
  else init();
})();
