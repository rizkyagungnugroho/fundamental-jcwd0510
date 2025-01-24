//SOAL 1
let panjang =5;
let lebar = 3;
let luas = panjang * lebar;
console.log(luas);
// karna panjang *lebar = 15

//SOAL 2

console.log(2*(panjang+lebar))
// 2* (panjang+lebar)

// SOAL 3
let radius= 14;
let diameter= 2* radius;
let circumference= diameter * 3.14;
// 2 diameter * keliling * radius
//Math.PI itu untuk menghitung keliling lingkaran 
let area= Math.PI * Math.pow(radius,2); 
//Math.pow menghitung angka yang dipangkatkan 
// hitung keliling * hitung angka yang dipangkatkan 
console.log(diameter )
console.log(circumference)
console.log(area)

//SOAL 4

let a:number=80;
let b:number=65;
let r:number=180;
//r = sudut 180% segitiga 
r =180 - (a + b);
// sudut 180 - (a +b ) = 35
console.log(r)


//SOAL 5

const hari:number = 400;
const tahun:number= Math.floor((hari /365) );
const bulan:number= Math.floor((hari % 365)  / 30 );
const tanggal:number=Math.floor((hari % 365) % 30);
console.log(tahun, bulan, tanggal);




//6 
const date1: Date =new Date("2025-01-01");
const date2: Date =new Date("2025-10-01");

const bedaTanggal: number = Math.abs(date1.getTime()- date2.getTime());
const bedaHari: number = bedaTanggal / (1000 * 3600 * 24);
console.log(bedaHari);



console.log(bedaHari);
console.log(bedaHari);
