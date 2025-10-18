// ===== Inisialisasi =====
let daftarTugas = JSON.parse(localStorage.getItem("tugas")) || [];

// ===== Fungsi Menyimpan ke localStorage =====
function simpanData() {
  localStorage.setItem("tugas", JSON.stringify(daftarTugas));
}

// ===== Fungsi Menampilkan Tugas =====
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

  tugasTampil.forEach((tugas, index) => {
    const li = document.createElement("li");
    li.className = tugas.selesai ? "selesai" : "";

    li.innerHTML = `
      <span><strong>${tugas.nama}</strong> - ${tugas.matkul} (📅 ${
      tugas.deadline
    })</span>
      <div>
        <button class="selesai-btn" onclick="toggleSelesai(${index})">${
      tugas.selesai ? "Belum" : "Selesai"
    }</button>
        <button class="hapus-btn" onclick="hapusTugas(${index})">Hapus</button>
      </div>
    `;
    daftarEl.appendChild(li);
  });

  updateStatistik();
}

// ===== Fungsi Statistik =====
function updateStatistik() {
  const belum = daftarTugas.filter((t) => !t.selesai).length;
  const total = daftarTugas.length;
  const statistikEl = document.getElementById("statistik");
  statistikEl.textContent =
    total === 0
      ? "Belum ada tugas"
      : `Total: ${total} | Belum Selesai: ${belum}`;
}

// ===== Tambah Tugas Baru =====
document.getElementById("formTugas").addEventListener("submit", function (e) {
  e.preventDefault();

  const nama = document.getElementById("namaTugas").value.trim();
  const matkul = document.getElementById("mataKuliah").value.trim();
  const deadline = document.getElementById("deadline").value;

  if (!nama || !matkul || !deadline) {
    alert("Semua kolom wajib diisi!");
    return;
  }

  const tugasBaru = {
    nama,
    matkul,
    deadline,
    selesai: false,
  };

  daftarTugas.push(tugasBaru);
  simpanData();
  tampilkanTugas();

  this.reset();
});

// ===== Ubah Status Selesai =====
function toggleSelesai(index) {
  daftarTugas[index].selesai = !daftarTugas[index].selesai;
  simpanData();
  tampilkanTugas();
}

// ===== Hapus Tugas =====
function hapusTugas(index) {
  if (confirm("Yakin ingin menghapus tugas ini?")) {
    daftarTugas.splice(index, 1);
    simpanData();
    tampilkanTugas();
  }
}

// ===== Filter dan Cari =====
document
  .getElementById("filterStatus")
  .addEventListener("change", tampilkanTugas);
document.getElementById("cari").addEventListener("input", tampilkanTugas);

// ===== Tampilkan Data Saat Awal =====
tampilkanTugas();
