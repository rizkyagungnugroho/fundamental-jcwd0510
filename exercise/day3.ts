// soal 1 Write a code to display the multiplication table of a given integer.
let n = 9;
for (let i = 1; i <= 10; ++i)
    // jadi i = 1; i lebih kecil dari 10 pre incement; ++i)
    console.log(n + " x " +  i);
    //n + x + i 



// soal 2 Write a code to check whether a string is a palindrome or not.
const nm="madam"
let nama_balik:string = "";
for(let i= nm.length -1; i>=0; i--){
    
}






// Soal 3 //Write a code to convert centimeter to kilometer.
const convertCmToKm = (cm) => { //deklarasi convert to kk
    return cm / 100000; // Mengonversi satuan centimeter ke kilometer.
    // karena 1 kilometer (km) sama dengan 100,000 centimeter (cm)
};

let cm = 100000;
let km = convertCmToKm(cm); // convert CM ke KM     
console.log(km + " km");  












//soal 4
const number = 1000; //dekralasi number adalah 1000;
const formattedIDR = `Rp. ${number.toLocaleString('id-ID', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
//mengonversi angka menjadi string sesuai format lokal tertentu 
//minimumFractionDigits: 2: Menjamin ada minimal 2 angka desimal.
// maximumFractionDigits: 2: Membatasi maksimal 2 angka desimal. atau hasilnya selalu memiliki angka desimal
console.log(formattedIDR); // Output: Rp. 1.000,00


 
// Soal 5
const removeFirstOccurrence = (string, searchString) => 
    // searchString: Substring yang ingin dihapus dari string utama.
    string.replace(searchString, '');
    // replace(): Metode bawaan JavaScript yang menggantikan kemunculan pertama dari 
    // searchString dalam string dengan string yang diberikan, dalam kasus ini adalah string kosong 
const string = "Hello world"; //paramater string 
const searchString = "ell"; // paramater searchString
const result = removeFirstOccurrence(string, searchString);
// =  Substring yang ingin dihapus dari string utama. ( hellow word, ell)
console.log(result); // Output: "Ho world"


//SOal 6

let nama = "hello word"; 
let kataPertama = nama.slice(0, 1).toUpperCase() + nama.slice(1, nama.indexOf(" ")); 
//Mengambil karakter pertama dari string, yaitu huruf "h", uppercase itu mengubah huruf besar,
// + Mengambil bagian string setelah huruf pertama hingga spasi pertama, index itu untuk mengembalikan posisi pertama spasi pertama 
let kataKedua = nama.slice(nama.indexOf(" ") + 1, nama.indexOf(" ") + 2).toUpperCase() + nama.slice(nama.indexOf(" ") + 2);
//Mengambil indeks karakter pertama dari kata kedua, yaitu setelah spasi pertama (indeks 6).
//Mengambil karakter pertama dari kata kedua, yaitu "w"
//Mengambil sisa string dari kata kedua, yaitu "ord"
console.log(kataPertama + " " + kataKedua);


/// soal 7 











//soal 8 mencari bilangan terbesar

let number1 = 42;    //deklarasi number1    
let number2 = 27;    //deklarasi number2

let hurufterbesar = Math.max(number1, number2); // jadi huruf terbesar menggunakan math max untuk mengembalikan nilai terbesar dari
// dari number 1 , number 2) 

console.log("huruf terbesar adalah " + hurufterbesar);









//soal 8





// soal 9






// soal 10 





//soal 11
const input: string = "An apple a day keeps the doctor away";
let output: string = "";
output = input.replace(/a/gi, "*"); //
//cukup pakai replace dengan regex /a/gi untuk mengganti semua huruf "A" dan "a" tanpa perlu panggil replaceAll
console.log(output); 










