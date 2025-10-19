//  Inisialisasi 
let daftarTugas = JSON.parse(localStorage.getItem("tugas")) || [];

//  Simpan ke localStorage 
function simpanData() {
  localStorage.setItem("tugas", JSON.stringify(daftarTugas));
}

//  Format tanggal jadi "Hari, Tanggal Bulan Tahun" 
function formatTanggalIndonesia(tanggalStr) {
  const tanggalObj = new Date(tanggalStr);
  const hariList = [
    "Minggu",
    "Senin",
    "Selasa",
    "Rabu",
    "Kamis",
    "Jumat",
    "Sabtu",
  ];
  const bulanList = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember",
  ];

  const hari = hariList[tanggalObj.getDay()];
  const tanggal = tanggalObj.getDate();
  const bulan = bulanList[tanggalObj.getMonth()];
  const tahun = tanggalObj.getFullYear();

  return `${hari}, ${tanggal} ${bulan} ${tahun}`;
}

//  Tampilkan Daftar Tugas 
function tampilkanTugas() {
  const daftarEl = document.getElementById("daftarTugas");
  const filterStatus = document.getElementById("filterStatus").value;
  const cari = document.getElementById("cari").value.toLowerCase();

  daftarEl.innerHTML = "";

  const tugasTampil = daftarTugas.filter((tugas) => {
    const cocokCari =
      tugas.nama.toLowerCase().includes(cari) ||
      tugas.matkul.toLowerCase().includes(cari);
    const cocokStatus =
      filterStatus === "semua" ||
      (filterStatus === "selesai" && tugas.selesai) ||
      (filterStatus === "belum" && !tugas.selesai);
    return cocokCari && cocokStatus;
  });

  if (tugasTampil.length === 0) {
    daftarEl.innerHTML = "<p>Tidak ada tugas ditemukan.</p>";
    return;
  }

  tugasTampil.forEach((tugas) => {
    const li = document.createElement("li");
    const idxAsli = daftarTugas.indexOf(tugas);
    const tanggalFormatted = formatTanggalIndonesia(tugas.deadline);

    li.className = tugas.selesai ? "selesai" : "";

    li.innerHTML = `
      <span class="status-tugas ${tugas.selesai ? "status-selesai" : "status-belum"}">
        ${tugas.selesai ? "Selesai" : "Belum Selesai"}
      </span>

      <div>
        <p class="nama-tugas ${tugas.selesai ? "selesai" : ""}">
          <strong>${tugas.nama}</strong>
        </p>
        <p>${tugas.matkul}</p>
        <p>${tanggalFormatted}</p>
      </div>

      <div>
        <button class="selesai-btn" onclick="toggleSelesai(${idxAsli})">
          ${tugas.selesai ? "Belum" : "Selesai"}
        </button>
        <button class="edit-btn" style="background-color:#f7b731;color:white" onclick="editTugas(${idxAsli})">
          Edit
        </button>
        <button class="hapus-btn" onclick="hapusTugas(${idxAsli})">
          Hapus
        </button>
      </div>
    `;

    daftarEl.appendChild(li);
  });

  updateStatistik();
}

//  Statistik 
function updateStatistik() {
  const belum = daftarTugas.filter((t) => !t.selesai).length;
  const total = daftarTugas.length;
  const statistikEl = document.getElementById("statistik");
  statistikEl.textContent =
    total === 0
      ? "Belum ada tugas"
      : `Total: ${total} | Belum Selesai: ${belum}`;
}

//  Tambah Tugas 
document.getElementById("formTugas").addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("namaTugas").value.trim();
  const matkul = document.getElementById("mataKuliah").value.trim();
  const deadline = document.getElementById("deadline").value;

  if (!nama || !matkul || !deadline) {
    alert("Semua kolom wajib diisi!");
    return;
  }

  daftarTugas.push({ nama, matkul, deadline, selesai: false });
  simpanData();
  tampilkanTugas();
  this.reset();
});

//  Edit Tugas 
function editTugas(index) {
  const tugas = daftarTugas[index];
  const namaBaru = prompt("Ubah nama tugas:", tugas.nama);
  const matkulBaru = prompt("Ubah mata kuliah:", tugas.matkul);
  const deadlineBaru = prompt("Ubah deadline (YYYY-MM-DD):", tugas.deadline);

  if (namaBaru && matkulBaru && deadlineBaru) {
    daftarTugas[index] = {
      ...tugas,
      nama: namaBaru.trim(),
      matkul: matkulBaru.trim(),
      deadline: deadlineBaru.trim(),
    };
    simpanData();
    tampilkanTugas();
  }
}

//  Toggle Selesai 
function toggleSelesai(index) {
  daftarTugas[index].selesai = !daftarTugas[index].selesai;
  simpanData();
  tampilkanTugas();
}

//  Hapus Tugas 
function hapusTugas(index) {
  if (confirm("Yakin ingin menghapus tugas ini?")) {
    daftarTugas.splice(index, 1);
    simpanData();
    tampilkanTugas();
  }
}

//  Filter & Cari 
document.getElementById("filterStatus").addEventListener("change", tampilkanTugas);
document.getElementById("cari").addEventListener("input", tampilkanTugas);

//  Awal 
tampilkanTugas();
