/* ── Canvas: elementos, drag, resize, seleção, undo ── */

const CANVAS_W = 1080;
const CANVAS_H = 1350;
let canvasScale = 1;

let elements = [];
let selectedId = null;
let history = [];
let historyIndex = -1;

let dragState = null;
let resizeState = null;

/* ── Init ─────────────────────────────────────────── */
function initCanvas() {
  const area = document.getElementById('canvas-area');
  const canvas = document.getElementById('canvas');

  scaleCanvas();
  window.addEventListener('resize', scaleCanvas);

  canvas.addEventListener('mousedown', onCanvasMousedown);
  document.addEventListener('mousemove', onDocMousemove);
  document.addEventListener('mouseup', onDocMouseup);
  document.addEventListener('keydown', onKeydown);

  saveHistory();
}

function scaleCanvas() {
  const area    = document.getElementById('canvas-area');
  const canvas  = document.getElementById('canvas');
  const wrapper = document.getElementById('canvas-wrapper');
  const zoomEl  = document.getElementById('zoom-indicator');

  const availW = area.clientWidth  - 48;
  const availH = area.clientHeight - 90;

  const scaleW = availW / CANVAS_W;
  const scaleH = availH / CANVAS_H;
  canvasScale = Math.min(scaleW, scaleH, 1);

  canvas.style.transform  = `scale(${canvasScale})`;
  wrapper.style.width     = Math.round(CANVAS_W * canvasScale) + 'px';
  wrapper.style.height    = Math.round(CANVAS_H * canvasScale) + 'px';

  if (zoomEl) zoomEl.textContent = Math.round(canvasScale * 100) + '%';
}

/* ── History ──────────────────────────────────────── */
function saveHistory() {
  const snapshot = JSON.stringify(elements);
  history = history.slice(0, historyIndex + 1);
  history.push(snapshot);
  if (history.length > 30) history.shift();
  historyIndex = history.length - 1;
}

function undo() {
  if (historyIndex <= 0) return;
  historyIndex--;
  elements = JSON.parse(history[historyIndex]);
  selectedId = null;
  renderAll();
  updatePropsPanel();
}

/* ── Elements ─────────────────────────────────────── */
function makeId() {
  return 'el_' + Math.random().toString(36).slice(2, 9);
}

function addElement(def) {
  const el = {
    id: makeId(),
    type: def.type || 'text',
    x: def.x ?? 100, y: def.y ?? 100,
    w: def.w ?? 400, h: def.h ?? 100,
    // text props
    text:       def.text       ?? 'Texto',
    fontSize:   def.fontSize   ?? 48,
    fontFamily: def.fontFamily ?? 'Inter',
    fontWeight: def.fontWeight ?? '700',
    color:      def.color      ?? '#ffffff',
    align:      def.align      ?? 'left',
    lineHeight: def.lineHeight ?? 1.3,
    uppercase:  def.uppercase  ?? false,
    // image props
    src: def.src ?? null,
    zIndex: elements.length,
  };
  elements.push(el);
  renderElement(el);
  selectElement(el.id);
  saveHistory();
  return el;
}

function removeSelected() {
  if (!selectedId) return;
  const node = document.getElementById(selectedId);
  if (node) node.remove();
  elements = elements.filter(e => e.id !== selectedId);
  selectedId = null;
  updatePropsPanel();
  saveHistory();
}

function loadTemplate(tpl) {
  elements = [];
  document.querySelectorAll('.canvas-el').forEach(n => n.remove());
  selectedId = null;

  const bgInLib = BACKGROUNDS.find(b => b.id === tpl.bg);
  if (bgInLib) {
    setBackground(tpl.bg, 'svg');
  } else {
    setBackground('#1a1a1a', 'color');
  }

  tpl.elements.forEach(def => {
    const el = { ...def, id: makeId(), zIndex: elements.length };
    elements.push(el);
    renderElement(el);
  });

  updatePropsPanel();
  saveHistory();
  if (typeof showToast === 'function') showToast('Template "' + tpl.name + '" aplicado');
}

