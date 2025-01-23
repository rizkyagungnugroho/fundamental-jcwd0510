//versi js
const massage ="hello word";

//versi TS (jadi di typescript ini kita bisa menambahkan data type apa saja )
const massage2: string = "hello word";

//==================== SRING BUILD IN METHOD
// toLowerCase= kecil
// UpperCase=besar
// replace = ganti huruf 

const nama: string="Bubdi";
const nama1: string="joko";
const nama2: string="jack";
const nama3: string='udin';

console.log(nama.toLowerCase())
console.log(nama.toUpperCase())
console.log(nama.replace("B","F"));
console.log(nama.replaceAll("B","f"));
console.log(massage.split(" "));
console.log(nama1.concat(nama2).concat(nama3));
console.log(nama1+nama2+nama3);
console.log(nama3.slice(0,3));

//================================= TEMPLATE LITERALS / TEMPLATE STRING

const name4: string= "carli";
const massage3: string= `welcome ${name4}`;
console.log(massage3)
console.log("Welcome " + name4);


///====================================================== NUMBER BUILD IN METHOD

const angka: string= '2000'
console.log(typeof Number(angka)); //konversi tipe data string ke number
console.log(angka);
console.log(parseInt(angka)); // konversi tipe data string ke number
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

//====================================== STRING CONVERSION (convert)

const angka1: number=20;
console.log(String(angka1));
console.log(angka1.toString())

//====================================== BOEELAN CONVERSION 
// apapun itu kalo di dalam string ada isinya pasti dia bernilai true


console.log(Boolean(1))
console.log(Boolean(0))
console.log(Boolean(3))

//===================================== DATE

const now: Date =new Date();
console.log(now);

//=========== GET METHOD
console.log(now.getFullYear());
console.log(now.getMonth() +1);
console.log(now.getDate());
console.log(now.getTime());

//==========Set Method
now.setDate(10);
now.setMonth(2);
now.setFullYear(2040);

console.log(now)

//======== BASIC OPERATOR
/*
    +   -> pertambahan
    -   -> pengurangan
    *   -> perkalian
    /   -> pembagian
    %   -> modulo (sisa bagi)
    **  -> pangkat
*/

console.log(2 + 1 );
console.log(9 % 2 );
console.log(3 * 10 );
console.log(16000 / 80 );


//=============== MODIFY IN PLACE 
let n: number =4;
n+= 2; //n= n +2
console.log(n);

//===============INCREMENT & DECREMENT

let counter: number=2;
counter++//increment
//counter--; //decrement 

console.log(counter)

//======================= POSTFIX % PREFIX

let counter2: number =2;

//console.log(counter2++); //Posft ( jadi dia menampilkan dulu baru ditambah)
console.log(++counter2); // prefix (jadi dia ditambah dulu baru ditampilkan)

//======================== COMPARISION OPERATOR 

// ==
// ===
// < kurang dari
// > lebih dari
// <= kurang dari sama dengan
// >= lebih dari sama dengan 

5 == 5
//console.log(5=="5") //pengecekan divaluenya saja
//console.log("5==="5") //pengecekan divalue dan tipe datanya

console.log(5 <2);
console.log(5 >2);
console.log(5 <=5);
console.log(5 <=5);

//============================= MATH

//math ceil-> membulatkan angka ke atas
console.log(Math.ceil(4.2));

//math floor -> membulatkan angka ke bawah
console.log(Math.floor(4.7));

//math round -> membulatkan angka ke bilangan bulat terdekat
console.log(Math.round(4.7))
console.log(Math.round(4.3))

//match max -> mengembalikan angka terbesar dari sekumpulan angka
console.log(Math.max(1,2,3,4,5,8,9,0,1000))

//match min -> mengembalikan angka terkecil dari sekumpulan angka
console.log(Math.min(1,2,3,4,5,8,9,10,1000))

// math abs -> menghilangkan tanda negatif 
console.log(Math.abs(-11));

//math random -> menghasilkan angka acak antara 0 dan 1
console.log(Math.random());