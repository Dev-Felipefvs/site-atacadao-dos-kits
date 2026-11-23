// menu mobile
const burger = document.querySelector('.burger');
const menu = document.getElementById('menu');
burger.addEventListener('click', () => {
  const open = burger.getAttribute('aria-expanded') === 'true';
  burger.setAttribute('aria-expanded', String(!open));
  burger.setAttribute('aria-label', open ? 'Abrir menu' : 'Fechar menu');
  menu.classList.toggle('open', !open);
});
menu.addEventListener('click', e => {
  if (e.target.tagName === 'A') { menu.classList.remove('open'); burger.setAttribute('aria-expanded', 'false'); }
});

// formulário → WhatsApp
document.getElementById('form').addEventListener('submit', e => {
  e.preventDefault();
  const f = e.target, err = document.getElementById('err');
  const nome = f.nome.value.trim();
  if (!nome) { err.hidden = false; f.nome.focus(); return; }
  err.hidden = true;
  const txt = `Olá! Sou ${nome}.\nCorredor: ${f.corredor.value}\n${f.msg.value.trim()}`;
  window.open('https://wa.me/5582988893627?text=' + encodeURIComponent(txt), '_blank', 'noopener');
});

// animações de entrada
const els = document.querySelectorAll('.sec-head, .aisle-list li, .item, .quotes li, .form, .visit__grid > *');
if (!matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver(es => es.forEach(x => { if (x.isIntersecting) { x.target.classList.add('in'); io.unobserve(x.target); } }), { rootMargin: '0px 0px -10% 0px' });
  els.forEach(el => { el.classList.add('reveal'); io.observe(el); });
}
