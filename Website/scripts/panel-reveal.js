/* Reveal comic cases as they enter view; unsupported browsers keep every case visible. */
(() => {
  const motionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');
  const root = document.documentElement;
  const panelSelector = [
    '.chapter-heading', '.story-panel', '.panel', '.project-header',
    '.project-panel', '.project-video-panel', '.project-nav',
    '.projects-intro > *', '.category-header > *', '.about-opening > *',
    '.about-section > *', '.skills-spread > *', '.about-contact'
  ].join(',');

  let observer;
  let panels = [];

  const clearMotion = () => {
    observer?.disconnect();
    observer = undefined;
    root.classList.remove('has-panel-motion');
    panels.forEach((panel) => {
      panel.classList.remove('comic-reveal', 'is-revealed');
      panel.style.removeProperty('--reveal-delay');
    });
  };

  const enableMotion = () => {
    if (motionPreference.matches || !('IntersectionObserver' in window)) return;
    panels = [...document.querySelectorAll(panelSelector)];
    if (!panels.length) return;

    const activeObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-revealed');
        activeObserver.unobserve(entry.target);
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -5% 0px' });
    observer = activeObserver;

    panels.forEach((panel, index) => {
      panel.classList.add('comic-reveal');
      panel.style.setProperty('--reveal-delay', `${(index % 4) * 55}ms`);
      observer.observe(panel);
    });
    root.classList.add('has-panel-motion');
  };

  enableMotion();
  const updateMotion = () => {
    clearMotion();
    enableMotion();
  };
  if (motionPreference.addEventListener) motionPreference.addEventListener('change', updateMotion);
  else motionPreference.addListener(updateMotion);
})();
