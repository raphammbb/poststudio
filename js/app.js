/* ── App: orquestrador principal ─────────────────── */

let currentBg = { type: 'color', value: '#1a1a1a' };
let activePanelLeft = 'templates';

/* ── Boot ─────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  initCanvas();
  initCarousel();
  buildLeftPanel();
  buildRightPanel();
  bindHeader();
  setBackground('#1a1a1a', 'color');
});

/* ── Toast ────────────────────────────────────────── */
let toastTimer = null;
function showToast(msg, duration = 2200) {
  const el = document.getElementById('toast');
  el.textContent = msg;
  el.classList.add('visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove('visible'), duration);
}

/* ── Left panel ───────────────────────────────────── */
function buildLeftPanel() {
  const tabs = document.querySelectorAll('#panel-left .panel-tab');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      activePanelLeft = tab.dataset.panel;
      renderLeftPanel();
    });
  });
  renderLeftPanel();
}

function renderLeftPanel() {
  const body = document.getElementById('panel-left-body');
  switch (activePanelLeft) {
    case 'templates': renderTemplatesPanel(body); break;
    case 'fundos':    renderBgPanel(body);        break;
    case 'texto':     renderAddTextPanel(body);   break;
    case 'upload':    renderUploadPanel(body);    break;
  }
}

/* ── Templates ────────────────────────────────────── */
function renderTemplatesPanel(body) {
  const cats = [
    { key: 'educacional', label: 'Educacional' },
    { key: 'engajamento', label: 'Engajamento' },
    { key: 'produto',     label: 'Produto / Serviço' },
    { key: 'marca',       label: 'Pessoal / Marca' },
    { key: 'especial',    label: 'Data Especial' },
    { key: 'carrossel',   label: 'Carrossel' },
  ];

  body.innerHTML = cats.map(cat => {
    const items = TEMPLATES.filter(t => t.category === cat.key);
    if (!items.length) return '';
    return `
      <div class="panel-section">
        <div class="panel-section-title">${cat.label}</div>
        <div class="template-grid" data-cat="${cat.key}"></div>
      </div>`;
  }).join('');

  TEMPLATES.forEach(tpl => {
    const grid = body.querySelector(`.template-grid[data-cat="${tpl.category}"]`);
    if (!grid) return;
    const card = document.createElement('div');
    card.className = 'template-card';
    card.innerHTML = `<div class="tpl-icon">${tpl.icon}</div><div class="tpl-name">${tpl.name}</div>`;
    card.addEventListener('click', () => loadTemplate(tpl));
    grid.appendChild(card);
  });
}

/* ── Fundos ───────────────────────────────────────── */
function renderBgPanel(body) {
  const cats = [
    { key: 'gradient', label: 'Gradientes' },
    { key: 'geo',      label: 'Geométricos' },
    { key: 'texture',  label: 'Texturas' },
    { key: 'abstract', label: 'Abstratos' },
  ];

  let html = '';
  cats.forEach(cat => {
    const items = BACKGROUNDS.filter(b => b.category === cat.key);
    html += `<div class="panel-section">
      <div class="panel-section-title">${cat.label}</div>
      <div class="bg-grid">
        ${items.map(b => `
          <div class="bg-thumb" data-bg="${b.id}" title="${b.label}">
            <img src="assets/backgrounds/${b.id}-thumb.svg" alt="${b.label}" loading="lazy">
            <span>${b.label}</span>
          </div>`).join('')}
      </div>
    </div>`;
  });

  // custom gradient section
  html += `
    <div class="panel-section">
      <div class="panel-section-title">Gradiente Customizado</div>
      <div class="grad-row">
        <label>Cor 1</label>
        <input type="color" id="grad-c1" value="#3d1a78">
      </div>
      <div class="grad-row">
        <label>Cor 2</label>
        <input type="color" id="grad-c2" value="#060818">
      </div>
      <div class="grad-row">
        <label>Ângulo</label>
        <input type="range" id="grad-angle" min="0" max="360" value="135" style="flex:1">
        <span id="grad-angle-val" style="font-size:11px;color:var(--text-muted);min-width:30px">135°</span>
      </div>
      <button class="btn btn-ghost" style="width:100%;margin-top:4px;font-size:12px" id="btn-apply-grad">Aplicar</button>
    </div>

    <div class="panel-section">
      <div class="panel-section-title">Cor Sólida</div>
      <div class="control-row">
        <input type="color" id="solid-color" value="#1a1a1a">
        <button class="btn btn-ghost" style="flex:1;font-size:12px" id="btn-apply-solid">Aplicar</button>
      </div>
    </div>

    <div class="panel-section">
      <div class="panel-section-title">Foto Própria</div>
      <label class="bg-upload-btn" for="bg-photo-input">
        📷 Escolher foto
        <input type="file" id="bg-photo-input" accept="image/*" style="display:none">
      </label>
      <p id="bg-photo-hint" style="font-size:10px;color:var(--text-muted);margin-top:6px;display:none">
        Arraste para reposicionar · Scroll para zoom
      </p>
    </div>
  `;

  body.innerHTML = html;

  // SVG thumbnails
  body.querySelectorAll('.bg-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => {
      body.querySelectorAll('.bg-thumb').forEach(t => t.classList.remove('active'));
      thumb.classList.add('active');
      setBackground(thumb.dataset.bg, 'svg');
    });
  });

  // custom gradient
  document.getElementById('grad-angle').addEventListener('input', e => {
    document.getElementById('grad-angle-val').textContent = e.target.value + '°';
  });
  document.getElementById('btn-apply-grad').addEventListener('click', () => {
    const c1 = document.getElementById('grad-c1').value;
    const c2 = document.getElementById('grad-c2').value;
    const angle = document.getElementById('grad-angle').value;
    setBackground(`linear-gradient(${angle}deg, ${c1}, ${c2})`, 'gradient');
    body.querySelectorAll('.bg-thumb').forEach(t => t.classList.remove('active'));
  });

  // solid color
  document.getElementById('btn-apply-solid').addEventListener('click', () => {
    const color = document.getElementById('solid-color').value;
    setBackground(color, 'color');
    body.querySelectorAll('.bg-thumb').forEach(t => t.classList.remove('active'));
  });

  // photo upload
  document.getElementById('bg-photo-input').addEventListener('change', e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = evt => {
      setPhotoBackground(evt.target.result, {x: 0, y: 0}, 1);
      document.getElementById('bg-photo-hint').style.display = 'block';
      body.querySelectorAll('.bg-thumb').forEach(t => t.classList.remove('active'));
    };
    reader.readAsDataURL(file);
  });
}

