/* La Panera Rosa — interacciones */
(function () {
  const $ = (s, el = document) => el.querySelector(s);
  const $$ = (s, el = document) => Array.from(el.querySelectorAll(s));
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;


  /* ---------- INTRO: lluvia de lunares ---------- */
  (function intro() {
    const root = document.documentElement, el = $('#intro');
    if (!el || !root.classList.contains('intro-on')) { if (el) el.remove(); return; }
    try { sessionStorage.setItem('lprIntro', '1'); } catch (e) {}
    const W = window.innerWidth, H = window.innerHeight, c = Math.max(60, Math.min(92, W / 14));
    const cols = Math.ceil(W / c) + 1, rows = Math.ceil(H / c) + 1, ox = (W - cols * c) / 2, oy = (H - rows * c) / 2;
    let html = '', maxD = 0;
    for (let r = 0; r < rows; r++) for (let k = 0; k < cols; k++) {
      const x = ox + k * c, y = oy + r * c, d = Math.hypot(x + c / 2 - W / 2, y + c / 2 - H / 2) / c * 0.05;
      maxD = Math.max(maxD, d);
      html += `<span style="left:${x.toFixed(0)}px;top:${y.toFixed(0)}px;width:${c.toFixed(0)}px;height:${c.toFixed(0)}px;animation-delay:${d.toFixed(3)}s"></span>`;
    }
    $('#introDots').innerHTML = html;
    let done = false;
    const play = () => root.classList.add('intro-play');
    const fin = () => { if (done) return; done = true; play(); el.classList.add('is-out'); root.classList.remove('intro-on'); setTimeout(() => el.remove(), 400); };
    const tPlay = setTimeout(play, 1950), tFin = setTimeout(fin, (2.6 + Math.min(maxD, .6)) * 1000);
    const saltar = () => { clearTimeout(tPlay); clearTimeout(tFin); fin(); };
    el.addEventListener('click', saltar);
    el.addEventListener('touchstart', saltar, { passive: true });
    window.addEventListener('keydown', saltar, { once: true });
  })();

  /* ---------- NAV ---------- */
  const nav = $('#nav'), burger = $('#burger');
  const onScroll = () => nav.classList.toggle('is-scrolled', window.scrollY > 30);
  window.addEventListener('scroll', onScroll, { passive: true }); onScroll();
  const closeMenu = () => { nav.classList.remove('is-open'); burger.setAttribute('aria-expanded', 'false'); burger.setAttribute('aria-label', 'Abrir menú'); document.body.style.overflow = ''; };
  burger.addEventListener('click', () => {
    const open = !nav.classList.contains('is-open');
    nav.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
    burger.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    document.body.style.overflow = open ? 'hidden' : '';
  });
  $$('#menu a').forEach(a => a.addEventListener('click', closeMenu));
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMenu(); });

  /* ---------- HERO: mazo de fotos ---------- */
  const cards = $$('.deck__card'), n = cards.length;
  let i = 0, hold = false, timer;
  const mobile = () => window.innerWidth <= 860;
  function paint() {
    const k = mobile() ? 0.55 : 1;
    cards.forEach((c, idx) => {
      const off = (idx - i + n) % n;
      let t, o = 1, z;
      if (off === 0) { t = 'rotate(-3deg)'; z = 10; }
      else if (off === 1) { t = `translate(${54 * k}px,${-20 * k}px) rotate(6deg) scale(.95)`; z = 9; }
      else if (off === 2) { t = `translate(${-46 * k}px,${26 * k}px) rotate(-11deg) scale(.9)`; z = 8; }
      else if (off === n - 1) { t = `translate(${-760 * k}px,${90 * k}px) rotate(-28deg)`; o = 0; z = 11; }
      else { t = `translate(${-46 * k}px,${26 * k}px) rotate(-11deg) scale(.88)`; o = 0; z = 1; }
      c.style.transform = t; c.style.opacity = o; c.style.zIndex = z;
      c.setAttribute('aria-hidden', off === 0 ? 'false' : 'true');
    });
    $('#deckNum').textContent = `0${i + 1} / 0${n} · PASÁ LA FOTO`;
    $('#deckCat').textContent = cards[i].dataset.cat;
  }
  const go = d => { i = (i + d + n) % n; paint(); };
  $('#prev').addEventListener('click', () => { hold = true; go(-1); });
  $('#next').addEventListener('click', () => { hold = true; go(1); });
  $('#deck').addEventListener('click', () => { hold = true; go(1); });
  // swipe
  let sx = null;
  $('#deck').addEventListener('touchstart', e => { sx = e.touches[0].clientX; }, { passive: true });
  $('#deck').addEventListener('touchend', e => {
    if (sx === null) return; const dx = e.changedTouches[0].clientX - sx; sx = null;
    if (Math.abs(dx) > 40) { hold = true; go(dx < 0 ? 1 : -1); e.preventDefault(); }
  });
  paint();
  if (!reduce) timer = setInterval(() => { if (!hold && !document.hidden && !document.getElementById('intro')) go(1); }, 4200);
  window.addEventListener('resize', paint);

  /* ---------- CARTA ---------- */
  const CARTA = window.CARTA || [];
  const tabsEl = $('#tabs'), body = $('#cartaBody'), search = $('#cartaSearch');
  let current = CARTA[0] ? CARTA[0].id : null;
  const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const norm = s => String(s).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase();
  const TAG = { new: '<span class="tag tag--new">NEW</span>', low: '<span class="tag tag--low">LOW CARB</span>', sg: '<span class="tag tag--sg">SIN GLUTEN</span>' };
  function hl(text, q) {
    if (!q) return esc(text);
    const nt = norm(text), nq = norm(q), at = nt.indexOf(nq);
    if (at < 0) return esc(text);
    return esc(text.slice(0, at)) + '<mark>' + esc(text.slice(at, at + q.length)) + '</mark>' + esc(text.slice(at + q.length));
  }
  function itemHTML(it, q) {
    return `<li class="item"><div class="item__top"><span class="item__n">${hl(it.n, q)}${(it.t || []).map(t => TAG[t]).join('')}</span><span class="item__p">${esc(it.p)}</span></div>${it.d ? `<p class="item__d">${hl(it.d, q)}</p>` : ''}</li>`;
  }
  function hojaHTML(g, q, extra) {
    return `<article class="hoja puntilla"><h3 class="hoja__tit">${esc(g.titulo)}</h3>${extra ? `<p class="hoja__nota">${esc(extra)}</p>` : ''}${g.nota ? `<p class="hoja__nota">${esc(g.nota)}</p>` : ''}<ul class="items">${g.items.map(it => itemHTML(it, q)).join('')}</ul></article>`;
  }
  function renderTabs() {
    tabsEl.innerHTML = CARTA.map(c => `<button class="tab" role="tab" id="tab-${c.id}" aria-selected="${c.id === current}" aria-controls="cartaBody" data-id="${c.id}">${esc(c.tab)}</button>`).join('');
  }
  function renderBody() {
    const q = search.value.trim();
    if (q.length >= 2) {
      const nq = norm(q), hojas = [];
      CARTA.forEach(c => c.grupos.forEach(g => {
        const items = g.items.filter(it => norm(it.n + ' ' + (it.d || '')).includes(nq));
        if (items.length) hojas.push(hojaHTML({ titulo: g.titulo, items }, q, c.tab));
      }));
      body.innerHTML = hojas.length
        ? `<div class="carta__hojas">${hojas.join('')}</div>`
        : `<div class="carta__vacio">No encontramos “${esc(q)}” en la carta. Probá con otra palabra o descargá la carta completa.</div>`;
      $$('.tab', tabsEl).forEach(b => b.setAttribute('aria-selected', 'false'));
      return;
    }
    const c = CARTA.find(x => x.id === current) || CARTA[0];
    body.innerHTML = `<div class="carta__hojas">${c.grupos.map(g => hojaHTML(g, '')).join('')}</div><aside class="carta__foto"><figure class="polaroid"><img src="${c.foto}" alt="${esc(c.tab)}" loading="lazy"><figcaption>${esc(c.tab.toLowerCase())}</figcaption></figure></aside>`;
    $$('.tab', tabsEl).forEach(b => b.setAttribute('aria-selected', String(b.dataset.id === current)));
  }
  tabsEl.addEventListener('click', e => {
    const b = e.target.closest('.tab'); if (!b) return;
    current = b.dataset.id; search.value = ''; renderBody();
    b.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'nearest', inline: 'center' });
  });
  tabsEl.addEventListener('keydown', e => {
    if (!['ArrowRight', 'ArrowLeft'].includes(e.key)) return;
    const ids = CARTA.map(c => c.id), at = ids.indexOf(current);
    current = ids[(at + (e.key === 'ArrowRight' ? 1 : -1) + ids.length) % ids.length];
    renderBody(); $('#tab-' + current).focus();
  });
  let st; search.addEventListener('input', () => { clearTimeout(st); st = setTimeout(renderBody, 120); });
  if (CARTA.length) { renderTabs(); renderBody(); }

  /* ---------- GALERÍA: arrastrar + flechas ---------- */
  const row = $('#galeriaRow');
  let down = false, startX = 0, startL = 0, moved = false;
  row.addEventListener('pointerdown', e => { if (e.pointerType !== 'mouse') return; down = true; moved = false; startX = e.clientX; startL = row.scrollLeft; row.classList.add('is-drag'); });
  window.addEventListener('pointermove', e => { if (!down) return; const dx = e.clientX - startX; if (Math.abs(dx) > 4) moved = true; row.scrollLeft = startL - dx; });
  window.addEventListener('pointerup', () => { if (!down) return; down = false; row.classList.remove('is-drag'); });
  $$('.galeria__ctrl .round').forEach(b => b.addEventListener('click', () => row.scrollBy({ left: Number(b.dataset.dir) * Math.min(700, row.clientWidth * .8), behavior: 'smooth' })));

  /* ---------- NEÓN ---------- */
  const luz = $('#luz'), sw = $('#switch'), swTxt = $('#switchTxt');
  let manual = false;
  const setLuz = on => { luz.classList.toggle('on', on); sw.setAttribute('aria-pressed', String(on)); swTxt.textContent = on ? 'Apagá la luz' : 'Prendé la luz'; };
  setLuz(false);
  sw.addEventListener('click', () => { manual = true; setLuz(!luz.classList.contains('on')); });
  if ('IntersectionObserver' in window) {
    new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting && !manual) setTimeout(() => setLuz(true), 500); }), { threshold: .2 }).observe(luz);
  } else setLuz(true);

  /* ---------- SUCURSALES ---------- */
  const SUC = window.SUCURSALES || [];
  const grid = $('#sucGrid'), sucSearch = $('#sucSearch'), empty = $('#sucEmpty');
  let zona = 'Todas';
  const waNum = s => s.wa || ('549' + s.tel.replace(/\D/g, ''));
  const WA = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 21l1.6-4.6A8.5 8.5 0 1 1 8 20z"/><path d="M9 9.5c0 3 2.5 5.5 5.5 5.5l1.3-1.3-2-1-1 1c-1-.4-2-1.4-2.5-2.5l1-1-1-2L9 9.5z"/></svg>';
  const PIN = '<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/></svg>';
  function renderSuc() {
    const q = sucSearch.value.trim(), nq = norm(q);
    const list = SUC.filter(s => (zona === 'Todas' || s.zona === zona) && (!nq || norm(s.n + ' ' + s.dir + ' ' + s.zona).includes(nq)));
    empty.hidden = list.length > 0;
    grid.innerHTML = list.map(s => {
      const msg = encodeURIComponent(`¡Hola! Quiero reservar una mesa en La Panera Rosa ${s.n}.`);
      const map = encodeURIComponent(`La Panera Rosa ${s.dir}`);
      return `<article class="suc"><span class="suc__zona">${s.zona}</span><h3 class="suc__n">${hl(s.n, q)}</h3><p class="suc__dir">${hl(s.dir, q)}</p>${s.nota ? `<p class="suc__nota">${esc(s.nota)}</p>` : ''}<div class="suc__acc"><a class="suc__wa" href="https://wa.me/${waNum(s)}?text=${msg}" target="_blank" rel="noopener">${WA}${s.nota ? 'Consultar' : 'Reservar'}</a><a class="suc__map" href="https://www.google.com/maps/search/?api=1&query=${map}" target="_blank" rel="noopener">${PIN}Cómo llegar</a></div></article>`;
    }).join('');
  }
  $('#zonas').addEventListener('click', e => {
    const b = e.target.closest('.chip'); if (!b) return;
    zona = b.dataset.zona;
    $$('#zonas .chip').forEach(c => { const on = c === b; c.classList.toggle('is-on', on); c.setAttribute('aria-pressed', String(on)); });
    renderSuc();
  });
  let ss; sucSearch.addEventListener('input', () => { clearTimeout(ss); ss = setTimeout(renderSuc, 100); });
  renderSuc();


  /* ---------- MAPA ---------- */
  (function mapa() {
    const svgA = $('#mapaArg'), svgB = $('#mapaAmba'), card = $('#mapaCard'), duo = $('#mapaWrap'), sec = $('#mapa');
    if (!svgA || !window.ARG_OUTLINE) return;
    const f = v => v.toFixed(1);
    const poly = (arr, P) => arr.map(([lo, la]) => P(lo, la).map(f).join(',')).join(' ');
    const line = (arr, P) => 'M' + arr.map(([lo, la]) => P(lo, la).map(f).join(',')).join('L');
    const amba = SUC.filter(s => s.zona === 'CABA' || s.zona === 'GBA');
    const interior = SUC.filter(s => s.zona === 'Interior');
    let pinN = 0;
    const pinSVG = (s, x, y, extra = '') => `<g class="pin" tabindex="0" role="button" data-i="${SUC.indexOf(s)}" aria-label="${esc(s.n)}: ${esc(s.dir)}" transform="translate(${f(x)},${f(y)})"><g class="pin__k"><g class="pin__b" style="--d:${(0.25 + (pinN++) * 0.05).toFixed(2)}s"><circle class="pin__pulse" r="13"/><path class="pin__drop" d="M0,4 C-8,-4 -13,-9 -13,-17 A13,13 0 1 1 13,-17 C13,-9 8,-4 0,4Z" transform="translate(0,-2)"/><circle class="pin__in" cy="-19" r="4.6"/>${extra}</g></g></g>`;

    /* --- Argentina --- */
    const LON0 = -70.8, LAT0 = -21.2, SY = 52, SX = SY * Math.cos(30 * Math.PI / 180);
    const PA = (lon, lat) => [(lon - LON0) * SX, (LAT0 - lat) * SY];
    const ba = PA(-58.44, -34.62);
    const lab = (t, lon, lat, dx, dy, anchor = 'end') => { const [x, y] = PA(lon, lat); return `<text x="${f(x + dx)}" y="${f(y + dy)}" text-anchor="${anchor}">${t}</text>`; };
    svgA.innerHTML = `
      <defs>
        <pattern id="lunA" width="16" height="16" patternUnits="userSpaceOnUse"><rect width="16" height="16" fill="#f0899e"/><circle cx="8" cy="8" r="2.1" fill="#fff" fill-opacity=".55"/></pattern>
        <linearGradient id="fadeA" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fffaf7" stop-opacity="0"/><stop offset=".75" stop-color="#fffaf7"/><stop offset="1" stop-color="#fffaf7"/></linearGradient>
      </defs>
      <polygon class="arg__shape" points="${poly(window.ARG_OUTLINE, PA)}"/>
      <polygon class="arg__line" points="${poly(window.ARG_OUTLINE, PA)}" pathLength="1"/>
      <rect x="-10" y="700" width="860" height="210" fill="url(#fadeA)"/>
      <g class="mapa__labels">${lab('Corrientes', -58.83, -27.47, -26, -12)}${lab('Rosario', -60.7, -32.93, -26, -12)}${lab('Buenos Aires', -58.44, -34.62, -30, 34)}</g>
      <path class="arg__conn" d="M${f(ba[0] + 24)},${f(ba[1])} L840,${f(ba[1])}"/>
      ${interior.map(s => { const [x, y] = PA(s.lon, s.lat); return pinSVG(s, x, y); }).join('')}
      <g class="cluster" tabindex="0" role="button" aria-label="Ver las ${amba.length} sucursales de CABA y GBA" transform="translate(${f(ba[0])},${f(ba[1])})"><g class="pin__k"><g class="pin__b" style="--d:.2s"><circle class="pin__pulse" r="24"/><circle class="cluster__c" r="23"/><text y="8" text-anchor="middle">${amba.length}</text></g></g></g>`;

    /* --- AMBA --- */
    const BL0 = -58.64, BLAT0 = -34.44, BSX = 800 / 0.42, BSY = BSX / Math.cos(34.6 * Math.PI / 180);
    const PB = (lon, lat) => [(lon - BL0) * BSX, (BLAT0 - lat) * BSY];
    const coast = [[-58.585,-34.44],[-58.55,-34.445],[-58.52,-34.455],[-58.50,-34.468],[-58.48,-34.49],[-58.47,-34.51],[-58.462,-34.534],[-58.445,-34.542],[-58.425,-34.548],[-58.41,-34.556],[-58.398,-34.566],[-58.385,-34.576],[-58.37,-34.586],[-58.36,-34.596],[-58.338,-34.603],[-58.332,-34.618],[-58.345,-34.628],[-58.35,-34.638],[-58.335,-34.65],[-58.31,-34.665],[-58.28,-34.685],[-58.25,-34.705],[-58.22,-34.725]];
    const water = coast.concat([[-58.2,-34.725],[-58.2,-34.42],[-58.6,-34.42]]);
    const gralPaz = [[-58.462,-34.534],[-58.49,-34.548],[-58.505,-34.562],[-58.522,-34.585],[-58.531,-34.61],[-58.53,-34.64],[-58.515,-34.66],[-58.49,-34.675],[-58.462,-34.693]];
    const riachuelo = [[-58.462,-34.693],[-58.44,-34.684],[-58.42,-34.672],[-58.40,-34.662],[-58.385,-34.656],[-58.37,-34.648],[-58.355,-34.64]];
    const caba = gralPaz.concat(riachuelo.slice(1), coast.slice(6, 18).reverse());
    const roads = [
      [[-58.497,-34.552],[-58.52,-34.53],[-58.545,-34.505],[-58.57,-34.48],[-58.60,-34.455]],
      [[-58.531,-34.637],[-58.57,-34.645],[-58.64,-34.655]],
      [[-58.47,-34.69],[-58.49,-34.72],[-58.52,-34.77],[-58.54,-34.81],[-58.56,-34.86]],
      [[-58.355,-34.64],[-58.30,-34.68],[-58.24,-34.735]],
      [[-58.385,-34.656],[-58.395,-34.70],[-58.40,-34.76],[-58.41,-34.80],[-58.42,-34.86]],
      [[-58.46,-34.735],[-58.48,-34.79],[-58.50,-34.84],[-58.51,-34.90]]
    ];
    const avs = [
      [[-58.372,-34.609],[-58.44,-34.62],[-58.50,-34.632],[-58.531,-34.638]],
      [[-58.375,-34.592],[-58.41,-34.578],[-58.445,-34.56],[-58.47,-34.535],[-58.50,-34.49],[-58.53,-34.46]],
      [[-58.381,-34.585],[-58.381,-34.627]],
      [[-58.41,-34.597],[-58.45,-34.60],[-58.49,-34.60],[-58.53,-34.605]]
    ];
    const zona = (t, lon, lat, cls = '') => { const [x, y] = PB(lon, lat); return `<text class="z ${cls}" x="${f(x)}" y="${f(y)}">${t}</text>`; };
    // pines AMBA, separados para que no se pisen (la distancia mínima depende del tamaño en pantalla)
    function pinesAmba(k) {
      const P0 = amba.map(s => PB(s.lon, s.lat)), P1 = P0.map(p => [p[0], p[1]]), D = 36 * k;
      for (let it = 0; it < 500; it++) {
        for (let a = 0; a < P1.length; a++) for (let b = a + 1; b < P1.length; b++) {
          let dx = P1[b][0] - P1[a][0], dy = P1[b][1] - P1[a][1], d = Math.hypot(dx, dy) || .01;
          if (d < D) { const m = (D - d) / 2; dx /= d; dy /= d; P1[a][0] -= dx * m; P1[a][1] -= dy * m; P1[b][0] += dx * m; P1[b][1] += dy * m; }
        }
        P1.forEach((p, i) => { p[0] += (P0[i][0] - p[0]) * 0.02; p[1] += (P0[i][1] - p[1]) * 0.02; p[0] = Math.max(30, Math.min(770, p[0])); p[1] = Math.max(70, Math.min(1040, p[1])); });
      }
      pinN = 0;
      const leads = amba.map((s, i) => Math.hypot(P1[i][0] - P0[i][0], P1[i][1] - P0[i][1]) > 8 ? `<line class="pin__lead" x1="${f(P0[i][0])}" y1="${f(P0[i][1])}" x2="${f(P1[i][0])}" y2="${f(P1[i][1])}"/><circle class="pin__orig" cx="${f(P0[i][0])}" cy="${f(P0[i][1])}" r="3.5"/>` : '').join('');
      return leads + amba.map((s, i) => pinSVG(s, P1[i][0], P1[i][1])).join('');
    }
    svgB.innerHTML = `
      <defs>
        <pattern id="lunB" width="14" height="14" patternUnits="userSpaceOnUse"><rect width="14" height="14" fill="#fde4ec"/><circle cx="7" cy="7" r="1.6" fill="#f6b7c7"/></pattern>
        <pattern id="olas" width="40" height="18" patternUnits="userSpaceOnUse"><rect width="40" height="18" fill="#d8ecf1"/><path d="M0,9 q10,-6 20,0 t20,0" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="1.6"/></pattern>
      </defs>
      <rect class="amba__tierra" width="800" height="1064"/>
      <polygon class="amba__agua" points="${poly(water, PB)}"/>
      <polygon class="amba__caba" points="${poly(caba, PB)}"/>
      <g class="amba__rutas">${roads.map(r => `<path d="${line(r, PB)}"/>`).join('')}</g>
      <g class="amba__avs">${avs.map(r => `<path d="${line(r, PB)}"/>`).join('')}</g>
      <path class="amba__riachuelo" d="${line(riachuelo, PB)}"/>
      <g class="amba__z">
        ${zona('CIUDAD DE', -58.475, -34.655, 'z--caba')}${zona('BUENOS AIRES', -58.475, -34.664, 'z--caba')}
        ${zona('VICENTE LÓPEZ', -58.535, -34.537)}${zona('SAN ISIDRO', -58.585, -34.487)}${zona('TRES DE FEBRERO', -58.59, -34.60)}
        ${zona('LA MATANZA', -58.585, -34.71)}${zona('LANÚS', -58.355, -34.712)}${zona('AVELLANEDA', -58.32, -34.683)}
        ${zona('LOMAS DE ZAMORA', -58.36, -34.775)}${zona('ESTEBAN ECHEVERRÍA', -58.555, -34.835)}${zona('QUILMES', -58.29, -34.74)}
        ${zona('Río de la Plata', -58.31, -34.52, 'z--rio')}
      </g>
      <g id="ambaPins"></g>`;

    /* --- tarjeta --- */
    let activo = null;
    const WA2 = WA, PIN2 = PIN;
    function abrir(i, g) {
      const s = SUC[i];
      $$('.pin.is-on').forEach(p => p.classList.remove('is-on')); g.classList.add('is-on');
      g.parentNode.appendChild(g);
      const msg = encodeURIComponent(`¡Hola! Quiero reservar una mesa en La Panera Rosa ${s.n}.`);
      card.innerHTML = `<button class="mapa__x" type="button" aria-label="Cerrar"><svg viewBox="0 0 24 24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18"/></svg></button><span class="suc__zona">${s.zona}</span><h3 class="suc__n">${esc(s.n)}</h3><p class="suc__dir">${esc(s.dir)}</p>${s.nota ? `<p class="suc__nota">${esc(s.nota)}</p>` : ''}<div class="suc__acc"><a class="suc__wa" href="https://wa.me/${waNum(s)}?text=${msg}" target="_blank" rel="noopener">${WA2}${s.nota ? 'Consultar' : 'Reservar'}</a><a class="suc__map" href="https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('La Panera Rosa ' + s.dir)}" target="_blank" rel="noopener">${PIN2}Cómo llegar</a></div>`;
      card.classList.remove('is-open'); void card.offsetWidth;
      if (window.innerWidth > 860) {
        const r = g.getBoundingClientRect(), w = duo.getBoundingClientRect(), cw = 300, ch = card.offsetHeight;
        let x = r.left - w.left + r.width / 2 - cw / 2, y = r.top - w.top - ch - 14, below = false;
        if (y < 0) { y = r.bottom - w.top + 14; below = true; }
        x = Math.max(0, Math.min(w.width - cw, x));
        card.style.left = x + 'px'; card.style.top = y + 'px';
        card.style.setProperty('--ax', (r.left - w.left + r.width / 2 - x) + 'px');
        card.classList.toggle('is-below', below);
      } else { card.style.left = ''; card.style.top = ''; }
      card.classList.add('is-open');
      activo = i;
    }
    function cerrar() { card.classList.remove('is-open'); activo = null; $$('.pin.is-on').forEach(p => p.classList.remove('is-on')); }
    card.addEventListener('click', e => { if (e.target.closest('.mapa__x')) { e.stopPropagation(); cerrar(); } });
    duo.addEventListener('click', e => {
      if (card.contains(e.target)) return;
      const g = e.target.closest('.pin');
      if (g) { Number(g.dataset.i) === activo ? cerrar() : abrir(Number(g.dataset.i), g); return; }
      if (e.target.closest('.cluster')) {
        cerrar();
        const panel = $('.mapa__panel--amba'); panel.classList.remove('is-ping'); void panel.offsetWidth; panel.classList.add('is-ping');
        if (window.innerWidth <= 860) panel.scrollIntoView({ behavior: reduce ? 'auto' : 'smooth', block: 'center' });
        return;
      }
      cerrar();
    });
    duo.addEventListener('keydown', e => { if ((e.key === 'Enter' || e.key === ' ') && e.target.closest('.pin, .cluster')) { e.preventDefault(); e.target.dispatchEvent(new MouseEvent('click', { bubbles: true })); } });
    document.addEventListener('click', e => { if (activo !== null && !duo.contains(e.target)) cerrar(); });
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && activo !== null) cerrar(); });
    window.addEventListener('resize', () => { if (activo !== null) cerrar(); ajustar(); });

    // pines más grandes en pantallas chicas
    let kAmba = 0;
    function ajustar() {
      [svgA, svgB].forEach(svg => {
        const vb = svg.viewBox.baseVal.width, k = Math.max(1, Math.min(1.9, (vb * 0.62) / (svg.getBoundingClientRect().width || vb)));
        if (svg === svgB && Math.abs(k - kAmba) > .05) { kAmba = k; $('#ambaPins', svgB).innerHTML = pinesAmba(k); }
        $$('.pin__k', svg).forEach(g => g.setAttribute('transform', `scale(${k.toFixed(2)})`));
      });
    }
    ajustar();

    // animación de entrada + contador
    const entrar = () => {
      sec.classList.add('is-in');
      $$('[data-count]', sec).forEach(dt => {
        const to = Number(dt.dataset.count), t0 = performance.now();
        const step = t => { const p = Math.min(1, (t - t0) / 1100); dt.textContent = Math.round(to * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(step); };
        if (!reduce) requestAnimationFrame(step);
      });
    };
    if ('IntersectionObserver' in window && !reduce) {
      const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { entrar(); io.disconnect(); } }), { threshold: .2 });
      io.observe(duo);
    } else sec.classList.add('is-in');
  })();

  /* ---------- reveal ---------- */
  if ('IntersectionObserver' in window && !reduce) {
    const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-in'); io.unobserve(e.target); } }), { threshold: .15 });
    $$('.reveal').forEach(el => io.observe(el));
  } else $$('.reveal').forEach(el => el.classList.add('is-in'));
})();
