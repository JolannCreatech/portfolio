/* The cover is a short, real asset preparation sequence and the first page turn. */
(() => {
  const cover = document.querySelector('.cover');
  const main = document.querySelector('#main');
  if (!cover || !main) return;

  const progress = cover.querySelector('[role="progressbar"]');
  const valueLabel = cover.querySelector('[data-loading-value]');
  const loadingLabel = cover.querySelector('[data-loading-label]');
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const surface = cover.querySelector('.cover__surface');
  const criticalImages = [
    cover.querySelector('.cover__image'),
    main.querySelector('.intro-panel__portrait img'),
    main.querySelector('.story-panel--feature .story-panel__media img')
  ].filter((image, index, images) => image && images.indexOf(image) === index);

  let opening = false;
  let dismissed = false;
  let readyImages = 0;

  const setProgress = (amount, label) => {
    if (dismissed) return;
    const value = Math.min(100, Math.max(0, amount));
    progress?.setAttribute('aria-valuenow', String(value));
    if (valueLabel) valueLabel.textContent = `${String(value).padStart(2, '0')}%`;
    if (loadingLabel && label) loadingLabel.textContent = label;
    cover.style.setProperty('--load-progress', `${value}%`);
  };

  const waitForImage = (image) => {
    if (image.complete) return Promise.resolve();
    return new Promise((resolve) => {
      image.addEventListener('load', resolve, { once: true });
      image.addEventListener('error', resolve, { once: true });
    });
  };

  const finish = (moveFocus = false) => {
    if (dismissed) return;
    dismissed = true;
    cover.classList.add('is-dismissed');
    main.inert = false;
    main.removeAttribute('aria-hidden');
    if (moveFocus) main.focus({ preventScroll: true });
  };

  const openBook = (skipPageTurn = false, moveFocus = false) => {
    if (dismissed) return;
    if (opening) {
      if (skipPageTurn) finish(moveFocus);
      return;
    }
    opening = true;
    cover.classList.add('is-opening');
    if (skipPageTurn || reduceMotion.matches) {
      finish(moveFocus);
      return;
    }

    let finished = false;
    let fallback = 0;
    const complete = (event) => {
      if (finished || (event && (event.target !== surface || event.propertyName !== 'transform'))) return;
      finished = true;
      window.clearTimeout(fallback);
      surface?.removeEventListener('transitionend', complete);
      finish(moveFocus);
    };
    surface?.addEventListener('transitionend', complete);
    fallback = window.setTimeout(() => complete(), 900);
  };

  /* The cover replays on a reload or a fresh visit. It stays away when the reader
     comes back through the site's own page turn or the browser history: the head
     script flags that case as `cover-skipped` before the first paint. */
  const skippedByArrival = document.documentElement.classList.contains('cover-skipped');
  const arrivedFromHistory = (() => {
    try {
      const entry = performance.getEntriesByType('navigation')[0];
      return entry ? entry.type === 'back_forward' : false;
    } catch { return false; }
  })();

  if (skippedByArrival || arrivedFromHistory) {
    finish();
    return;
  }

  main.inert = true;
  main.setAttribute('aria-hidden', 'true');
  cover.classList.add('is-loading');
  cover.querySelector('[data-open-book]')?.addEventListener('click', (event) => {
    event.preventDefault();
    openBook(false, true);
  });
  cover.addEventListener('click', (event) => {
    if (event.target.closest('a, button')) return;
    openBook();
  });
  document.querySelector('.skip-link[href="#main"]')?.addEventListener('click', (event) => {
    event.preventDefault();
    openBook(true, true);
  });
  const openOnGesture = () => openBook();
  cover.addEventListener('wheel', openOnGesture, { passive: true, once: true });
  cover.addEventListener('touchmove', openOnGesture, { passive: true, once: true });
  window.addEventListener('scroll', () => {
    if (window.scrollY > 12) openBook();
  }, { passive: true });

  Promise.all(criticalImages.map(async (image) => {
    await waitForImage(image);
    readyImages += 1;
    const value = Math.round((readyImages / criticalImages.length) * 100);
    setProgress(value, value === 100 ? 'Opening the first spread' : `Preparing the first page · ${value}%`);
  })).then(() => {
    if (dismissed) return;
    cover.classList.add('is-ready');
    setProgress(100, 'Ready — click or scroll to open');
  });
})();
