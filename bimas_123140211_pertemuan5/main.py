from abc import ABC, abstractmethod
from typing import List, Optional


# Definsi Kelas
class LibraryItem(ABC):
    """Abstract Base Class untuk semua item di perpustakaan."""
    
    def __init__(self, item_id: str, title: str):
        self.__item_id = item_id      # Private
        self._title = title           # Protected
        self._is_available = True     # Protected

    @property
    def item_id(self) -> str:
        return self.__item_id

    @property
    def title(self) -> str:
        return self._title

    @property
    def is_available(self) -> bool:
        return self._is_available

    def check_out(self) -> bool:
        if self._is_available:
            self._is_available = False
            print(f"-> Item '{self.title}' (ID: {self.item_id}) berhasil dipinjam.")
            return True
        else:
            print(f"-> Gagal: Item '{self.title}' sudah dipinjam.")
            return False

    def check_in(self) -> bool:
        if not self._is_available:
            self._is_available = True
            print(f"-> Item '{self.title}' (ID: {self.item_id}) berhasil dikembalikan.")
            return True
        else:
            print(f"-> Gagal: Item '{self.title}' sudah tersedia.")
            return False

    def get_status(self) -> str:
        return "Tersedia" if self._is_available else "Dipinjam"

    @abstractmethod
    def display_details(self) -> None:
        pass


class Book(LibraryItem):
    """Subclass untuk item Buku."""
    
    def __init__(self, item_id: str, title: str, author: str):
        super().__init__(item_id, title)
        self._author = author

    def display_details(self) -> None:
        print("--- Detail Buku ---")
        print(f"  ID     : {self.item_id}")
        print(f"  Judul  : {self.title}")
        print(f"  Penulis: {self._author}")
        print(f"  Status : {self.get_status()}")


class Magazine(LibraryItem):
    """Subclass untuk item Majalah."""
    
    def __init__(self, item_id: str, title: str, issue_number: str):
        super().__init__(item_id, title)
        self._issue_number = issue_number

    def display_details(self) -> None:
        print("--- Detail Majalah ---")
        print(f"  ID     : {self.item_id}")
        print(f"  Judul  : {self.title}")
        print(f"  Edisi  : {self._issue_number}")
        print(f"  Status : {self.get_status()}")


class Library:
    """Class untuk mengelola item di perpustakaan."""
    
    def __init__(self, name: str):
        self._name = name                # Protected, tapi disediakan property
        self.__items: List[LibraryItem] = []  # Private list

    @property
    def name(self) -> str:
        """Mengambil nama perpustakaan secara aman."""
        return self._name

    def __id_exists(self, item_id: str) -> bool:
        """Cek apakah ID sudah digunakan (private helper)."""
        item_id = item_id.lower()
        for item in self.__items:
            if item.item_id.lower() == item_id:
                return True
        return False

    def add_item(self, item: LibraryItem) -> None:
        """Menambahkan item baru dengan pengecekan ID duplikat."""
        if self.__id_exists(item.item_id):
            print(f"[ERROR] ID '{item.item_id}' sudah digunakan. Item tidak ditambahkan.")
            return
        
        self.__items.append(item)
        print(f"\n[Info] Item '{item.title}' berhasil ditambahkan ke {self._name}.")

    def display_available_items(self) -> None:
        print(f"\n📚 Daftar Item Tersedia di {self._name}:")
        print("=" * 40)
        available_count = 0
        
        for item in self.__items:
            if item.is_available:
                item.display_details()      # Polymorphism
                print("-" * 20)
                available_count += 1
        
        if available_count == 0:
            print("Tidak ada item yang tersedia saat ini.")

    def search_item(self, search_query: str) -> Optional[LibraryItem]:
        """Mencari item berdasarkan ID atau Judul (case-insensitive)."""
        search_query_lower = search_query.lower()
        
        for item in self.__items:
            if item.item_id.lower() == search_query_lower or \
               search_query_lower in item.title.lower():
                return item
        
        return None


# Menu & Helper
def menu_tambah_item(library: Library):
    print("\n--- Tambah Item Baru ---")
    print("1. Buku")
    print("2. Majalah")
    
    tipe_item = input("Pilih tipe item (1/2): ")
    
    item_id = input("Masukkan ID Item: ").strip()
    if not item_id:
        print("Error: ID Item tidak boleh kosong.")
        return
        
    title = input("Masukkan Judul: ").strip()
    if not title:
        print("Error: Judul tidak boleh kosong.")
        return

    if tipe_item == '1':
        author = input("Masukkan Nama Penulis: ").strip()
        new_item = Book(item_id, title, author)
        library.add_item(new_item)
        
    elif tipe_item == '2':
        issue = input("Masukkan Nomor Edisi: ").strip()
        new_item = Magazine(item_id, title, issue)
        library.add_item(new_item)
        
    else:
        print("Pilihan tidak valid.")


def menu_cari_item(library: Library):
    print("\n--- Cari Item ---")
    query = input("Masukkan ID atau Judul: ").strip()
    
    item_found = library.search_item(query)
    
    if item_found:
        print("-> Item ditemukan:")
        item_found.display_details()
    else:
        print(f"-> Item dengan query '{query}' tidak ditemukan.")


def menu_pinjam_item(library: Library):
    print("\n--- Pinjam Item ---")
    query = input("Masukkan ID atau Judul item: ").strip()
    
    item_found = library.search_item(query)
    
    if item_found:
        item_found.check_out()
    else:
        print(f"-> Item dengan query '{query}' tidak ditemukan.")


def menu_kembalikan_item(library: Library):
    print("\n--- Kembalikan Item ---")
    query = input("Masukkan ID atau Judul item: ").strip()
    
    item_found = library.search_item(query)
    
    if item_found:
        item_found.check_in()
    else:
        print(f"-> Item dengan query '{query}' tidak ditemukan.")


def tampilkan_menu(nama_perpustakaan: str):
    print(f"\n=====================================")
    print(f"  Sistem Manajemen Perpustakaan")
    print(f"  {nama_perpustakaan}")
    print("=====================================")
    print("1. Tambah Item Baru")
    print("2. Tampilkan Semua Item Tersedia")
    print("3. Cari Item")
    print("4. Pinjam Item")
    print("5. Kembalikan Item")
    print("0. Keluar")
    print("-------------------------------------")


#Main Program
def main():
    my_library = Library("Perpustakaan Digital Interaktif")
    
    # Tambahan default
    my_library.add_item(Book("B001", "Dasar Python", "Guido"))
    my_library.add_item(Magazine("M001", "NatGeo", "Oktober 2025"))
    
    while True:
        tampilkan_menu(my_library.name)
        pilihan = input("Masukkan pilihan Anda (0-5): ").strip()
        
        if pilihan == '1':
            menu_tambah_item(my_library)
        elif pilihan == '2':
            my_library.display_available_items()
        elif pilihan == '3':
            menu_cari_item(my_library)
        elif pilihan == '4':
            menu_pinjam_item(my_library)
        elif pilihan == '5':
            menu_kembalikan_item(my_library)
        elif pilihan == '0':
            print("\nTerima kasih telah menggunakan sistem. Sampai jumpa!")
            break  
        else:
            print("\nPilihan tidak valid.")

        input("\n... Tekan Enter untuk melanjutkan ...")


if __name__ == "__main__":
    main()