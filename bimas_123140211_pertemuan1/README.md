# Tugas Praktikum Pemrograman Web – Aplikasi Manajemen Tugas Mahasiswa

Repository ini berisi proyek **Aplikasi Manajemen Tugas Mahasiswa**, yang dikembangkan sebagai bagian dari tugas praktikum mata kuliah **Pemrograman Aplikasi Web**.

- **Nama:** Muhammad Bimastiar  
- **NIM:** 123140211
- **Program Studi:** Teknik Informatika  

---

## Deskripsi Aplikasi

Aplikasi **Manajemen Tugas Mahasiswa** ini dirancang untuk membantu mahasiswa mengatur dan memantau tugas-tugas perkuliahan secara efisien.  
Aplikasi berjalan sepenuhnya di sisi klien (*client-side*) menggunakan **HTML, CSS, dan JavaScript murni (Vanilla JS)**, serta menyimpan data secara lokal melalui **`localStorage`**.  

Artinya, meskipun halaman direfresh atau browser ditutup, semua data tugas akan tetap tersimpan dan bisa diakses kembali.

---

## Fitur Utama

- **Tambah Tugas Baru:** Input nama tugas, mata kuliah, dan deadline.  
- **Tandai Selesai / Belum:** Menandai status tugas dengan label di pojok kanan atas.  
- **Edit Tugas:** Mengubah nama tugas, mata kuliah, atau tanggal deadline.  
- **Hapus Tugas:** Menghapus tugas dari daftar secara permanen.  
- **Cari Tugas:** Mencari tugas berdasarkan nama atau mata kuliah.  
- **Filter Status:** Menampilkan hanya tugas *Selesai*, *Belum Selesai*, atau *Semua*.  
- **Statistik Otomatis:** Menampilkan jumlah total dan tugas yang belum selesai secara *real-time*.  
- **Penyimpanan Lokal:** Data disimpan di `localStorage`, tanpa database eksternal.  
- **Format Deadline Lokal:** Menampilkan tanggal dalam format Indonesia (contoh: *Rabu, 1 Oktober 2025*).  
- **Tampilan Rapi dan Responsif:** Dengan desain berbasis *card* agar mudah dibaca.

---

## Tampilan Web

**1. Tampilan Utama Daftar Tugas**

> Menampilkan semua tugas lengkap dengan status dan tombol aksi.  
> Label “Selesai / Belum Selesai” muncul di pojok kanan atas tiap kartu.

<img width="700" height="820" alt="Image" src="https://github.com/user-attachments/assets/b7297543-5719-4005-8ae7-5ef1c7a0c4bf" />

**2. Form Tambah / Edit Tugas**

> Pengguna dapat menambahkan tugas baru atau memperbarui data tugas yang sudah ada.

<img width="880" height="596" alt="Image" src="https://github.com/user-attachments/assets/cb2c38ae-18ab-4df3-b129-fcd47388b758" />

**3. Pencarian dan Filter **

> Fitur pencarian dan filter membantu menemukan tugas tertentu dengan cepat.

<img width="880" height="500" alt="Image" src="https://github.com/user-attachments/assets/bc7ec672-28ef-4b0b-a64b-855ad811c7bc" />
<img width="880" height="500" alt="Image" src="https://github.com/user-attachments/assets/cca1dc7b-eb87-45fb-8538-bc875ee211dc" />

---

## Penjelasan Teknis

### Penyimpanan Data – `localStorage`

Aplikasi menyimpan semua data tugas di `localStorage` dalam bentuk string JSON.

```javascript
localStorage.setItem("tugas", JSON.stringify(daftarTugas));
let daftarTugas = JSON.parse(localStorage.getItem("tugas")) || [];
```

### Struktur File

```
📁 Aplikasi-Manajemen-Tugas
├── index.html
├── style.css
├── script.js
└── README.md
```

### Bahasa & Teknologi

- HTML5  
- CSS3  
- JavaScript (Vanilla JS)

---

## Cara Menjalankan

1. Unduh atau clone repository ini.  
2. Buka file `index.html` menggunakan browser favorit Anda.  
3. Aplikasi siap digunakan tanpa perlu server tambahan.

```bash
git clone https://github.com/username/aplikasi-manajemen-tugas.git
cd aplikasi-manajemen-tugas
```

---

## Lisensi

Proyek ini dibuat untuk tujuan pembelajaran.  
Anda bebas memodifikasi dan menggunakan kode ini untuk kebutuhan pribadi maupun akademik.
