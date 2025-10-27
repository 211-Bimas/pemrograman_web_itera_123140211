# Tugas Praktikum Pemrograman Web – Aplikasi Dashboard Mahasiswa

Repository ini berisi proyek **Aplikasi Dashboard Mahasiswa**, yang dikembangkan sebagai bagian dari tugas praktikum mata kuliah **Pemrograman Aplikasi Web**.

- **Nama:** Muhammad Bimastiar  
- **NIM:** 123140211  
- **Program Studi:** Teknik Informatika  

---

## Deskripsi Aplikasi

Aplikasi **Dashboard Mahasiswa** ini dirancang untuk membantu mahasiswa mengelola jadwal kuliah dan kegiatan sehari-hari dengan efisien.  
Aplikasi berjalan sepenuhnya di sisi klien (*client-side*) menggunakan **HTML, CSS, dan JavaScript murni (Vanilla JS)**, serta menyimpan data secara lokal melalui **`localStorage`**.

Artinya, data tugas dan kegiatan akan tetap tersimpan meskipun browser ditutup atau halaman direfresh.

---

## Fitur Utama

- **CRUD Kegiatan:** Tambah, edit, hapus kegiatan mahasiswa.  
- **Filter & Pencarian:** Cari kegiatan berdasarkan nama, lokasi, deskripsi, atau filter jenis kegiatan.  
- **Ringkasan Tugas:** Menampilkan total kegiatan, jumlah selesai, dan jadwal hari ini secara real-time.  
- **Prioritas & Jadwal Terdekat:** Menampilkan tiga tugas prioritas dan jadwal kegiatan terdekat.  
- **Tampilan Jadwal Kuliah:** Tabel jadwal kuliah lengkap per hari.  
- **Tanggal & Jam Real-Time:** Menampilkan tanggal, hari, dan jam lokal berjalan.  
- **Sinkronisasi Waktu (Async/Await):** Contoh fetch API untuk mengambil waktu server.  
- **Penyimpanan Lokal:** Semua data kegiatan tersimpan di `localStorage`.  
- **Responsif & Interaktif:** Desain berbasis *card* dan sidebar navigasi interaktif.  

---

## Tampilan Aplikasi

**1. Beranda / Dashboard**

> Ringkasan kegiatan dan tugas prioritas.

![Beranda](screenshot-beranda.png)

**2. Jadwal Kuliah**

> Tabel jadwal kuliah per hari.

![Jadwal Kuliah](screenshot-kuliah.png)

**3. Jadwal Kegiatan**

> CRUD kegiatan dengan fitur filter dan pencarian.

![Kegiatan](screenshot-kegiatan.png)

---

## Penjelasan Teknis

### Penyimpanan Data – `localStorage`

Semua kegiatan disimpan di `localStorage` dalam bentuk JSON:

```javascript
localStorage.setItem("kegiatan_v2_blue", JSON.stringify(kegiatan));
let kegiatan = JSON.parse(localStorage.getItem("kegiatan_v2_blue")) || [];
```

### Struktur File

```
📁 Aplikasi-Dashboard-Mahasiswa
├── index.html
├── style.css
├── script.js
└── README.md
```

### Bahasa & Teknologi

- HTML5
- CSS3  
- JavaScript (ES6+):
    - Arrow functions
    - Template literals
    - Class (class Kegiatan)
    - Async/await (fetch API)
    - let & const

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
