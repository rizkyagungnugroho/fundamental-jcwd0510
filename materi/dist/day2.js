//=========================== IF STATEMEMT 
//==syntax
const age = 11;
if (age >= 17) {
    console.log("anda bisa buat ktp");
}
//=============== ELSE STATEMENT
// Backup plan dari statement
//
const age1 = 14;
if (age1 >= 17) {
    console.log("anda bisa buat ktp");
}
else {
    console.log("anda belum bisa buat ktp");
}
//======================= ELSE IF STATEMENT
const grade = "A";
if (grade === "A") {
    console.log("nilai bagus");
}
else if (grade === "B") {
    console.log("nilai lumayan");
}
else if (grade === "C") {
    console.log("nilai buruk");
}
else {
    console.log("nilai tidak diketahui");
}
//========================== SWITCH STATEMENT 
const day = "senin";
switch (day) {
    case "senin":
        console.log("Hari senin");
        break;
    case "selasa":
        console.log("Hari selasa");
        break;
    case "rabu":
        console.log("Hari rabu");
        break;
    default:
        console.log("Hari tidak ditemukan");
}
//============================ LOGICAL OPERATOR
// && -> and
// || -> or
// ! -> not
// AND -> harus keduanya bernilai true agar menghasilkan nilai true
const umur = 15;
const punyaSIM = true;
// true            true 
if (umur >= 17 && punyaSIM == true) {
    console.log("boleh bawa kendaraan");
}
else {
    console.log("belum boleh bawa kendaraan");
}
// OR -> kalau ada salah satu yang nilainya true maka akan menghasilkan nilai true 
const car = "Mercy";
//  true                false     -> true
if (car === "Mercy" || car === "bmw") {
    console.log("mobil jerman");
}
else {
    console.log("mobil jepang");
}
//NOT -> membalikan nilai boolan 
const isSunny = false;
const isRaining = !isSunny;
console.log(isSunny);
console.log(isRaining);
// =================================== TERNARY OPERATOR
// shorcut untuk if else condition
// condition? true : False
const str = 'typescript';
if (str === "javascript") {
    console.log("javascript");
}
else {
    console.log("not javascript");
}
console.log(str === "javascript" ? "javascript" : " not javascript");
console.log(str === "javascript"
    ? "javascript"
    : str === "typescript"
        ? "typescript"
        : "not found");
//======================================= LOOP STATEMENT ( PERULANGAN )
//Rangkaian instruksi yg dilakukan berulangkali hingga kondisinya tidak terpenuhi
//type: for loop, while loop, dan wo while loop
// FOR LOOP -> Mempunyai 2 statement
// statement 1 : menginisialisasikan variable dari looping itu sendiri
// statement 2 : mendefine kondisi dari looping tersebut
// statement 3 : kode yang di eksekusi diakhir setiap iterasi
/*  syntax
    for(statement1;statement2;statement3){
            code block yang akan diulang
    }
*/
for (let i = 0; i < 6; i++) {
    console.log("hello World");
}
// WHILE LOOP ini pengecekan di awal baru eksekusi diakhir
let i = 0;
while (i < 10) {
    console.log("hello WOrd");
    i++;
}
// DO WHILE
/*
    do{} while ();
    eksekusi dulu , pengecekan di akhir
   
 */
let count = 1;
do {
    console.log("ini literasi ke : " + count);
    count++;
} while (count <= 5);
//=====================BREAK
// untuk menghentikan loop
let sum = 0;
while (true) {
    console.log("sum :" + sum);
    if (sum >= 0) {
        break;
    }
    sum++;
}
//========= CONTINUE
// Melakukan skip pada lopping
for (let i = 0; i < 5; i++) {
    if (i == 2 || i == 3)
        continue;
    console.log(i);
}
export {};
