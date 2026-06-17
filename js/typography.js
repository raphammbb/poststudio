/* ── Painel de propriedades de texto ─────────────── */

const FONTS = [
  'Inter',
  'Playfair Display',
  'Space Grotesk',
  'Lora',
  'DM Mono',
];

const WEIGHTS = [
  { value: '300', label: 'Light' },
  { value: '400', label: 'Regular' },
  { value: '500', label: 'Medium' },
  { value: '600', label: 'Semibold' },
  { value: '700', label: 'Bold' },
];

function updatePropsPanel() {
  const panel = document.getElementById('props-panel');
  const empty = document.getElementById('props-empty');

  if (!selectedId) {
    panel.classList.add('hidden');
    empty.classList.remove('hidden');
    return;
  }

  const el = elements.find(e => e.id === selectedId);
  if (!el) return;

  panel.classList.remove('hidden');
  empty.classList.add('hidden');

  if (el.type === 'text') {
    renderTextProps(el);
  } else {
    renderImageProps(el);
  }
}

function renderTextProps(el) {
  const panel = document.getElementById('props-panel');
  panel.innerHTML = `
    <div class="panel-section">
      <div class="panel-section-title">Fonte</div>
      <select id="prop-font" class="mb-8">
        ${FONTS.map(f => `<option value="${f}" ${el.fontFamily === f ? 'selected' : ''}>${f}</option>`).join('')}
      </select>
    </div>

    <div class="panel-section">
      <div class="panel-section-title">Tamanho</div>
      <div class="control-row">
        <input type="range" id="prop-size-range" min="12" max="200" value="${el.fontSize}" style="flex:1">
        <input type="number" id="prop-size-num" value="${el.fontSize}" min="12" max="200" style="width:54px;flex-shrink:0">
      </div>
    </div>

    <div class="panel-section">
      <div class="panel-section-title">Peso</div>
      <select id="prop-weight">
        ${WEIGHTS.map(w => `<option value="${w.value}" ${el.fontWeight === w.value ? 'selected' : ''}>${w.label}</option>`).join('')}
      </select>
    </div>

    <div class="panel-section">
      <div class="panel-section-title">Alinhamento</div>
      <div class="toggle-group">
        <button class="toggle-btn ${el.align === 'left'   ? 'active' : ''}" data-align="left">◀</button>
        <button class="toggle-btn ${el.align === 'center' ? 'active' : ''}" data-align="center">■</button>
        <button class="toggle-btn ${el.align === 'right'  ? 'active' : ''}" data-align="right">▶</button>
      </div>
    </div>

    <div class="panel-section">
      <div class="panel-section-title">Cor</div>
      <div class="control-row">
        <input type="color" id="prop-color" value="${rgbToHex(el.color)}">
        <input type="text" id="prop-color-hex" value="${el.color}" style="flex:1">
      </div>
    </div>

    <div class="panel-section">
      <div class="panel-section-title">Linha</div>
      <div class="control-row">
        <input type="range" id="prop-lh" min="0.9" max="2.5" step="0.05" value="${el.lineHeight}" style="flex:1">
        <span class="control-value" id="prop-lh-val">${el.lineHeight}</span>
      </div>
    </div>

    <div class="panel-section">
      <div class="panel-section-title">Estilo</div>
      <div class="toggle-group">
        <button class="toggle-btn ${el.uppercase ? 'active' : ''}" id="prop-upper">AA</button>
      </div>
    </div>

    <div class="divider"></div>

    <div class="panel-section">
      <div class="panel-section-title">Posição / Tamanho</div>
      <div class="control-row">
        <label class="control-label">X</label>
        <input type="number" id="prop-x" value="${el.x}" style="width:72px">
        <label class="control-label">Y</label>
        <input type="number" id="prop-y" value="${el.y}" style="width:72px">
      </div>
      <div class="control-row">
        <label class="control-label">W</label>
        <input type="number" id="prop-w" value="${el.w}" style="width:72px">
        <label class="control-label">H</label>
        <input type="number" id="prop-h" value="${el.h}" style="width:72px">
      </div>
    </div>

    <div class="panel-section">
      <div class="z-toolbar">
        <button class="btn btn-ghost" style="flex:1;font-size:11px" onclick="bringForward()">↑ Frente</button>
        <button class="btn btn-ghost" style="flex:1;font-size:11px" onclick="sendBackward()">↓ Trás</button>
      </div>
      <button class="btn btn-danger" style="width:100%;margin-top:6px;font-size:11px" onclick="removeSelected()">Deletar elemento</button>
    </div>
  `;

  // bind events
  const bind = (id, fn) => { const el2 = document.getElementById(id); if (el2) el2.addEventListener('input', fn); };

  bind('prop-font',       e => applyProp('fontFamily', e.target.value));
  bind('prop-weight',     e => applyProp('fontWeight', e.target.value));
  bind('prop-lh',         e => { document.getElementById('prop-lh-val').textContent = (+e.target.value).toFixed(2); applyProp('lineHeight', +e.target.value); });
  bind('prop-color',      e => { document.getElementById('prop-color-hex').value = e.target.value; applyProp('color', e.target.value); });
  bind('prop-color-hex',  e => { try { document.getElementById('prop-color').value = e.target.value; applyProp('color', e.target.value); } catch(_) {} });
  bind('prop-x',          e => applyProp('x', +e.target.value));
  bind('prop-y',          e => applyProp('y', +e.target.value));
  bind('prop-w',          e => applyProp('w', +e.target.value));
  bind('prop-h',          e => applyProp('h', +e.target.value));

  // font size syncing (range ↔ number)
  const sizeRange = document.getElementById('prop-size-range');
  const sizeNum   = document.getElementById('prop-size-num');
  sizeRange.addEventListener('input', e => { sizeNum.value = e.target.value; applyProp('fontSize', +e.target.value); });
  sizeNum.addEventListener('input',   e => { sizeRange.value = e.target.value; applyProp('fontSize', +e.target.value); });

  // alignment buttons
  panel.querySelectorAll('[data-align]').forEach(btn => {
    btn.addEventListener('click', () => {
      applyProp('align', btn.dataset.align);
      panel.querySelectorAll('[data-align]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // uppercase toggle
  const upperBtn = document.getElementById('prop-upper');
  if (upperBtn) {
    upperBtn.addEventListener('click', () => {
      const cur = elements.find(e => e.id === selectedId);
      if (!cur) return;
      applyProp('uppercase', !cur.uppercase);
      upperBtn.classList.toggle('active', !cur.uppercase);
    });
  }
}

function renderImageProps(el) {
  const panel = document.getElementById('props-panel');
  panel.innerHTML = `
    <div class="panel-section">
      <div class="panel-section-title">Imagem</div>
      <p style="font-size:11px;color:var(--text-muted);margin-bottom:10px">Arraste e redimensione no canvas.</p>
    </div>
    <div class="panel-section">
      <div class="z-toolbar">
        <button class="btn btn-ghost" style="flex:1;font-size:11px" onclick="bringForward()">↑ Frente</button>
        <button class="btn btn-ghost" style="flex:1;font-size:11px" onclick="sendBackward()">↓ Trás</button>
      </div>
      <button class="btn btn-danger" style="width:100%;margin-top:6px;font-size:11px" onclick="removeSelected()">Deletar elemento</button>
    </div>
  `;
}

function applyProp(prop, value) {
  if (!selectedId) return;
  const update = {};
  update[prop] = value;
  updateElement(selectedId, update);
}

function rgbToHex(color) {
  if (color.startsWith('#')) return color.length === 7 ? color : '#ffffff';
  return '#ffffff';
}
