# Tugas Praktikum Pemrograman Web – Manajemen Buku Pribadi

Repository ini berisi proyek **Manajemen Buku Pribadi**, yang dikembangkan sebagai bagian dari tugas praktikum mata kuliah **Pemrograman Aplikasi Web**.

- **Nama:** Muhammad Bimastiar  
- **NIM:** 123140211  
- **Program Studi:** Teknik Informatika  

---

## Deskripsi Umum
Aplikasi ini digunakan untuk mengelola data buku pribadi, termasuk buku sudah di baca, dan ingin dibeli. Pengguna dapat menambah, mengedit, menghapus, mencari, serta memfilter buku berdasarkan status. Seluruh data disimpan pada Local Storage sehingga tetap tersimpan meskipun aplikasi ditutup.

---

## Fitur Utama

### Menambah Buku
Pengguna dapat menambahkan buku baru dengan mengisi:
- Judul buku  
- Penulis  
- Status buku (Sudah Dibaca, Ingin Dibeli)

### Mengedit Buku
Buku yang sudah ada dapat diperbarui melalui modal edit.

### Menghapus Buku
Menghapus buku dari daftar secara permanen.

### Pencarian Buku
Pencarian dilakukan secara real-time berdasarkan judul atau penulis.

### Filter Buku
Filter berdasarkan:
- Semua
- Sudah Dibaca
- Ingin Dibeli

### Statistik Buku
Aplikasi menyediakan halaman statistik berisi:
- Total seluruh buku  
- Total buku yang sudah  dibaca  
- Total buku yang ingin dibeli

---

## Struktur Folder

Struktur folder direkomendasikan sebagai berikut:

```

vite-project/
│
├── public/
│   └── vite.svg
│
├── src/
│   ├── components/
|   |   ├── pages/
│   │   └── Home.jsx
│   │       Stats.jsx
|   |
│   ├── AppNavigato.jsx
|   ├── BookContext.jsx 
│   ├── BookFilter.jsx 
│   ├── BookForm.jsx
│   ├── BookItem.jsx
│   ├── BookList.jsx
|   ├── Modal.jsx
│   ├── SearchBar.jsx
│   │
│   ├── App.jsx
|   ├── CustomHooks.js
│   ├── index.css
│   ├── main.jsx
│   └── Utils.js
│
├── index.html
├── package.json
├── package-lock.json
├── vite.config.js
└── README.md

```

---

## Tampilan Aplikasi

### Halaman Beranda

<img width="1919" height="929" alt="image" src="https://github.com/user-attachments/assets/bd6479f7-d7e7-4589-9808-dce9150b6325" />

---

### Halaman Statistik

<img width="1919" height="931" alt="image" src="https://github.com/user-attachments/assets/af9f85fe-f254-4cc2-977d-07c58c1c488c" />

---

## Cara Menjalankan Aplikasi

### Instalasi Dependency

Jalankan perintah berikut:

```sh
npm install
```

### Menjalankan Development Server

```sh
npm run dev
```

### Membuka Aplikasi

Setelah server berjalan, buka URL yang diberikan Vite, biasanya:

```
http://localhost:5173/
```

---

## Teknologi yang Digunakan

* HTML
* CSS (Custom Variables)
* JavaScript ES6
* Vite
* Local Storage

---
