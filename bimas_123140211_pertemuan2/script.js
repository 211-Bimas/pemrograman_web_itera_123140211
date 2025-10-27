//  KONST & ELEMEN 
const STORAGE_KEY = 'kegiatan_v2_blue';
let kegiatan = JSON.parse(localStorage.getItem(STORAGE_KEY)) || [];

const menuItems = document.querySelectorAll('.menu-item');
const pages = document.querySelectorAll('.page');

const form = document.getElementById('formKegiatan');
const inputNama = document.getElementById('nama');
const inputTanggal = document.getElementById('tanggal');
const inputWaktu = document.getElementById('waktu');
const inputJenis = document.getElementById('jenis');
const inputLokasi = document.getElementById('lokasi');
const inputDeskripsi = document.getElementById('deskripsi');
const submitBtn = document.getElementById('submitBtn');
const cancelEditBtn = document.getElementById('cancelEditBtn');

const listContainer = document.getElementById('listKegiatan');
const searchInput = document.getElementById('search');
const filterJenis = document.getElementById('filterJenis');
const clearFiltersBtn = document.getElementById('clearFilters');

const totalCountEl = document.getElementById('totalCount');
const doneCountEl = document.getElementById('doneCount');
const todayCountEl = document.getElementById('todayCount');
const priorityListEl = document.getElementById('priorityList');
const upcomingListEl = document.getElementById('upcomingList');

const dayEl = document.getElementById('day');
const monthEl = document.getElementById('month');
const fullDateEl = document.getElementById('fullDate');
const clockEl = document.getElementById('clock');
const syncTimeEl = document.getElementById('syncTime');

let editIndex = null;

//  CLASS 
class Kegiatan {
  constructor(nama, tanggal, waktu, jenis, lokasi, deskripsi, selesai = false) {
    this.nama = nama;
    this.tanggal = tanggal;
    this.waktu = waktu;
    this.jenis = jenis;
    this.lokasi = lokasi;
    this.deskripsi = deskripsi;
    this.selesai = selesai;
  }
}

//  HELPERS 
const save = () => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(kegiatan));
  renderSummary();
};
const formatDate = d => d ? new Date(d).toLocaleDateString('id-ID', { day:'numeric', month:'short', year:'numeric' }) : '-';
const escapeHtml = str => str ? String(str).replaceAll('&','&amp;').replaceAll('<','&lt;').replaceAll('>','&gt;').replaceAll('"','&quot;').replaceAll("'","&#039;") : '';

