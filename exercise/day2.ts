//SOAL 1 Tulis kode untuk memeriksa apakah angka tersebut ganjil atau genap

const angka:number = 20;
    if (angka % 2 == 0) { 
      // kondisi untuk memeriksa apakah angka yang dimasukkan ke variabel angka adalah bilangan genap.
      //Operator % (modulus) digunakan untuk mencari sisa pembagian angka dengan 2. Jika angka % 2 hasilnya sama dengan 0, berarti angka tersebut genap
        console.log(`The angka ${angka} is even`);
    } else {
        console.log(`The angka ${angka} is odd`);
    }
  
//SOAL 2 cari bilangan prima
// syarat bilangan prima adalah angka tersebut tidak boleh habis dibagi
// oleh angka lain selain 1 dan diri nya sendiri

let n = 7;
let isPrime: boolean = true;

if (n <= 1) {
    isPrime = false; 
    //Bilangan prima harus lebih besar dari 1.
    //Jika n <= 1, maka variabel isPrime diubah menjadi false.
} else {
    for (let i = 2; i < n; i++) {
      //Perulangan ini memeriksa apakah n memiliki faktor selain 1 dan n.
      //Dimulai dari i = 2 hingga i < n. Kondisi ini memeriksa apakah n habis dibagi i. Jika habis dibagi (n % i === 0), berarti n bukan bilangan prima.
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }
}
console.log(isPrime ? `${n} is a prime number.` : `${n} is not a prime number.`);

// SOAl 3  Tulis kode untuk menemukan jumlah angka 1 sampai N
//cara 1 

//const angka3: number=5;
//const result=(angka3* (angka3+1)) /2;
//console.log(result);

//const angka4: number=5;
//let sum: number=0;
//let massage:string=""

//for(let i= 1; i<= angka2; i++) {
  //sum += i;
  
  //if(i === angka2) {
    //massage += i + "";
  //} else {
    //massage += i + " + ";
  //}
///=}
//console.log(sum);
//console.log(massage + " = " + sum );

// soal 4 mencari factorial angka
const num: number= 4;
let sum: number= 1;
let massage: string="";

for(let i =num; i >= 1; i ++) {
  sum *= i;

  if (i === 1) {
    massage += i + "";
  } else {
    massage += i + " x ";
  }
}

console.log(sum);
console.log(massage + " = " +sum);

  
//soal 5
//bilangan fibonaci adalah deret angka dimana setiap angka setelah
// dua angka pertama adalah hasil penjumlahan dari dua angka sebelumnya
 
const p: number= 15;
let a:number =0;
let b:number=1;

for(let i = 0; i <p; i++) {
  let next: number =a + b ;
  a = b;
  b = next;
}

console.log(a);




