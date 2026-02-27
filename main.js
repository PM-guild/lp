const obs = new IntersectionObserver(e => { e.forEach(e => { e.isIntersecting && (e.target.classList.add('visible'), obs.unobserve(e.target)) }) }, { threshold: .15, rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));
window.addEventListener('scroll', () => { document.getElementById('nav').classList.toggle('scrolled', window.scrollY > 20) });