//  NAVIGASI SIDEBAR 
menuItems.forEach(mi => {
  mi.addEventListener('click', () => {
    menuItems.forEach(m => m.classList.remove('active'));
    mi.classList.add('active');
    pages.forEach(p => p.classList.remove('active-page'));
    document.getElementById(mi.dataset.page).classList.add('active-page');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});

//  RENDER LIST 
const renderList = () => {
  const q = (searchInput?.value || '').toLowerCase();
  const jenisFilter = filterJenis?.value;
  listContainer.innerHTML = '';

  const filtered = kegiatan.filter(k => {
    const matchesQ = k.nama.toLowerCase().includes(q) || k.lokasi.toLowerCase().includes(q) || (k.deskripsi||'').toLowerCase().includes(q);
    const matchesJenis = jenisFilter ? k.jenis === jenisFilter : true;
    return matchesQ && matchesJenis;
  });

  if (!filtered.length) {
    listContainer.innerHTML = `<div class="card">Belum ada kegiatan.</div>`;
    return;
  }

  filtered.forEach(k => {
    const idx = kegiatan.indexOf(k);
    const card = document.createElement('div');
    card.className = `keg-card ${k.selesai ? 'keg-done' : ''}`;
    card.innerHTML = `
      <div class="keg-left">
        <div class="keg-title">${escapeHtml(k.nama)}</div>
        <div class="keg-meta">${escapeHtml(k.jenis)} • ${formatDate(k.tanggal)} ${k.waktu} • 📍 ${escapeHtml(k.lokasi)}</div>
        <div class="keg-desc">${escapeHtml(k.deskripsi||'')}</div>
      </div>
      <div class="keg-actions">
        <button class="done">${k.selesai ? '↩' : '✓'}</button>
        <button class="edit">✏️</button>
        <button class="del">🗑️</button>
      </div>
    `;
    card.querySelector('.done').addEventListener('click', () => { kegiatan[idx].selesai = !kegiatan[idx].selesai; save(); renderList(); });
    card.querySelector('.edit').addEventListener('click', () => enterEditMode(kegiatan[idx], idx));
    card.querySelector('.del').addEventListener('click', () => { if(confirm('Hapus kegiatan ini?')){ kegiatan.splice(idx,1); save(); renderList(); }});
    listContainer.appendChild(card);
  });
};

//  SUMMARY 
const renderSummary = () => {
  const total = kegiatan.length;
  const done = kegiatan.filter(k=>k.selesai).length;
  const today = kegiatan.filter(k=>{ if(!k.tanggal) return false; const a=new Date(k.tanggal), b=new Date(); return a.getDate()===b.getDate() && a.getMonth()===b.getMonth() && a.getFullYear()===b.getFullYear(); }).length;
  totalCountEl.textContent = total;
  doneCountEl.textContent = done;
  todayCountEl.textContent = today;

  const prio = kegiatan.filter(k=>!k.selesai).sort((a,b)=>new Date(a.tanggal)-new Date(b.tanggal)).slice(0,3);
  priorityListEl.innerHTML = prio.length ? prio.map(p=>`<div>• ${escapeHtml(p.nama)} (${formatDate(p.tanggal)})</div>`).join('') : 'Tidak ada tugas prioritas.';

  const upcoming = kegiatan.filter(k=>k.tanggal).sort((a,b)=>new Date(a.tanggal)-new Date(b.tanggal)).slice(0,3);
  upcomingListEl.innerHTML = upcoming.length ? upcoming.map(u=>`<div>• ${escapeHtml(u.nama)} (${formatDate(u.tanggal)})</div>`).join('') : 'Tidak ada jadwal terdekat.';
};

//  EDIT MODE 
function enterEditMode(item, idx){
  editIndex = idx;
  inputNama.value=item.nama;
  inputTanggal.value=item.tanggal;
  inputWaktu.value=item.waktu;
  inputJenis.value=item.jenis;
  inputLokasi.value=item.lokasi;
  inputDeskripsi.value=item.deskripsi;
  submitBtn.textContent='Simpan Perubahan';
  cancelEditBtn.style.display='inline-block';
  document.querySelector('.menu-item[data-page="kegiatan"]').click();
  window.scrollTo({top:0,behavior:'smooth'});
}
function exitEditMode(){
  editIndex=null;
  form.reset();
  submitBtn.textContent='Tambah Kegiatan';
  cancelEditBtn.style.display='none';
}

//  FORM 
form.addEventListener('submit', e=>{
  e.preventDefault();
  const item = new Kegiatan(inputNama.value.trim(),inputTanggal.value,inputWaktu.value,inputJenis.value,inputLokasi.value.trim(),inputDeskripsi.value.trim(),false);
  if(editIndex!==null){ item.selesai=kegiatan[editIndex].selesai; kegiatan[editIndex]=item; } else { kegiatan.push(item); }
  save(); renderList(); exitEditMode();
});
cancelEditBtn.addEventListener('click',()=>exitEditMode());

//  FILTER 
searchInput.addEventListener('input', renderList);
filterJenis.addEventListener('change', renderList);
clearFiltersBtn.addEventListener('click', ()=>{ searchInput.value=''; filterJenis.value=''; renderList(); });

//  JAM & TANGGAL 
const updateDateTimeLocal=()=>{
  const now=new Date();
  dayEl.textContent=now.getDate();
  monthEl.textContent=now.toLocaleString('id-ID',{month:'short'}).toUpperCase();
  fullDateEl.textContent=now.toLocaleDateString('id-ID',{weekday:'long',day:'numeric',month:'long',year:'numeric'});
  clockEl.textContent=now.toLocaleTimeString('id-ID',{hour:'2-digit',minute:'2-digit',second:'2-digit'});
};
setInterval(updateDateTimeLocal,1000);
updateDateTimeLocal();

const fetchServerTime=async()=>{
  try{
    const res=await fetch('https://worldtimeapi.org/api/timezone/Asia/Jakarta');
    if(!res.ok) throw new Error('Gagal response');
    const data=await res.json();
    syncTimeEl.textContent=`Sinkron: ${new Date(data.datetime).toLocaleTimeString('id-ID')}`;
  }catch(err){
    syncTimeEl.textContent='Sinkron: gagal ambil waktu';
    console.warn('fetchServerTime error:',err);
  }
};
fetchServerTime();

//  INIT
renderSummary();
renderList();