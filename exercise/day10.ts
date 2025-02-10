function phoneNumber(input) {
    // Check if the input is a string
    if (typeof input !== "string") {
        return "Invalid phone number.";
    }
    
    // Check if the input length is exactly 12 characters
    if (input.length !== 12) {
        return "Invalid phone number.";
    }
    
    // Check if all characters are numeric
    if (!/^[0-9]+$/.test(input)) {
        return "Invalid phone number.";
    }
    
    // Replace the leading '0' with '62'
    if (input.startsWith("0")) {
        input = "62" + input.slice(1);
    }
    
    // Format the number as (xxxx)-xxxx-xxxxx
    let formatted = `(${input.slice(0, 4)})-${input.slice(4, 8)}-${input.slice(8)}`;
    
    return formatted;
}

// Example usage
console.log(phoneNumber("085211155555")); 


// Parent class Product
class Product {
    nama:string;
    berat:number;
    price:number;
    stok:number;
    constructor(nama, berat, price, stok) {
        this.nama = nama;
        this.berat = berat;
        this.price = price;
        this.stok = stok;
    }
}

// Child class Buku
class Buku extends Product {
    penulis:string;
    halaman:string;
    constructor(nama, berat, price, stok, penulis, halaman) {
        super(nama, berat, price, stok);
        this.penulis = penulis;
        this.halaman = halaman;
    }
}

// Child class Pakaian
class Pakaian extends Product {
    ukuran:string;
    bahan:string;
    warna:string;
    constructor(nama, berat, price, stok, ukuran, bahan, warna, gender) {
        super(nama, berat, price, stok);
        this.ukuran = ukuran;
        this.bahan = bahan;
        this.warna = warna;
        this.gender = gender;
    }
}

// Class OnlineShop
class OnlineShop {
    constructor() {
        this.products = [];
        this.cart = [];
    }

    tambahProduk(produk) {
        if (this.products.some(p => p.nama === produk.nama)) {
            return "Produk sudah ada dalam toko";
        }
        this.products.push(produk);
    }

    tambahKeKeranjang(produkNama, jumlah) {
        let produk = this.products.find(p => p.nama === produkNama);
        if (!produk) return "Produk tidak ditemukan dalam katalog";
        if (jumlah > produk.stok) return `Stok tidak mencukupi, stok saat ini: ${produk.stok}`;

        let itemCart = this.cart.find(c => c.produk.nama === produkNama);
        if (itemCart) {
            itemCart.jumlah += jumlah;
        } else {
            this.cart.push({ produk, jumlah });
        }
        produk.stok -= jumlah;
    }

    transaksi(uangUser, jarak) {
        let totalHarga = this.cart.reduce((acc, item) => acc + (item.produk.price * item.jumlah), 0);
        let ongkir = jarak * 2000;
        let totalPembayaran = totalHarga + ongkir;

        if (uangUser < totalPembayaran) return "Uang tidak mencukupi untuk melakukan transaksi";

        let kembalian = uangUser - totalPembayaran;
        this.cart = [];
        return `Total pembayaran: ${totalPembayaran}, Ongkir: ${ongkir}, Kembalian: ${kembalian}`;
    }

    showCatalog() {
        return this.products.map(p => `${p.nama} - Rp${p.price} - Stok: ${p.stok}`).join("\n");
    }

    showCart() {
        return this.cart.map(c => `${c.produk.nama} - ${c.jumlah} pcs`).join("\n") || "Keranjang kosong";
    }
}

// Contoh penggunaan
let toko = new OnlineShop();
toko.tambahProduk(new Buku("javascript", 1.2, 150000, 7, "J.K. Rowling", 400));
toko.tambahProduk(new Pakaian("Kaos Polos", 0.3, 50000, 10, "L", "Katun", "Hitam", "Unisex"));

toko.tambahKeKeranjang("Javascript", 2);
toko.tambahKeKeranjang("Kaos Polos", 3);

console.log(toko.showCatalog());
console.log(toko.showCart());
console.log(toko.transaksi(500000, 10));
  