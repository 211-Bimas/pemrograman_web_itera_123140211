# Data awal mahasiswa
mahasiswa_list = [
    {"nama": "Masbim", "nim": "231001", "nilai_uts": 78, "nilai_uas": 82, "nilai_tugas": 85},
    {"nama": "Graha", "nim": "231002", "nilai_uts": 85, "nilai_uas": 88, "nilai_tugas": 90},
    {"nama": "Figo", "nim": "231003", "nilai_uts": 60, "nilai_uas": 70, "nilai_tugas": 65},
    {"nama": "Akbar", "nim": "231004", "nilai_uts": 72, "nilai_uas": 68, "nilai_tugas": 75},
    {"nama": "Awi", "nim": "231005", "nilai_uts": 90, "nilai_uas": 94, "nilai_tugas": 88},
]

# Fungsi menghitung nilai akhir
def hitung_nilai_akhir(uts, uas, tugas):
    return uts * 0.3 + uas * 0.4 + tugas * 0.3


# Fungsi menentukan grade
def tentukan_grade(nilai):
    if nilai >= 80:
        return "A"
    elif nilai >= 70:
        return "B"
    elif nilai >= 60:
        return "C"
    elif nilai >= 50:
        return "D"
    else:
        return "E"


# Fungsi menampilkan tabel data
def tampilkan_tabel(data):
    print("\nDATA NILAI MAHASISWA")
    print("==========================================================================")
    print(f"{'Nama':<15} {'NIM':<10} {'UTS':<5} {'UAS':<5} {'Tugas':<7} {'Akhir':<7} {'Grade':<5}")
    print("--------------------------------------------------------------------------")

    for m in data:
        nilai_akhir = hitung_nilai_akhir(m["nilai_uts"], m["nilai_uas"], m["nilai_tugas"])
        grade = tentukan_grade(nilai_akhir)
        print(f"{m['nama']:<15} {m['nim']:<10} {m['nilai_uts']:<5} {m['nilai_uas']:<5} "
              f"{m['nilai_tugas']:<7} {nilai_akhir:<7.2f} {grade:<5}")

    print("==========================================================================\n")


# Fungsi mencari nilai tertinggi & terendah
def cari_tertinggi(data):
    return max(data, key=lambda m: hitung_nilai_akhir(m["nilai_uts"], m["nilai_uas"], m["nilai_tugas"]))

def cari_terendah(data):
    return min(data, key=lambda m: hitung_nilai_akhir(m["nilai_uts"], m["nilai_uas"], m["nilai_tugas"]))


# Input data mahasiswa baru
def tambah_mahasiswa():
    print("\nINPUT MAHASISWA BARU")
    nama = input("Nama: ")
    nim = input("NIM: ")
    uts = float(input("Nilai UTS: "))
    uas = float(input("Nilai UAS: "))
    tugas = float(input("Nilai Tugas: "))

    mahasiswa_list.append({
        "nama": nama,
        "nim": nim,
        "nilai_uts": uts,
        "nilai_uas": uas,
        "nilai_tugas": tugas
    })

    print("Data berhasil ditambahkan!\n")


# Filter berdasarkan grade
def filter_grade(g):
    hasil = []
    for m in mahasiswa_list:
        nilai_akhir = hitung_nilai_akhir(m["nilai_uts"], m["nilai_uas"], m["nilai_tugas"])
        if tentukan_grade(nilai_akhir) == g:
            hasil.append(m)
    return hasil

# Hitung rata-rata kelas
def rata_rata_kelas():
    total = 0
    for m in mahasiswa_list:
        total += hitung_nilai_akhir(m["nilai_uts"], m["nilai_uas"], m["nilai_tugas"])
    return total / len(mahasiswa_list)

# MENU UTAMA
def menu():
    while True:
        print("PROGRAM PENGELOLAAN DATA NILAI MAHASISWA")
        print("1. Tampilkan Data")
        print("2. Tambah Mahasiswa Baru")
        print("3. Cari Nilai Tertinggi")
        print("4. Cari Nilai Terendah")
        print("5. Filter Berdasarkan Grade")
        print("6. Hitung Rata-rata Kelas")
        print("7. Keluar")

        pilihan = input("Pilih menu: ")

        if pilihan == "1":
            tampilkan_tabel(mahasiswa_list)

        elif pilihan == "2":
            tambah_mahasiswa()

        elif pilihan == "3":
            m = cari_tertinggi(mahasiswa_list)
            print(f"\nMahasiswa Nilai Tertinggi: {m['nama']} ({m['nim']})")
            print()

        elif pilihan == "4":
            m = cari_terendah(mahasiswa_list)
            print(f"\nMahasiswa Nilai Terendah: {m['nama']} ({m['nim']})")
            print()

        elif pilihan == "5":
            g = input("Masukkan grade (A/B/C/D/E): ").upper()
            hasil = filter_grade(g)
            tampilkan_tabel(hasil)

        elif pilihan == "6":
            print(f"\nRata-rata nilai kelas: {rata_rata_kelas():.2f}\n")

        elif pilihan == "7":
            print("Program selesai.")
            break

        else:
            print("Pilihan tidak valid.\n")


# Jalankan program "pyton main.py"
menu()
