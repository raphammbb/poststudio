/* ── Carrossel: multi-slide ───────────────────────── */

let slides = [];
let activeSlide = 0;

function initCarousel() {
  slides = [createSlide()];
  activeSlide = 0;
  renderSlidesBar();
}

function createSlide() {
  return {
    id: 'slide_' + Math.random().toString(36).slice(2, 7),
    elements: [],
    bg: { type: 'color', value: '#1a1a1a', photoSrc: null, photoPan: {x:0,y:0}, photoScale: 1 },
  };
}

function saveCurrentSlide() {
  if (!slides[activeSlide]) return;
  // Sync live canvas state into slide snapshot
  slides[activeSlide].elements = JSON.parse(JSON.stringify(elements));
  slides[activeSlide].bg = JSON.parse(JSON.stringify(currentBg));
}

function loadSlide(index) {
  saveCurrentSlide();
  activeSlide = index;
  const slide = slides[activeSlide];

  elements = JSON.parse(JSON.stringify(slide.elements));
  selectedId = null;
  renderAll();

  // restore background
  const bg = slide.bg;
  if (bg.type === 'svg') {
    setBackground(bg.value, 'svg');
  } else if (bg.type === 'color') {
    setBackground(bg.value, 'color');
  } else if (bg.type === 'gradient') {
    setBackground(bg.value, 'gradient');
  } else if (bg.type === 'photo') {
    setPhotoBackground(bg.photoSrc, bg.photoPan, bg.photoScale);
  }

  updatePropsPanel();
  renderSlidesBar();
  history = [JSON.stringify(elements)];
  historyIndex = 0;
}

function addSlide() {
  saveCurrentSlide();
  slides.push(createSlide());
  loadSlide(slides.length - 1);
}

function deleteSlide(index) {
  if (slides.length === 1) return;
  slides.splice(index, 1);
  if (activeSlide >= slides.length) activeSlide = slides.length - 1;
  loadSlide(activeSlide);
}

function renderSlidesBar() {
  const bar = document.getElementById('slides-bar');
  const thumbsHtml = slides.map((slide, i) => `
    <div class="slide-thumb ${i === activeSlide ? 'active' : ''}"
         data-idx="${i}"
         title="Slide ${i+1}"
         draggable="true">
      ${i === 0 ? '<span class="badge">CAPA</span>' : ''}
    </div>
  `).join('');

  bar.innerHTML = thumbsHtml + `<div id="btn-add-slide" title="Adicionar slide">+</div>`;

  bar.querySelectorAll('.slide-thumb').forEach(thumb => {
    thumb.addEventListener('click', () => loadSlide(+thumb.dataset.idx));
    thumb.addEventListener('dragstart', e => { e.dataTransfer.setData('text/plain', thumb.dataset.idx); });
    thumb.addEventListener('dragover', e => e.preventDefault());
    thumb.addEventListener('drop', e => {
      const from = +e.dataTransfer.getData('text/plain');
      const to = +thumb.dataset.idx;
      if (from === to) return;
      const moved = slides.splice(from, 1)[0];
      slides.splice(to, 0, moved);
      activeSlide = to;
      renderSlidesBar();
    });
  });

  document.getElementById('btn-add-slide').addEventListener('click', addSlide);
}