/* ── Render ───────────────────────────────────────── */
function renderAll() {
  document.querySelectorAll('.canvas-el').forEach(n => n.remove());
  elements.forEach(el => renderElement(el));
}

function renderElement(el) {
  const canvas = document.getElementById('canvas');
  let node = document.getElementById(el.id);

  if (!node) {
    node = document.createElement('div');
    node.id = el.id;
    node.className = 'canvas-el';
    canvas.appendChild(node);
  }

  node.style.left   = el.x + 'px';
  node.style.top    = el.y + 'px';
  node.style.width  = el.w + 'px';
  node.style.height = el.h + 'px';
  node.style.zIndex = el.zIndex;

  if (el.type === 'text') {
    node.classList.add('canvas-el-text');
    node.classList.remove('canvas-el-image');
    node.style.fontSize   = el.fontSize + 'px';
    node.style.fontFamily = `'${el.fontFamily}', sans-serif`;
    node.style.fontWeight = el.fontWeight;
    node.style.color      = el.color;
    node.style.textAlign  = el.align;
    node.style.lineHeight = el.lineHeight;
    node.style.textTransform = el.uppercase ? 'uppercase' : 'none';
    if (!node.hasAttribute('contenteditable')) {
      node.setAttribute('contenteditable', 'false');
    }
    if (node.getAttribute('contenteditable') === 'false') {
      node.textContent = el.text;
    }
  } else if (el.type === 'image') {
    node.classList.add('canvas-el-image');
    node.classList.remove('canvas-el-text');
    node.removeAttribute('contenteditable');
    if (!node.querySelector('img')) {
      const img = document.createElement('img');
      node.appendChild(img);
    }
    node.querySelector('img').src = el.src;
  }

  // handles
  if (!node.querySelector('.el-handles')) {
    node.insertAdjacentHTML('beforeend', `
      <div class="el-handles">
        <div class="el-handle tl" data-handle="tl"></div>
        <div class="el-handle tr" data-handle="tr"></div>
        <div class="el-handle bl" data-handle="bl"></div>
        <div class="el-handle br" data-handle="br"></div>
        <div class="el-handle tm" data-handle="tm"></div>
        <div class="el-handle bm" data-handle="bm"></div>
        <div class="el-handle ml" data-handle="ml"></div>
        <div class="el-handle mr" data-handle="mr"></div>
      </div>`);
  }

  if (el.id === selectedId) {
    node.classList.add('selected');
  } else {
    node.classList.remove('selected');
  }
}

function updateElement(id, props) {
  const el = elements.find(e => e.id === id);
  if (!el) return;
  Object.assign(el, props);
  // sync text from DOM if editing
  const node = document.getElementById(id);
  if (node && el.type === 'text') {
    el.text = node.textContent;
  }
  renderElement(el);
  saveHistory();
}

/* ── Selection ────────────────────────────────────── */
function selectElement(id) {
  if (selectedId === id) return;
  if (selectedId) {
    const prev = document.getElementById(selectedId);
    if (prev) {
      prev.classList.remove('selected');
      if (prev.getAttribute('contenteditable') === 'true') exitTextEdit(prev);
    }
  }
  selectedId = id;
  if (id) {
    const node = document.getElementById(id);
    if (node) node.classList.add('selected');
  }
  updatePropsPanel();
}

function deselectAll() {
  selectElement(null);
}

/* ── Mouse events ─────────────────────────────────── */
function onCanvasMousedown(e) {
  const handle = e.target.closest('.el-handle');
  const elNode = e.target.closest('.canvas-el');

  if (handle) {
    e.preventDefault();
    e.stopPropagation();
    const elNode2 = handle.closest('.canvas-el');
    const el = elements.find(e2 => e2.id === elNode2.id);
    if (!el) return;
    resizeState = {
      el, handle: handle.dataset.handle,
      startX: e.clientX, startY: e.clientY,
      origX: el.x, origY: el.y,
      origW: el.w, origH: el.h,
    };
    return;
  }

  if (elNode) {
    const el = elements.find(e2 => e2.id === elNode.id);
    if (!el) return;

    // double-click → edit text
    if (e.detail === 2 && el.type === 'text') {
      enterTextEdit(elNode, el);
      return;
    }

    selectElement(el.id);
    e.preventDefault();
    dragState = {
      el, startX: e.clientX, startY: e.clientY,
      origX: el.x, origY: el.y,
    };
    return;
  }

  // click on empty canvas
  deselectAll();
}

