/* =========================
   MEDIA
========================= */
const overlay = document.getElementById("overlay");
const audio   = document.getElementById("background-audio");
const volumeIcon = document.getElementById("volume-icon");
const volumeSlider = document.getElementById("volume");

function startMedia(){ overlay.classList.add("hidden"); audio?.play?.(); }
function setVolume(v){
  v = Math.max(0, Math.min(1, Number(v)));
  if (audio) audio.volume = v;
  if (volumeIcon) volumeIcon.src = v > 0 ? "assets/vol_on.png" : "assets/vol_off.png";
}
function toggleMute(){ setVolume(((audio?.volume||0)>0)?0:1); if (volumeSlider) volumeSlider.value = (audio?.volume||0); }
window.addEventListener("load", ()=>{ const v = Number(localStorage.getItem("vol")||0.5); setVolume(v); if (volumeSlider) volumeSlider.value = v; });
if (volumeSlider) volumeSlider.addEventListener("input", e=>{ setVolume(e.target.value); localStorage.setItem("vol", e.target.value); });

/* =========================
   MAP / ZOOM
========================= */
const svg     = document.getElementById("got-map");
const panzoom = document.getElementById("panzoom");
const backBtn = document.getElementById("back-btn");

let activeRegion = null;

function computeZoomToBBox(bbox, factor=0.82){
  const viewW = svg.clientWidth;
  const viewH = svg.clientHeight;
  const scale = Math.min((viewW*factor)/bbox.width, (viewH*factor)/bbox.height);
  const cx = bbox.x + bbox.width/2;
  const cy = bbox.y + bbox.height/2;
  const tx = (viewW/2) - (cx*scale);
  const ty = (viewH/2) - (cy*scale);
  return { scale, tx, ty };
}

function zoomToRegion(regionEl){
  const bbox  = regionEl.getBBox();
  const {scale, tx, ty} = computeZoomToBBox(bbox);
  panzoom.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`;
  // Reveal island info AFTER the zoom finishes
  setTimeout(()=>{
    regionEl.classList.add("active");
    activeRegion = regionEl;
    backBtn.classList.add("show");
  }, 650);
}

function resetZoom(){
  panzoom.style.transform = `translate(0px, 0px) scale(1)`;
  if (activeRegion) activeRegion.classList.remove("active");
  activeRegion = null;
  backBtn.classList.remove("show");
}

/* Enable: clicking island zooms + reveals in-island info (About/Contact); 
   Projects also zooms, and only then cities become clickable */
document.querySelectorAll(".region").forEach(region=>{
  region.addEventListener("click", ()=>{
    // If already active -> do nothing (let Back handle zoom out)
    if (activeRegion === region) return;
    // Reset current active region first
    if (activeRegion) { activeRegion.classList.remove("active"); }
    zoomToRegion(region);
  });
});

/* Cities: only clickable when Projects island is the active region */
const modal       = document.getElementById("modal");
const modalTitle  = document.getElementById("modal-title");
const modalBody   = document.getElementById("modal-body");
const modalClose  = document.getElementById("modal-close");

function openModal(title, content){
  modalTitle.textContent = title;
  modalBody.innerHTML = content;
  modal.classList.add("open");
}
function closeModal(){ modal.classList.remove("open"); }

document.querySelectorAll(".city").forEach(city=>{
  city.addEventListener("click", (e)=>{
    e.stopPropagation();
    if (!activeRegion || activeRegion.dataset.key !== "projects") return;
    openModal(city.dataset.title, city.dataset.content);
  });
});

modalClose.addEventListener("click", closeModal);

/* Global handlers */
backBtn.addEventListener("click", ()=>{ closeModal(); resetZoom(); });
window.addEventListener("keydown", (e)=>{ if (e.key === "Escape") { closeModal(); resetZoom(); }});
window.addEventListener("resize", ()=>{ if (activeRegion){ const b = activeRegion.getBBox(); const {scale, tx, ty} = computeZoomToBBox(b); panzoom.style.transform = `translate(${tx}px, ${ty}px) scale(${scale})`; }});
