class StudentStatistics {

    constructor(students) {
      this.students = students;
    }
  
    calculateStats() {
      if (!this.students.length) return null;
  
      const ages = this.students.map(s => s.age);
      const scores = this.students.map(s => s.score);
  
      const average = arr => arr.reduce((a, b) => a + b, 0) / arr.length;
  
      return {
        score: {
          highest: Math.max(...scores),
          lowest: Math.min(...scores),
          average: average(scores).toFixed(2)
        },
        age: {
          highest: Math.max(...ages),
          lowest: Math.min(...ages),
          average: Math.round(average(ages))
        }
      };
    }
  }
  
  const students = [
    { name: "andi", age: 25, score: 85 },
    { name: "Budi", age: 27, score: 90 },
    { name: "Coki", age: 21, score: 78 }
  ];
  
  const stats = new StudentStatistics(students);
  console.log(stats.calculateStats());
  

  // SOAL 2 


  class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    toString() {
        return `${this.name} - $${this.price.toFixed(2)}`;
    }
}

class Transaction {
    constructor() {
        this.cart = [];
        this.total = 0.0;
    }

    addToCart(product, qty) {
        this.cart.push({ product, qty });
        this.total += product.price * qty;
        console.log(`Added ${qty} x ${product.name} to cart.`);
    }

    showTotal() {
        console.log(`Current total: $${this.total.toFixed(2)}`);
    }

    checkout(payment) {
        if (payment < this.total) {
            console.log("Insufficient funds!");
            return null;
        }
        
        const change = payment - this.total;
        const transactionData = {
            items: this.cart.map(({ product, qty }) => ({ name: product.name, qty, total: product.price * qty })),
            total: this.total,
            payment: payment,
            change: change.toFixed(2)
        };
        
        this.cart = [];
        this.total = 0.0;
        return transactionData;
    }
}

// Example Usage
const products = [
    new Product("Laptop", 10000),
    new Product("mouse", 1500),
    new Product("keyboard", 2.5),
    new Product("monitor", 10.)
];

const transaction = new Transaction();
transaction.addToCart(products[Math.floor(Math.random() * products.length)], 2);
transaction.addToCart(products[Math.floor(Math.random() * products.length)], 3);
transaction.showTotal();

const payment = 5000;
const receipt = transaction.checkout(payment);
if (receipt) {
    console.log("Transaction Completed:", receipt);
}
