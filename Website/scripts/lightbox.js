/* =========================================================================
   Lightbox — clicking a photo opens it full size.
   Pure DOM (no HTML changes needed): the dialog is injected once, images are
   collected at load, navigation wraps with arrow keys/buttons.
   Accessibility: role=dialog, focus trap, Escape to close, focus restored
   to the triggering image, keyboard activation, reduced-motion respected.
   ========================================================================= */

// Media frames whose <img> opens in the lightbox.
const FRAME_SELECTORS = [
  '.story-panel__media img',
  '.panel__media img',
  '.project-figure__media img',
  '.visual-gallery img',
  '.visual-archive figure img',
  '.about-opening__portrait img',
  '.intro-panel__portrait img',
  '.timeline figure img',
  '.free-time-spread__lead img'
].join(', ');

const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

let images = [];
let current = 0;
let lastTrigger = null;
let isOpen = false;
let hideTimer = 0;
let scrollY = 0;

const root = document.createElement('div');
root.className = 'lightbox';
root.hidden = true;
root.setAttribute('role', 'dialog');
root.setAttribute('aria-modal', 'true');
root.setAttribute('aria-label', 'Full-size image');
root.innerHTML = `
  <div class="lightbox__backdrop" data-lightbox-close></div>
  <figure class="lightbox__stage">
    <img class="lightbox__img" alt="">
    <figcaption class="lightbox__caption" aria-live="polite"></figcaption>
  </figure>
  <p class="lightbox__count" aria-hidden="true"></p>
  <button type="button" class="lightbox__btn lightbox__btn--prev" aria-label="Previous image">&#8249;</button>
  <button type="button" class="lightbox__btn lightbox__btn--next" aria-label="Next image">&#8250;</button>
  <button type="button" class="lightbox__btn lightbox__btn--close" data-lightbox-close aria-label="Close the image">&#10005;</button>
`;
document.body.append(root);

const lightboxImg = root.querySelector('.lightbox__img');
const caption = root.querySelector('.lightbox__caption');
const count = root.querySelector('.lightbox__count');
const btnPrev = root.querySelector('.lightbox__btn--prev');
const btnNext = root.querySelector('.lightbox__btn--next');
const btnClose = root.querySelector('.lightbox__btn--close');

function labelFor(img) {
  return img.alt ? `View “${img.alt}” larger` : 'View the image larger';
}

function collect() {
  images = [...document.querySelectorAll(FRAME_SELECTORS)]
    // Keep the narrow portrait strip clickable even when its thumbnails are under 120px wide.
    .filter((img) => (img.width > 120 && img.height > 120) || img.closest('.visual-gallery--experiments'));
  const multiple = images.length > 1;
  btnPrev.hidden = !multiple;
  btnNext.hidden = !multiple;
  images.forEach((img, i) => {
    img.dataset.lightboxIndex = String(i);
    img.tabIndex = 0;
    img.setAttribute('role', 'button');
    img.setAttribute('aria-label', labelFor(img));
  });
}

function render() {
  const img = images[current];
  const src = img.currentSrc || img.src;
  lightboxImg.src = src;
  lightboxImg.alt = img.alt || '';
  caption.textContent = img.alt || '';
  count.textContent = `${current + 1} / ${images.length}`;
}

function lockScroll() {
  scrollY = window.scrollY;
  document.body.style.position = 'fixed';
  document.body.style.top = `-${scrollY}px`;
  document.body.style.width = '100%';
}

function unlockScroll() {
  document.body.style.position = '';
  document.body.style.top = '';
  document.body.style.width = '';
  window.scrollTo(0, scrollY);
}

function open(index, trigger) {
  clearTimeout(hideTimer);
  current = index;
  lastTrigger = trigger || images[index];
  render();
  lockScroll();
  root.hidden = false;
  isOpen = true;
  // entrance frame (skipped entirely under reduced motion)
  if (!reducedMotion.matches) {
    root.classList.remove('is-open');
    requestAnimationFrame(() => requestAnimationFrame(() => root.classList.add('is-open')));
  }
  btnClose.focus();
}

function hide() {
  root.hidden = true;
  root.classList.remove('is-open');
}

function close() {
  if (!isOpen) return;
  isOpen = false;
  unlockScroll();
  if (reducedMotion.matches) {
    hide();
  } else {
    root.classList.remove('is-open');
    hideTimer = window.setTimeout(hide, 220);
  }
  if (lastTrigger && lastTrigger.isConnected) lastTrigger.focus();
}

function step(delta) {
  current = (current + delta + images.length) % images.length;
  render();
}

/* ---- events ---------------------------------------------------------- */

document.addEventListener('click', (event) => {
  const img = event.target.closest ? event.target.closest('img[data-lightbox-index]') : null;
  if (!img) return;
  // Photo cards inside <a> must open the lightbox, not navigate.
  event.preventDefault();
  event.stopPropagation();
  open(Number(img.dataset.lightboxIndex), img);
}, true);

document.addEventListener('keydown', (event) => {
  const img = event.target.matches && event.target.matches('img[data-lightbox-index]')
    ? event.target : null;
  if (img && !isOpen && (event.key === 'Enter' || event.key === ' ')) {
    event.preventDefault();
    open(Number(img.dataset.lightboxIndex), img);
    return;
  }
  if (!isOpen) return;
  if (event.key === 'Escape') {
    event.preventDefault();
    close();
  } else if (event.key === 'ArrowRight' && images.length > 1) {
    event.preventDefault();
    step(1);
  } else if (event.key === 'ArrowLeft' && images.length > 1) {
    event.preventDefault();
    step(-1);
  } else if (event.key === 'Tab') {
    // trap focus inside the dialog (DOM order: prev → next → close)
    const focusables = [...root.querySelectorAll('button:not([hidden])')];
    const i = focusables.indexOf(document.activeElement);
    if (event.shiftKey && i <= 0) { event.preventDefault(); focusables[focusables.length - 1].focus(); }
    else if (!event.shiftKey && i === focusables.length - 1) { event.preventDefault(); focusables[0].focus(); }
  }
});

root.addEventListener('click', (event) => {
  if (event.target.closest('.lightbox__btn--prev')) { step(-1); return; }
  if (event.target.closest('.lightbox__btn--next')) { step(1); return; }
  if (event.target.closest('[data-lightbox-close]')) close();
});

collect();