function onDocMousemove(e) {
  if (dragState) {
    const dx = (e.clientX - dragState.startX) / canvasScale;
    const dy = (e.clientY - dragState.startY) / canvasScale;
    dragState.el.x = Math.round(dragState.origX + dx);
    dragState.el.y = Math.round(dragState.origY + dy);
    const node = document.getElementById(dragState.el.id);
    if (node) {
      node.style.left = dragState.el.x + 'px';
      node.style.top  = dragState.el.y + 'px';
    }
    return;
  }

  if (resizeState) {
    const dx = (e.clientX - resizeState.startX) / canvasScale;
    const dy = (e.clientY - resizeState.startY) / canvasScale;
    const { el, handle, origX, origY, origW, origH } = resizeState;
    const MIN = 40;

    let newX = origX, newY = origY, newW = origW, newH = origH;

    if (handle.includes('r')) newW = Math.max(MIN, origW + dx);
    if (handle.includes('l')) { newW = Math.max(MIN, origW - dx); newX = origX + (origW - newW); }
    if (handle.includes('b')) newH = Math.max(MIN, origH + dy);
    if (handle.includes('t')) { newH = Math.max(MIN, origH - dy); newY = origY + (origH - newH); }

    el.x = Math.round(newX); el.y = Math.round(newY);
    el.w = Math.round(newW); el.h = Math.round(newH);

    const node = document.getElementById(el.id);
    if (node) {
      node.style.left   = el.x + 'px';
      node.style.top    = el.y + 'px';
      node.style.width  = el.w + 'px';
      node.style.height = el.h + 'px';
    }
    return;
  }
}

function onDocMouseup() {
  if (dragState || resizeState) saveHistory();
  dragState = null;
  resizeState = null;
}

/* ── Text editing ─────────────────────────────────── */
function enterTextEdit(node, el) {
  node.setAttribute('contenteditable', 'true');
  node.focus();
  const range = document.createRange();
  range.selectNodeContents(node);
  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);
}

function exitTextEdit(node) {
  const el = elements.find(e => e.id === node.id);
  if (el) {
    el.text = node.textContent;
    saveHistory();
  }
  node.setAttribute('contenteditable', 'false');
}

/* ── Keyboard ─────────────────────────────────────── */
function onKeydown(e) {
  const active = document.activeElement;
  const isEditing = active && active.getAttribute('contenteditable') === 'true';

  if (isEditing) {
    if (e.key === 'Escape') {
      exitTextEdit(active);
      active.blur();
    }
    return;
  }

  if ((e.key === 'Delete' || e.key === 'Backspace') && selectedId) {
    removeSelected();
    return;
  }
  if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
    e.preventDefault();
    undo();
  }
}

/* ── Z-order ──────────────────────────────────────── */
function bringForward() {
  if (!selectedId) return;
  const el = elements.find(e => e.id === selectedId);
  if (!el) return;
  const above = elements.filter(e => e.zIndex > el.zIndex).sort((a,b) => a.zIndex - b.zIndex)[0];
  if (above) { [el.zIndex, above.zIndex] = [above.zIndex, el.zIndex]; }
  renderAll();
  selectElement(selectedId);
}

function sendBackward() {
  if (!selectedId) return;
  const el = elements.find(e => e.id === selectedId);
  if (!el) return;
  const below = elements.filter(e => e.zIndex < el.zIndex).sort((a,b) => b.zIndex - a.zIndex)[0];
  if (below) { [el.zIndex, below.zIndex] = [below.zIndex, el.zIndex]; }
  renderAll();
  selectElement(selectedId);
}

function addTextElement() {
  addElement({ type: 'text', x: 100, y: 100, w: 600, h: 120, text: 'Novo texto' });
}

function addImageElement(src) {
  addElement({ type: 'image', x: 100, y: 100, w: 500, h: 500, src });
}
