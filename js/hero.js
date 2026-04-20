// ===================================================
// KETSY STORE – Hero Carousel (lookbook style)
// ===================================================
(function () {
  const slidesWrap = document.getElementById('hero-slides');
  if (!slidesWrap) return;

  const slides   = slidesWrap.querySelectorAll('.hero-lb-slide, .hero-v2-slide, .hero-slide');
  const dots     = document.querySelectorAll('#hero-dots .hero-lb-dot, #hero-dots .dot');
  const prevBtn  = document.getElementById('hero-prev');
  const nextBtn  = document.getElementById('hero-next');
  const progFill = document.getElementById('hero-progress-fill');

  let current = 0;
  const total = slides.length;
  if (total <= 1) {
    if (prevBtn) prevBtn.style.display = 'none';
    if (nextBtn) nextBtn.style.display = 'none';
    return;
  }

  let timer = null;
  let progTimer = null;
  const AUTO_MS = 6000;

  function startProgress() {
    if (!progFill) return;
    progFill.style.transition = 'none';
    progFill.style.width = '0%';
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        progFill.style.transition = `width ${AUTO_MS}ms linear`;
        progFill.style.width = '100%';
      });
    });
  }

  function stopProgress() {
    if (!progFill) return;
    progFill.style.transition = 'none';
    progFill.style.width = '0%';
  }

  function goTo(index) {
    current = (index + total) % total;
    slides.forEach((s, i) => s.classList.toggle('active', i === current));
    dots.forEach((d, i)   => d.classList.toggle('active', i === current));
  }

  function next() { goTo(current + 1); }
  function prev() { goTo(current - 1); }

  function startAuto() {
    stopAuto();
    startProgress();
    timer = setInterval(() => { next(); startProgress(); }, AUTO_MS);
  }

  function stopAuto() {
    if (timer) { clearInterval(timer); timer = null; }
    stopProgress();
  }

  if (nextBtn) nextBtn.addEventListener('click', () => { next(); startAuto(); });
  if (prevBtn) prevBtn.addEventListener('click', () => { prev(); startAuto(); });

  dots.forEach(d => {
    d.addEventListener('click', () => {
      const i = parseInt(d.dataset.slide, 10);
      if (!isNaN(i)) { goTo(i); startAuto(); }
    });
  });

  // Pause on hover
  slidesWrap.addEventListener('mouseenter', stopAuto);
  slidesWrap.addEventListener('mouseleave', startAuto);

  // Pause when tab hidden
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) stopAuto(); else startAuto();
  });

  // Touch / swipe
  let startX = 0, deltaX = 0, touching = false;
  slidesWrap.addEventListener('touchstart', e => {
    if (!e.touches[0]) return;
    startX = e.touches[0].clientX;
    deltaX = 0; touching = true;
    stopAuto();
  }, { passive: true });
  slidesWrap.addEventListener('touchmove', e => {
    if (!touching || !e.touches[0]) return;
    deltaX = e.touches[0].clientX - startX;
  }, { passive: true });
  slidesWrap.addEventListener('touchend', () => {
    if (!touching) return;
    touching = false;
    if (Math.abs(deltaX) > 40) { deltaX < 0 ? next() : prev(); }
    startAuto();
  });

  // Keyboard
  document.addEventListener('keydown', e => {
    if (e.key === 'ArrowRight') { next(); startAuto(); }
    if (e.key === 'ArrowLeft')  { prev(); startAuto(); }
  });

  startAuto();
})();
