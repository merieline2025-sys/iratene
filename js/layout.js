// Shared header/footer + mailto/WhatsApp form handler.
const MAIL = 'sofianeiratene@gmail.com', WA = '213551054296';
const PAGES = [['index.html','Accueil'],['agence.html',"L'agence"],['services.html','Services'],['realisations.html','Réalisations'],['devis.html','Devis'],['contact.html','Contact']];
const cur = location.pathname.split('/').pop() || 'index.html';
const on = h => (h === cur || (h === 'realisations.html' && cur === 'realisation.html')) ? ' class="on"' : '';
document.head.insertAdjacentHTML('beforeend', '<link rel="icon" href="img/logo-navy.png"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap">');
document.body.insertAdjacentHTML('afterbegin', `<header>
<a class="brand" href="index.html"><img src="img/logo-navy.png" alt="CAIS Architecture"><span>Iratene Sofiane<small>Architecte agréé · Alger</small></span></a>
<button id="burger" aria-label="Menu">☰</button>
<nav>${PAGES.map(([h, t]) => `<a href="${h}"${h === 'devis.html' ? ' class="cta"' : on(h)}>${h === 'devis.html' ? 'Devis gratuit' : t}</a>`).join('')}</nav></header>`);
document.body.insertAdjacentHTML('beforeend', `<footer><div class="cols">
<div><img src="img/logo-white.png" alt="CAIS Architecture"><br>Cabinet d'Architecture Iratene Sofiane<br>Bureau d'étude agréé, inscrit au tableau national de l'ordre des architectes algériens.<br><span class="ar" dir="rtl">إراتن سفيان – مهندس معماري معتمد</span></div>
<div><h4>Contact</h4>02, lotissement Gaston Bernard,<br>Draria, Alger, Algérie<br><a href="tel:+213551054296">0551 05 42 96</a><br><a href="mailto:${MAIL}">${MAIL}</a></div>
<div><h4>Navigation</h4>${PAGES.map(([h, t]) => `<a href="${h}">${t}</a>`).join('<br>')}</div>
<div><h4>Documents</h4><a href="docs/offre-de-service-CAIS.pdf" target="_blank">Offre de service (PDF)</a></div>
</div><div class="c">© ${new Date().getFullYear()} Cabinet d'Architecture Iratene Sofiane · Alger</div></footer>`);
document.getElementById('burger').onclick = () => document.querySelector('nav').classList.toggle('open');

// <form data-subject="..."> → submit = e-mail, button[data-wa] = WhatsApp.
window.bindForm = form => {
  const text = () => [...form.elements].filter(e => e.name && e.value && e.type !== 'button' && e.type !== 'submit').map(e =>
    (e.dataset.q || e.closest('label')?.firstChild?.textContent.trim() || e.name) + ' : ' + e.value).join('\n');
  form.addEventListener('submit', ev => {
    ev.preventDefault();
    location.href = `mailto:${MAIL}?subject=${encodeURIComponent(form.dataset.subject)}&body=${encodeURIComponent(text())}`;
  });
  form.querySelectorAll('[data-wa]').forEach(b => b.onclick = () => {
    if (form.reportValidity()) open(`https://wa.me/${WA}?text=${encodeURIComponent(form.dataset.subject + '\n\n' + text())}`);
  });
};
document.querySelectorAll('form[data-subject]').forEach(bindForm);
