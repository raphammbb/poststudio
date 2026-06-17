/* ── Export PNG via html2canvas ───────────────────── */

const H2C_OPTS = {
  width: CANVAS_W,
  height: CANVAS_H,
  scale: 1,
  useCORS: true,
  allowTaint: true,
  backgroundColor: null,
  logging: false,
  imageTimeout: 0,
  removeContainer: true,
};

async function exportCurrentSlide() {
  showExportOverlay(true);
  deselectAll();

  const canvas = document.getElementById('canvas');
  const orig   = canvas.style.transform;
  canvas.style.transform = 'scale(1)';
  await new Promise(r => requestAnimationFrame(r)); // flush layout

  try {
    const img  = await html2canvas(canvas, H2C_OPTS);
    const date = new Date().toISOString().slice(0, 10);
    downloadCanvas(img, `poststudio-${date}-slide${activeSlide + 1}.png`);
    if (typeof showToast === 'function') showToast('PNG baixado com sucesso');
  } catch (err) {
    console.error('Export error:', err);
    if (typeof showToast === 'function') showToast('Erro ao exportar — tente novamente');
  } finally {
    canvas.style.transform = orig;
    showExportOverlay(false);
  }
}

async function exportAllSlides() {
  if (slides.length === 1) { exportCurrentSlide(); return; }

  showExportOverlay(true);
  deselectAll();
  saveCurrentSlide();

  const canvas   = document.getElementById('canvas');
  const orig     = canvas.style.transform;
  const date     = new Date().toISOString().slice(0, 10);
  const savedIdx = activeSlide;
  const files    = [];

  try {
    for (let i = 0; i < slides.length; i++) {
      const slide = slides[i];
      elements = JSON.parse(JSON.stringify(slide.elements));
      renderAll();
      restoreBgFromSlide(slide.bg);

      canvas.style.transform = 'scale(1)';
      await new Promise(r => requestAnimationFrame(() => requestAnimationFrame(r)));

      const img = await html2canvas(canvas, H2C_OPTS);
      files.push({ name: `poststudio-${date}-slide${String(i + 1).padStart(2, '0')}.png`, img });
    }

    for (const f of files) {
      downloadCanvas(f.img, f.name);
      await new Promise(r => setTimeout(r, 300));
    }

    if (typeof showToast === 'function') showToast(`${files.length} slides baixados`);
  } catch (err) {
    console.error('Export all error:', err);
    if (typeof showToast === 'function') showToast('Erro ao exportar slides');
  } finally {
    loadSlide(savedIdx);
    canvas.style.transform = orig;
    showExportOverlay(false);
  }
}

function downloadCanvas(imgCanvas, name) {
  const link  = document.createElement('a');
  link.download = name;
  link.href     = imgCanvas.toDataURL('image/png');
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

function showExportOverlay(visible) {
  document.getElementById('export-overlay').classList.toggle('visible', visible);
}

function restoreBgFromSlide(bg) {
  if (!bg) return;
  if (bg.type === 'svg')      setBackground(bg.value, 'svg');
  else if (bg.type === 'color')    setBackground(bg.value, 'color');
  else if (bg.type === 'gradient') setBackground(bg.value, 'gradient');
  else if (bg.type === 'photo')    setPhotoBackground(bg.photoSrc, bg.photoPan, bg.photoScale);
}
