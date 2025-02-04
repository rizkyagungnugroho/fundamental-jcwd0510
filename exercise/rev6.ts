interface Student {
    name: string;
    email: string;
    age: number;
    score: number;
  }
  
  // isi Argument dulu
  const students = [
    { name: "joko", email: "joko@gmail.com", age: 23, score: 88 },
    { name: "budi", email: "budi@gmail.com", age: 24, score: 89 },
    { name: "alan", email: "alan@gmail.com", age: 21, score: 90 },
  ];
  
  // Buat classnya
  class CalculateStudent {
    students: Student[];
  
    constructor(students: Student[]) {
      this.students = students;
      // 2. cek apakah datanya sudag masuk
      console.log(students);
    }
  
    // 3 Membuat methodnya
  
    calculate() {
      // 4. membuat variable untuk menyimpan score dan age
      let maxScore: number,
        minScore: number,
        avgScore: number,
        maxAge: number,
        minAge: number,
        avgAge: number;
  
      // 5. Kita short dan reduce dulu nilai yang ada di array, dan mengelompkannya berdasarkan skor terendah
      const sortStudentScore = this.students.sort((a, b) => a.score - b.score);
      //   console.log(sortStudentScore)
      const reduceStudentCore = this.students.reduce((a, b) => a + b.score, 0);
      //   console.log(reduceStudentCore)
      maxScore = sortStudentScore[sortStudentScore.length - 1].score;
      //   console.log(maxScore)
      // 5. Karena sudah diurutkan, maka kita ambil array ke 0 dari score
      minScore = sortStudentScore[0].score;
      //   console.log(minScore);
      avgScore = reduceStudentCore / this.students.length;
      //   console.log(avgScore);
  
      const sortStudentAge = this.students.sort((a, b) => a.age - b.age);
      console.log(sortStudentAge);
      const reduceStudentAge = this.students.reduce((a, b) => a + b.age, 0);
      console.log(reduceStudentAge);
      maxAge = sortStudentAge[sortStudentAge.length - 1].age;
      console.log(maxAge);
      minAge = sortStudentAge[0].age;
      console.log(minAge);
      avgAge = reduceStudentAge / this.students.length;
      console.log(avgAge);
  
      return {
        score: { // object
          highest: maxScore,
          lowest: minScore,
          average: avgScore,
        },
        age: {
          highest: maxAge,
          lowest: minAge,
          average: avgAge,
        },
      };
    }
  }
  
  const newStudent = new CalculateStudent(students);
  console.log(newStudent.calculate());


  // NO 2

  class Product {
    constructor(public name: string, public price: number) {}
}

interface Cart {
    product: Product;
    qty: number;
}

class Transaction {
    private cart: Cart[] = [];
    private total: number = 0;

    addToCart(product: Product, qty: number) {
        const existingProduct = this.cart.find(
            (item) => item.product.name === product.name
        );

        if (existingProduct) {
            existingProduct.qty += qty;
        } else {
            this.cart.push({ product, qty });
        }

        this.total += product.price * qty;
    }

    private formatPrice(price: number) {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0,
        }).format(price);
    }

    showCart() {
        return this.cart;
    }

    showTotal() {
        return this.formatPrice(this.total);
    }

    checkout(userMoney: number) {
        if (userMoney < this.total) {
            return "Uang tidak cukup";
        }

        const result = {
            total: this.formatPrice(this.total),
            message: "Transaksi berhasil",
            kembalian: this.formatPrice(userMoney - this.total),
        };

        // Reset cart dan total setelah transaksi berhasil
        this.cart = [];
        this.total = 0;

        return result;
    }
}

// Contoh penggunaan
const kaos = new Product("Kaos Oblong", 100_000);
const jaket = new Product("Jaket Besi", 400_000);

const transaction = new Transaction();
transaction.addToCart(kaos, 2);
transaction.addToCart(kaos, 2);
transaction.addToCart(jaket, 2);

console.log(transaction.showCart());
console.log(transaction.showTotal());
console.log(transaction.checkout(900_000));

    
    
