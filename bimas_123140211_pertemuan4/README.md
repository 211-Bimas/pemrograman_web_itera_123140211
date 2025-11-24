# Program Pengelolaan Data Nilai Mahasiswa

Program ini dibuat untuk mengelola data nilai mahasiswa menggunakan Python. Fitur mencakup perhitungan nilai akhir, penentuan grade, pencarian nilai tertinggi/terendah, filtering berdasarkan grade, serta penambahan data mahasiswa baru.

---

## Fitur Utama

### 1. **Data Mahasiswa**

Program menggunakan *list of dictionary* yang menyimpan:

* `nama`
* `nim`
* `nilai_uts`
* `nilai_uas`
* `nilai_tugas`

Minimal terdapat **5 data mahasiswa**.

---

### 2. **Fungsi-fungsi Utama**

Program menyediakan beberapa fungsi:

#### Menghitung Nilai Akhir

Formula:

> **30% UTS + 40% UAS + 30% Tugas**

#### Menentukan Grade

Kriteria:

| Nilai | Grade |
| ----- | ----- |
| ≥ 80  | A     |
| ≥ 70  | B     |
| ≥ 60  | C     |
| ≥ 50  | D     |
| < 50  | E     |

#### Menampilkan Data dalam Format Tabel

Data mahasiswa ditampilkan rapi dalam bentuk tabel menggunakan format string.

#### Mencari Nilai Tertinggi & Terendah

Program menampilkan mahasiswa dengan nilai akhir paling tinggi dan paling rendah.

---

### 3. **Fitur Tambahan**

* Tambah data mahasiswa baru
* Filter mahasiswa berdasarkan grade tertentu
* Hitung rata-rata nilai akhir seluruh mahasiswa

---

## Struktur File

```
../
│── main.py          # berisi seluruh kode program
│── README.md        # dokumentasi
```

---

## ▶️ Cara Menjalankan Program

### **1. Pastikan Python sudah terinstal**

Cek dengan:

```bash
python --version
```

### **2. Jalankan program**

Masuk ke folder tempat file **main.py**, lalu jalankan:

```bash
python main.py
```

### **3. Ikuti menu interaktif**

Program menyediakan menu seperti:

* Lihat semua data mahasiswa
* Tambah data baru
* Cari nilai tertinggi/terendah
* Filter berdasarkan grade
* Hitung rata-rata kelas
* Keluar

---

## Teknologi yang Digunakan

* Python 3.x
* Struktur data `list` dan `dict`
* Perhitungan numerik dasar
* Input/output teks

---