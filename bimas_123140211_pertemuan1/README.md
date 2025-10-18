# 🎓 Aplikasi Manajemen Tugas Mahasiswa

Aplikasi sederhana untuk membantu mahasiswa mengelola tugas akademik mereka.  
Dibuat menggunakan **HTML, CSS, dan JavaScript murni** dengan penyimpanan **localStorage**.

---

## ✨ Fitur Utama

- Menambahkan tugas baru (nama, mata kuliah, dan deadline)
- Menandai tugas sebagai **selesai / belum selesai**
- Menghapus tugas
- Filter tugas berdasarkan status
- Pencarian tugas berdasarkan nama atau mata kuliah
- Menampilkan jumlah tugas dan statistik
- Penyimpanan data secara **lokal (localStorage)**, jadi data tetap ada meskipun halaman direfresh

---

## 🧠 Cara Menjalankan

1. Unduh semua file (`index.html`, `style.css`, `script.js`, `README.md`).
2. Buka file `index.html` di browser.
3. Tambahkan tugas baru dan kelola tugas sesuai kebutuhan.

---

## 🧩 Penjelasan Teknis

- **Penyimpanan Data:**  
  Semua tugas disimpan di browser menggunakan `localStorage` dengan format JSON.
  ```js
  localStorage.setItem("tugas", JSON.stringify(arrayTugas));
  ```