/* ── Background setters ───────────────────────────── */
function setBackground(value, type) {
  const layer = document.getElementById('canvas-bg-layer');
  layer.className = 'canvas-bg-layer'; // reset photo mode
  layer.style.backgroundImage = '';
  layer.style.backgroundColor = '';
  layer.style.transform = '';

  // disable photo pan/zoom if we're switching away
  unbindPhotoPanZoom();

  if (type === 'svg') {
    layer.style.backgroundImage = `url(assets/backgrounds/${value}.svg)`;
    layer.style.backgroundSize  = 'cover';
    currentBg = { type: 'svg', value };
  } else if (type === 'color') {
    layer.style.backgroundColor = value;
    currentBg = { type: 'color', value };
  } else if (type === 'gradient') {
    layer.style.backgroundImage = value;
    currentBg = { type: 'gradient', value };
  }

  // sync current slide bg
  if (slides[activeSlide]) slides[activeSlide].bg = JSON.parse(JSON.stringify(currentBg));
}

/* ── Photo background (pan + zoom) ───────────────── */
let photoBgState = { src: null, x: 0, y: 0, scale: 1 };
let photoDrag = null;

function setPhotoBackground(src, pan, scale) {
  const layer = document.getElementById('canvas-bg-layer');
  layer.className = 'canvas-bg-layer photo-mode'; // re-add id attr safe
  layer.id = 'canvas-bg-layer';

  photoBgState = { src, x: pan?.x ?? 0, y: pan?.y ?? 0, scale: scale ?? 1 };
  layer.style.backgroundImage  = `url(${src})`;
  layer.style.backgroundSize   = 'cover';
  layer.style.backgroundPosition = 'center';
  applyPhotoPan();

  currentBg = { type: 'photo', photoSrc: src, photoPan: { x: photoBgState.x, y: photoBgState.y }, photoScale: photoBgState.scale };
  if (slides[activeSlide]) slides[activeSlide].bg = JSON.parse(JSON.stringify(currentBg));

  bindPhotoPanZoom(layer);
}

function applyPhotoPan() {
  const layer = document.getElementById('canvas-bg-layer');
  const pct = photoBgState.scale * 100;
  layer.style.backgroundSize     = `${pct}%`;
  layer.style.backgroundPosition = `calc(50% + ${photoBgState.x}px) calc(50% + ${photoBgState.y}px)`;
}

function bindPhotoPanZoom(layer) {
  unbindPhotoPanZoom();

  layer._onMousedown = e => {
    if (e.button !== 0) return;
    e.preventDefault();
    photoDrag = { startX: e.clientX, startY: e.clientY, origX: photoBgState.x, origY: photoBgState.y };
    layer.classList.add('dragging');
  };
  layer._onMousemove = e => {
    if (!photoDrag) return;
    photoBgState.x = photoDrag.origX + (e.clientX - photoDrag.startX) / canvasScale;
    photoBgState.y = photoDrag.origY + (e.clientY - photoDrag.startY) / canvasScale;
    applyPhotoPan();
  };
  layer._onMouseup = () => {
    if (!photoDrag) return;
    photoDrag = null;
    layer.classList.remove('dragging');
    currentBg.photoPan = { x: photoBgState.x, y: photoBgState.y };
    if (slides[activeSlide]) slides[activeSlide].bg = JSON.parse(JSON.stringify(currentBg));
  };
  layer._onWheel = e => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.05 : 0.05;
    photoBgState.scale = Math.min(5, Math.max(0.5, photoBgState.scale + delta));
    applyPhotoPan();
    currentBg.photoScale = photoBgState.scale;
    if (slides[activeSlide]) slides[activeSlide].bg = JSON.parse(JSON.stringify(currentBg));
  };

  layer.addEventListener('mousedown', layer._onMousedown);
  document.addEventListener('mousemove', layer._onMousemove);
  document.addEventListener('mouseup',   layer._onMouseup);
  layer.addEventListener('wheel', layer._onWheel, { passive: false });
}

