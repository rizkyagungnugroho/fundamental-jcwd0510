class Product {
    nama: string;
    berat: number;
    price: number;
    stok: number;
    constructor(nama: string, berat: number, price: number, stok: number) {
      this.nama = nama;
      this.price = price;
      this.berat = berat;
      this.stok = stok;
    }
  }
  
  class Buku extends Product {
    author: string;
    constructor(
      nama: string,
      berat: number,
      price: number,
      stok: number,
      author: string
    ) {
      super(nama, berat, price, stok);
      this.author = author;
    }
  }
  
  class Pakaian extends Product {
    size: string;
    color: string;
    constructor(
      nama: string,
      berat: number,
      price: number,
      stok: number,
      size: string,
      color: string
    ) {
      super(nama, berat, price, stok);
      this.size = size;
      this.color = color;
    }
  }
  
  class OnlineShop {
    products: Product[] = [];
    cart: { qty: number; product: Product }[] = [];
  
    constructor() {
      this.products = [];
      this.cart = [];
    }
  
    addProduct(product: Product) {
      // Cek apakah produk sudah ada dalam catalog
      const existingProduct = this.products.find((x) => x.nama === product.nama);
      if (existingProduct) {
        return ${product.nama} sudah ada dalam catalog;
      }
  
      this.products.push(product);
  
      return ${product.nama} berhasil ditambahkan;
    }
  
    addToCart(qty: number, product: Product) {
      // Cek aapakah produk itu ada atau engga
      const availableProducts = this.products.find(
        (p) => p.nama === product.nama
      );
      // Kalo engga ada return produk not found
      if (!availableProducts) {
        return "Product not found";
      }
      // Kalo misalkan ada, cek lagi di cart sudah ada apa belum
      const cartItem = this.cart.find((c) => c.product.nama === product.nama);
      // kalo udah ada dalam cart, cek lagi stock productnya, apakah cukup dengan qty yang dimasukn
      if (cartItem) {
        if (availableProducts.stok >= qty) {
          availableProducts.stok -= qty;
  
          cartItem.qty += qty;
          return "add to cart successfully";
        } else {
          return {
            message: "stok tidak cukup",
            remainingStock: availableProducts.stok,
          };
        }
      } else {
        if (availableProducts.stok >= qty) {
          this.cart.push({ qty, product });
          availableProducts.stok -= qty;
          return "add to cart success";
        } else {
          return {
            message: "Stock tidak cukup",
            remainingSTock: availableProducts.stok,
          };
        }
      }
  
      // kalo cukup maka stock produk dikurangin sama qty
      // Kalo misalkan stocknya tidak cukup, return stock tidak cukup
    }
    transaction(userMoney:number, distance:number) {
        let totalPrice: number= 0;
        let totalWeight: number= 0;

        this.cart.forEach((c) => {
            totalPrice += c.product.price * c.qty;
            totalWeight += c.product.weight * c.qty;
        });
        
        let costPerkm : number;
        
        if(distance <2) {
            constPerkm= 200;
        }else if(distance >= 2 && distance <=5) {
            constPerkm =300;
        } else{
            constPerkm= 5000;
        }

        const ongkir = distance * costPerkm;
        const total= totalPrice + ongkir;

        if(userMoney < total) {
            return "uang gak cukup!";
        }
        
        this.cart=[];

        return{
            message: "transaksi sukses",
            total,
            ongkir,
        };
    }
    
    showCart() {
        let total: number =0;
        this.cart.forEach((c) => {
            total += c.product.price * c.qty;
        });

        return {
            cart:
        }
    }
    showCatalog() {
      return {
        catalog: this.products,
        totalProduct: this.products.length,
      };
    }
  }