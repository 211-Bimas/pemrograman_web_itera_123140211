# Tugas Praktikum Pemrograman Web - Aplikasi Manajemen Tugas

Repository ini berisi proyek aplikasi manajemen tugas mahasiswa sebagai bagian dari tugas praktikum mata kuliah **Pemrograman Aplikasi Web**.

**Nama:** Muhammad Bimastiar  
**NIM:** 123140211  
**Program Studi:** Teknik Informatika

---

## 📝 Deskripsi Aplikasi
Aplikasi Manajemen Tugas Mahasiswa adalah sebuah web application sederhana yang dirancang untuk membantu mahasiswa melacak dan mengelola tugas-tugas akademik.  
Aplikasi ini sepenuhnya berjalan di sisi klien (client-side) dan menggunakan **localStorage browser** untuk menyimpan data, sehingga semua tugas tetap tersimpan meskipun halaman di-refresh atau browser ditutup.

---

## ✨ Fitur Utama
- **CRUD Penuh**: Tambah, baca, ubah, dan hapus tugas.
- **Penyimpanan Lokal**: Data tugas disimpan secara persisten di localStorage.
- **Validasi Form**: Input kosong tidak diizinkan.
- **Filter & Pencarian**: Filter berdasarkan status (selesai/belum) dan pencarian berdasarkan nama atau mata kuliah.
- **Statistik Tugas**: Menampilkan jumlah tugas belum selesai.
- **Desain Responsif**: Tampilan tetap nyaman di perangkat mobile.

---

## 📸 Tampilan Aplikasi
1. Tampilan Utama dengan Daftar Tugas  
   ![image](image1.png)
2. Tampilan Form dalam Mode Edit Tugas  
   ![image](image2.png)
3. Tampilan Fitur Filter dan Pencarian Aktif  
   ![image](image3.png)

---

## 🛠️ Penjelasan Teknis

### Penggunaan localStorage
localStorage digunakan untuk menyimpan data tugas agar tetap tersedia meskipun halaman di-refresh.

```javascript
const saveTasks = () => {
  localStorage.setItem('tasks', JSON.stringify(tasks));
};

let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
