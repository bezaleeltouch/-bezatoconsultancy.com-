// ═══ NAV SCROLL EFFECT ═══
window.addEventListener('scroll', () => {
  const nav = document.getElementById('nav');
  if (nav) nav.classList.toggle('scrolled', window.scrollY > 30);
});

// ═══ MOBILE MENU ═══
const hamburger = document.getElementById('hamburger');
const mobMenu = document.getElementById('mobMenu');
if (hamburger && mobMenu) {
  hamburger.addEventListener('click', () => mobMenu.classList.toggle('open'));
}
function closeM() {
  if (mobMenu) mobMenu.classList.remove('open');
}

// ═══ SCROLL REVEAL ═══
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('up');
      revealObserver.unobserve(e.target);
    }
  });
}, { threshold: 0.1 });
document.querySelectorAll('.rev').forEach(el => revealObserver.observe(el));

// ═══ COURSE TABS (curriculum page & homepage preview) ═══
function switchTab(id, btn) {
  document.querySelectorAll('.cgroup').forEach(g => g.classList.remove('on'));
  document.querySelectorAll('.tab').forEach(b => b.classList.remove('on'));
  const group = document.getElementById('tab-' + id);
  if (group) group.classList.add('on');
  if (btn) btn.classList.add('on');
}

// ═══ FAQ ACCORDION ═══
function toggleFaq(el) {
  const item = el.parentElement;
  const wasOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!wasOpen) item.classList.add('open');
}

// ═══ ACTIVE NAV LINK ON SCROLL (homepage only) ═══
const sectionsWithId = document.querySelectorAll('section[id]');
const navLinks = document.querySelectorAll('.nav-links a');
if (sectionsWithId.length && navLinks.length) {
  window.addEventListener('scroll', () => {
    let current = '';
    sectionsWithId.forEach(s => {
      if (window.scrollY >= s.offsetTop - 110) current = s.id;
    });
    navLinks.forEach(a => {
      a.classList.remove('active');
      const href = a.getAttribute('href');
      if (href === '#' + current || href === 'index.html#' + current) {
        a.classList.add('active');
      }
    });
  });
}

// ═══ CURRICULUM DETAIL TOGGLE ═══
function toggleCurriculum(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.style.display = (el.style.display === 'none' || !el.style.display) ? 'block' : 'none';
}
