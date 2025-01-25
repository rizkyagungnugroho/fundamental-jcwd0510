/// ARRAY 
//jadi itungan nya itu dari 0 bukan dari 1
//const arr=[]; //cara 1
//const arr2=new Array(); // cara2
// array of string
const arr:string[] = ["A", "B", "C", "D"];
const arr2:string[] = new Array("A" , "B" , "C","D");

const arr3:number[] = [1,2,3,4];
const arr4:number[]= new Array(1,2,3,4);
arr[3]="E"; // jadi kan urutan D itu sama dengan 3 kalo mau ganti tinggal arr[3] itu angka posisi D = "(apa yang mau diganti)";
console.log(arr);

//array of object 
// key: value

// helloWord -> camel case
// HelloWorld -> pascal case
// hello_world => snake case

//PascalCase
//Singular
// interface Stundent {
//  name: string;
//  email: string;
// }
// type sama interface sama aja kegunaannya cuma beda penulisan kalo interface pake {
// kalo type harus menggunakan = {

type Stundent= {
    name:string;
    email:string;
    hoby?:string;
    address?:Address;
    };


const stundents: Stundent[]= [
    {name: "Budi", 
    email: "budi@gmail.com",
    hoby:"mancing",
    address: {
        city:"yogyakarta",
        street:"jln jalan"
    },
},
    {name: "joko", email: "joko@gmail.com"},
    {name: "siti", email: "siti@gmail.com"},

];

//======================= FOR OF 
//  array untuk mengiterasi nilai-nilai dalam array.
//  Perulangan ini merupakan cara yang sederhana dan ringkas untuk menelusuri item dalam array. 
// jadi dia bakal looping sesua yang ada pada const fruits 

 const fruits: string[] = ["apple", "banana", "orange"];
 for (const fruit of fruits)
    console.log(fruit);
    
 const numbers:number[] = [1,2,3,4,5,6,];
 let total:number=0;
        for (const number of numbers)
          total += number;
console.log(total) 

//====================== FUNCTION
//1. funtion declaration
/*
    function namaFunction(parameter){
        //logic
        
    }
};
*/ 

        //========(PARAMETER============)
function square(angka1:number, angka2:number) { //(itu adalah paramater)
    //logic 
    const result = angka1*angka2; 
    return result;
}
    const pertambahan1 =square(4,5);
    const pertambahan2 =square(5,10);
    console.log(pertambahan1);
    console.log(pertambahan2);

// 2. ======FUNCTION EXPRESSION======

const square2=function(angka:number){
    return angka*angka;
};

    const perkalian1= square2(4);
    const perkalian2= square2(5);
    console.log(perkalian1);
    console.log(square2(5));


// 3 ===========FUNCTION SCOPE=======
// variable yang di define di dalam function hanya bisa diakses
// di dalam function tsb
// jadi functionnya harus di luar } kalo di dalem dia tidak bisa 

function scope() {
    const hello="hello"
    console.log(hello);//hasil tidak akan muncul sebelum dipanggil fungsinya
}
scope();

//===================== PARAMETER & ARGUMENT
// parameter -> variable yang mewakil value dari argument yang dimasukkan
// argument -> value yang dimasukan saat pemanggilan function

//                  paramter
function gretting2(name:string){
    const hello="hello"
    return hello +" " +name;
} 

//                 Argument
console.log(gretting2("budi"));
console.log(gretting2("joko"));
console.log(gretting2("siti"));

//================= DEFAULT PARAMETER

function multiply(a:number, b:number=2){
    return a* b;
}
console.log(multiply(5,7))
console.log(multiply(5));

 //================== REST PARAMETER
 // mewakili sisa argument ke dalam 1 variable parameter

function myFunc(a:number, b:number,...manyMoreArgs:number[]){
    console.log(a);
    console.log(b);
    console.log(manyMoreArgs);
    
    
}

myFunc(1,2,3,4,5,6,7,8,9,10);

//====================== NESTED FUNCTION
//fungsi yang berada di dalam fungsi
//inner function bisa akses parameter dari outer function
//outer function tidak bisa akses parameter dri inner function

function getMassage(firstname: string){
    //inner function1
    function sayHello() {
        return"Hello "+ firstname + ","; {}
    }

    //innter function2
    function welcomeMassage(){
        return"Welcome to Purwadhika";

    }
    return sayHello() + " "+ welcomeMassage();
}
console.log(getMassage("budi"));


//=================== CLOSURE
//inner function selalu mempunyai akses ke variable dan parameter dari outer function
// bahkan setelah function tsb di return


function gretting3(name:string) {
    const defaultMassage:string="Hello";

    //innter function
    return function() {
        return defaultMassage +" " + name;
    };
}
const result=gretting3("budi");
console.log(result());

//======================== RECURSIVE
//fungsi yang memanggil dirinya sendiri

function coutDown(number:number) {
    console.log(number);
    let nextNumber= number -1;
    if(nextNumber >0 ){
        coutDown(nextNumber);
    }
    
}

coutDown(10);


///=========== ARROW FUNCTION
//shorcut untuk menuliskan function expression

const square3= function(number:number){
    return number * number ;
};

// syntax -> () => {}
// contoh jika diubah ke arrow function

const square4=(number:number)=>{
    return number * number;
}

//kalo misalnya cuma 1 line bisa disingkat kaya gini
const square5= (number:number) => number*number;

//+============ ARRAY BUILT IN METHODS
// JOIN -> menggabungkan value yang ada di dalam array ke dalam bentuk string

const words: string[] =["hello", "world"]
console.log(words.join(" "));

// POP -> menghilangkan value paling akhir dalam array
const word2:string[]=["test", "hello", "word"];
console.log(word2);
word2.pop();
console.log(word2);

// SHIFT -> menghilang value yang paling depan dalam array
const word3:string[]=["test", "hello", "word"];
word3.shift();
console.log(word2);

// UNSHIFT -> menambahkan value ke urutan paling depan array
const word5:string[]=["hello", "word"];
word5.unshift("test");
console.log(word5);

//PUSH  -> menambahkan value ke paling akhir array
const word6:string[]=["hello", "word"];
word6.push("purwadhika");
console.log(word6);

// CONCAT -> menggabungkan 2/array menjadi 1 array
const array1:string[]=["hello"];
const array2:string[]=["word"];
const array3:string[]=["halo"];
const array4:string[]=["dunia"];
console.log(array4.concat(array3));

const mergerArr=[...array1, ...array2, ...array3];
console.log(mergerArr);
