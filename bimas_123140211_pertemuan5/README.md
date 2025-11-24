# Tugas Praktikum Pemrograman Web – Sistem Manajemen Perpustakaan Sederhana

Repository ini berisi proyek **Program Pengelolaan Data Nilai Mahasiswa**, yang dikembangkan sebagai bagian dari tugas praktikum mata kuliah **Pemrograman Aplikasi Web**.

- **Nama:** Muhammad Bimastiar  
- **NIM:** 123140211  
- **Program Studi:** Teknik Informatika

---

## Deskripsi Umum

Program ini merupakan implementasi sederhana dari **Sistem Manajemen Perpustakaan** menggunakan konsep **Object-Oriented Programming (OOP)** di Python. Aplikasi berjalan berbasis teks dan memungkinkan pengguna mengelola item perpustakaan seperti buku dan majalah.

---

## Tujuan Program

Program ini dibuat untuk mendemonstrasikan beberapa konsep inti OOP:

* **Abstract Class**
* **Inheritance (pewarisan)**
* **Polymorphism (method overriding)**
* **Encapsulation (private & protected attribute)**
* **Property Decorator**
* Validasi **ID tidak boleh duplikat**

---

## Fitur Program

Sistem ini memiliki fungsi:

* Menambahkan item baru (Buku / Majalah)
* Menampilkan daftar item yang tersedia
* Mencari item berdasarkan **ID atau judul**
* Meminjam item
* Mengembalikan item
* Mencegah penambahan item dengan **ID yang sama**

---

## Struktur Class

### 1. LibraryItem (Abstract Class)

* Dasar untuk semua jenis item perpustakaan
* Memiliki atribut:

  * `__item_id` (private)
  * `_title` (protected)
  * `_is_available` (protected)
* Mempunyai method abstract `display_details()`

---

### 2. Book (Subclass)

Menambahkan atribut `author` dan mengoverride `display_details()`.

---

### 3. Magazine (Subclass)

Menambahkan atribut `issue_number` dan mengoverride `display_details()`.

---

### 4. Library

Bertanggung jawab untuk:

* Menyimpan koleksi item (`__items`)
* Mencegah **ID duplikat**
* Menampilkan item tersedia
* Melakukan pencarian item

---

## Fitur yang Ditampilkan Program

### Menambah item

### Menolak ID duplikat

### Menampilkan daftar item

### Pencarian berdasarkan ID atau judul

### Polymorphism pada `display_details()`

### Peminjaman dan pengembalian item

---

## Cara Menjalankan Program

1. Pastikan Python sudah ter-install.
2. Simpan file sebagai `main.py` atau nama lain.
3. Jalankan dengan:

```
python main.py
```

4. Program akan menampilkan menu seperti:

```
1. Tambah Item Baru
2. Tampilkan Semua Item Tersedia
3. Cari Item
4. Pinjam Item
5. Kembalikan Item
0. Keluar
```

---

## Hasil Program

> * Menambahkan item
> * Penolakan ID duplikat
> * Hasil pencarian
> * Tampilan daftar item
> * Proses peminjaman dan pengembalian

*(Bagian screenshot diisi sendiri ketika kamu running program.)*

---

## Diagram Class (Opsional — Nilai Tambah)

```
          LibraryItem (abstract)
          |  item_id
          |  title
          |  is_available
          |  check_out()
          |  check_in()
          |  display_details()  ← abstract
                   |
        -------------------------
        |                       |
      Book                 Magazine
     author               issue_number
 display_details()      display_details()


              Library
      - __items : List[LibraryItem]
      - name
      - add_item()
      - search_item()
      - display_available_items()
```

---

## Ringkasan Penerapan OOP

| Konsep OOP         | Implementasi                                          |
| ------------------ | ----------------------------------------------------- |
| **Abstract Class** | `LibraryItem` menggunakan `ABC` dan `@abstractmethod` |
| **Inheritance**    | `Book` dan `Magazine` mewarisi `LibraryItem`          |
| **Polymorphism**   | Kedua subclass mengoverride `display_details()`       |
| **Encapsulation**  | Atribut `__item_id`, `__items` bersifat private       |
| **Property**       | Getter pada `item_id`, `title`, `is_available`        |
| **Validasi**       | Method private `__id_exists()` mencegah ID duplikat   |

---
