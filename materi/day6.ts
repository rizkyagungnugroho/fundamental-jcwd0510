// OOP 
//cara menuliskan object 


/// cara 1
const object= {};

// cara 2
const object2= new Object();

interface User{
    name: string;
    greet: () => void;
    greet2: () => void;
}

const user: User={
    name: "udin",
    greet() {
        console.log("hello");
    },
    greet2: () => {
        console.log("Hello");
        
    },
};

const person : any= {
    name: "joko",
    age: 20,
};

// add property
console.log(person);
person.hobby="mancing"; 
person["addres"]="jogja"
console.log(person);

// delete property
console.log(person);
delete person.hobby;
console.log(person);

// accessing value 

console.log(person.name);
console.log(person["age"]);

console.log(Object.keys(person));
console.log(Object.values(person));

// IMMUTABLE & MUTABLE =====================================================
/* 
mutable : merujuk pada tipe data yang bisa diubah setelah dibuat. biasanya ini adalah object dan array dalam javascript.
        Misalnya , kamu bisa mengubah isi array atau properti objek setelah diciptakan.

Immutable : Merujuk pada tipe data yang tidak bisa diubah setelah dibuat. ini umumnya berlaku pada tipe data primitif 
            seperti string , number, booelan , null, underfined dan symbol dalam javascript. begitu nilai primitif diterapkan 
            nilai tersebut tidak bisa diubah.

*/


//immutable 
const count1: number=4;
let count2: number= count1;
count2=10;
console.log(count1);
console.log(count2);

// mutable
let orang1: any={ name: "jack"}
//let orang2 : any =orang1;
let orang2: any= { ...orang1}; // shallow copy

console.log(orang1);
console.log(orang2);

orang2.age=20;
console.log(orang1);
console.log(orang2);

// swallow copy 
// bedanya kalo swallow copy kalo kita ganti ke ikut semua 
let original1 ={
    name:"alam",
    address:{
        city: "jakarta"
    },
};
let shalllowCopy= { ...original1};
shalllowCopy.address.city="bandung"
console.log(original1);
console.log(shalllowCopy);

// DEEP COPY
// bedanya kalo deep copy diganti alamat ke ganti 
let original2 ={
    name:"udin",
    address: {
        city:"jakarta",
    },
};
let deepCopy =structuredClone(original2);

deepCopy.address.city="bandung";
console.log(original2);
console.log(deepCopy);

//  OPTIONAL CHAINING
let user2: any= {};
console.log(user2.address);
console.log(user2.address?.street); // (?) biar tidak error

// FOR IN ===========================================
const person2={
    name:"aceng",
    age: 70,
};

for(const key in person2) {
    console.log(key);
    console.log(person2[key]);
}

// DESTRUCTURING ASSIGMENT ======================================
// mengeluarkan property dalam object menjadi sebuah variable 

// versi destruc object
const animal = {
    name: "joe",
    age:2,
    weight:10,
};

console.log(animal.name);
console.log(animal.age);
console.log(animal.weight);

let { name: nm, age, weight }= animal;
// rename key name: (apa yang mau diganti)

nm= "kiki" // ngubah dalam object tersebut 
console.log(nm);
console.log(age);
console.log(weight);


// versi destruc array
const array =[10,20];
console.log(array[0]);
console.log(array[1]);

const [a,b] = array;
console.log(a);
console.log(b);

// SPREAD OPERATOR ========================================================
// digunakan untuk dopy isi object / menggabungkan object 

const objectOne={ name: "jacky", password: "admin12"};
const objectTwo={ email: "jacky@gmail.com", name: "pepe"};
const result ={ ...objectOne, ...objectTwo, password: "hassshh"};

console.log(result);

// THIS KEYWORD ========================================
// mengakses propery lain di dalam sebuah object

const animal2 ={
    firstName: "Udin",
    lastName: "petot",
    greet()  {
        console.log(`hello ${this.firstName} ${this.lastName}`);
 
    },
};
animal2.greet()


// CLASS ========================
// template / cetakan untuk membuat object // // kalo class itu huruf depan nya harus kapital