function unbindPhotoPanZoom() {
  const layer = document.getElementById('canvas-bg-layer');
  if (!layer) return;
  if (layer._onMousedown)  layer.removeEventListener('mousedown', layer._onMousedown);
  if (layer._onMousemove)  document.removeEventListener('mousemove', layer._onMousemove);
  if (layer._onMouseup)    document.removeEventListener('mouseup', layer._onMouseup);
  if (layer._onWheel)      layer.removeEventListener('wheel', layer._onWheel);
  layer._onMousedown = layer._onMousemove = layer._onMouseup = layer._onWheel = null;
}

/* ── Adicionar texto ──────────────────────────────── */
function renderAddTextPanel(body) {
  body.innerHTML = `
    <div class="panel-section">
      <div class="panel-section-title">Adicionar texto</div>
      <button class="btn btn-primary" style="width:100%;margin-bottom:8px" onclick="addTextElement()">+ Texto grande</button>
      <button class="btn btn-ghost" style="width:100%;margin-bottom:8px" onclick="addSmallText()">+ Texto pequeno</button>
      <button class="btn btn-ghost" style="width:100%" onclick="addSubText()">+ Legenda / subtítulo</button>
    </div>
    <div class="panel-section">
      <div class="panel-section-title">Atalhos</div>
      <p style="font-size:11px;color:var(--text-muted);line-height:1.7">
        <b style="color:var(--text-primary)">Clicar</b> — selecionar<br>
        <b style="color:var(--text-primary)">Duplo clique</b> — editar texto<br>
        <b style="color:var(--text-primary)">Esc</b> — sair da edição<br>
        <b style="color:var(--text-primary)">Delete</b> — remover elemento<br>
        <b style="color:var(--text-primary)">Ctrl+Z</b> — desfazer
      </p>
    </div>
  `;
}

function addSmallText() {
  addElement({ type: 'text', x: 100, y: 200, w: 500, h: 80, text: 'Subtítulo', fontSize: 36, fontWeight: '400' });
}
function addSubText() {
  addElement({ type: 'text', x: 100, y: 300, w: 700, h: 60, text: 'Legenda ou texto de apoio', fontSize: 28, fontWeight: '400', color: 'rgba(255,255,255,0.6)' });
}

/* ── Upload de imagem como elemento ──────────────── */
function renderUploadPanel(body) {
  body.innerHTML = `
    <div class="panel-section">
      <div class="panel-section-title">Imagem no canvas</div>
      <label class="bg-upload-btn" for="el-img-input" style="flex-direction:column;gap:4px;padding:20px">
        <span style="font-size:24px">🖼️</span>
        <span>Clique para escolher</span>
        <span style="font-size:10px;color:var(--text-muted)">JPG, PNG, GIF, WebP</span>
        <input type="file" id="el-img-input" accept="image/*" style="display:none">
      </label>
    </div>
    <div class="panel-section">
      <p style="font-size:11px;color:var(--text-muted);line-height:1.6">
        A imagem vai aparecer no canvas como elemento que você pode arrastar e redimensionar.<br><br>
        Para usar uma foto como <b style="color:var(--text-primary)">fundo</b>, vá na aba Fundos.
      </p>
    </div>
  `;

  document.getElementById('el-img-input').addEventListener('change', e => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = evt => addImageElement(evt.target.result);
    reader.readAsDataURL(file);
  });
}

/* ── Right panel (props) ──────────────────────────── */
function buildRightPanel() {
  document.getElementById('props-panel').innerHTML = '';
  updatePropsPanel();
}

/* ── Header actions ───────────────────────────────── */
function bindHeader() {
  document.getElementById('btn-new').addEventListener('click', () => {
    if (elements.length === 0 || confirm('Criar novo post? O conteúdo atual será perdido.')) {
      elements = [];
      document.querySelectorAll('.canvas-el').forEach(n => n.remove());
      slides = [createSlide()];
      activeSlide = 0;
      setBackground('#1a1a1a', 'color');
      selectedId = null;
      updatePropsPanel();
      renderSlidesBar();
      saveHistory();
    }
  });

  document.getElementById('btn-export').addEventListener('click', () => {
    exportCurrentSlide();
  });

  document.getElementById('btn-export-all').addEventListener('click', () => {
    exportAllSlides();
  });
}
