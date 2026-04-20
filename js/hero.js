// ===================================================
// KETSY STORE – Hero Carousel (auto-rotate + swipe)
// ===================================================
(function () {
  const slidesWrap = document.getElementById('hero-slides');
  if (!slidesWrap) return;

  // Support both old .hero-slide and new .hero-v2-slide class names
  const slides = slidesWrap.querySelectorAll('.hero-v2-slide, .hero-slide');
  const dots = document.querySelectorAll('#hero-dots .dot');
  const prevBtn = document.getElementById('hero-prev');
  const nextBtn = document.getElementById('hero-next');

  let current = 0;
  const total = slides.length;
  if (total <= 1) { if (prevBtn) prevBtn.style.display = 'none'; if (nextBtn) nextBtn.style.display = 'none'; return; }

  let timer = null;
  const AUTO_MS = 6000;

  function goTo(index) {
    current = (index + total) % total;
    slides.forEach((s, i) => s.classList.toggle('active', i === current));
    dots.forEach((d, i) => d.classList.toggle('active', i === current));
  }
  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function startAuto() {
    stopAuto();
    timer = setInterval(next, AUTO_MS);
  }
  function stopAuto() {
    if (timer) { clearInterval(timer); timer = null; }
  }

  if (nextBtn) nextBtn.addEventListener('click', () => { next(); startAuto(); });
  if (prevBtn) prevBtn.addEventListener('click', () => { prev(); startAuto(); });
  dots.forEach(d => {
    d.addEventListener('click', () => {
      const i = parseInt(d.dataset.slide, 10);
      if (!isNaN(i)) { goTo(i); startAuto(); }
    });
  });

  // Pause on hover (desktop)
  slidesWrap.addEventListener('mouseenter', stopAuto);
  slidesWrap.addEventListener('mouseleave', startAuto);

  // Pause when tab is hidden
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopAuto(); else startAuto();
  });

  // ----- Touch / swipe support for mobile -----
  let startX = 0, startY = 0, deltaX = 0, touching = false;
  slidesWrap.addEventListener('touchstart', e => {
    if (!e.touches[0]) return;
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
    deltaX = 0;
    touching = true;
    stopAuto();
  }, { passive: true });

  slidesWrap.addEventListener('touchmove', e => {
    if (!touching || !e.touches[0]) return;
    deltaX = e.touches[0].clientX - startX;
  }, { passive: true });

  slidesWrap.addEventListener('touchend', () => {
    if (!touching) return;
    touching = false;
    if (Math.abs(deltaX) > 40) {
      if (deltaX < 0) next(); else prev();
    }
    startAuto();
  });

  // Keyboard arrow navigation
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') { next(); startAuto(); }
    if (e.key === 'ArrowLeft')  { prev(); startAuto(); }
  });

  startAuto();
})();