//Class Declaration 
class User2 {
    greeting() {
        console.log("Hello World");  
    }

    greeting2 = () => {
        console.log("Hello World");
    };
}

// class Expression

const User3= class {
        greeting(){
            console.log("Hello Word");  
        }
    
        greeting2= () => {
            console.log("Hello Word");
            
        };
    };

    const human = new User2();
    const human2 =new User2();
   
    human.greeting();
    human2.greeting();
    

// CONSTRUCTOR =============
// Method bawaan dari class yang akan dijalankan pertama kali saat membuat object baru
// menggunakan class

// ACCESS MODIFIER => public & private
class Person {
    name: string;
    #email: string;

        constructor(name:string, email:string){
        this.name = name;
        this.#email= email;

    }
        private showEmail() {
        return "budi@gmail.com"
    }

        SendReminder() {
        const email= this.showEmail();

    }

        greeting() {
        return `Hello ${this.name}`;
    }
    }

    const orang=new Person("budi" "budi@mail.com");
    orang

    const orang3= new Person("udin", "udin@mail.com")
    console.log(orang.greeting());
    console.log(orang3.greeting());
    

    // GETTER & SETTER ========================
    // getter ( get) dan setter (set) adalah metode khusus yang digunakan untuk membaca
    // dan mengubah nilai properti secara lebih terkontrol.

    const orang4 = {
        firstName: "udin",
        lastName: "petot",

        get fullName(){
            return this.firstName + " " + this.lastName;
        },

        set fullName(value) {
            const split= value.split(" ");
            this.firstName= split[0];
            this.lastName= split[1];
        },

        register(value:string) {
            const split=value.split(" ");
            this.firstName= split[0];
            this.lastName=  split[1];
        },

        showDetail(){
            return this.firstName+ " " + this.lastName;
        },

    };
    console.log(orang4.firstName+ " " orang4.lastName) ;
    
    console.log(orang4.fullName);
    orang4. fullName = "Joko Siwi";
    console.log(orang4.firstName);
    orang4.register("udin joko"); // menggunakan method
    console.log(orang4.firstName);
    console.log(orang4.lastName);
    console.log(orang4.showDetail());
    
    
// INHERITANCE ========================
// pewarisan dari parent class ke child class
// property dan method dari parent class bisa di akses oleh child class

// TIDAK MENGGUNAKAN KONSPE INHERITANCE
class Employee {
    name: string;
    salary: number;

    constructor(name:string, salery:number) {
        this.name: name;
        this.salary: salery;
    }

    work() {
        console.log(`${this.name} is working`);
        
    }
}

class manager2{
    name: string;
    salary: number;
    dapartment: string;

    constructor(name:string, salery:number, dapartment: string) {
        this.name: name;
        this.salary: salery;
        this.dapartment: dapartment;
    }

    work() {
        console.log(`${this.name} is working`);

    }
}


/* masalah dalam kode tanpa Inheritance :
    -Duplikasi kode : nama,salary, dan metode work() harus ditulis ulang di Employee dan Manager.
    -Sulit dikelola : Jika ada perubahan di work() , kita harus mengedit di banyak tempat.
*/

// MENGGUNAKAN KONSEP INHERITANCE
class Employee2 {
    name: string;
    salary: number;

    constructor(name:string, salery:number) {
        this.name: name;
        this.salary: salery;
    }

    work() {
        console.log(`${this.name} is working`);
        
    }
}

class Manager2 extends Employee2 {
    dapartment: string;

    constructor(name: string, salary: number, dapartement:string){
        super(name,salary); // memanggil constructor parent class (Employee2)
        this.dapartment=dapartement;
    }
}
const manager =new Manager2("Siti", 40000, "IT");

console.log(manager.name);
manager.salary;
manager.department;
manager.work();


// INSTANCE OF =============================
// Mengecek apakah sebuah object memiliki hubungan ke class tertentu

class Animal {}
class Rabbit extends Animal {}
class Tree {}

const rabbit = new Rabbit();

console.log(rabbit instanceof Animal);
console.log(rabbit instanceof Rabbit);
console.log(rabbit instanceof Tree);


