// soal 1
let n = 9;
for (let i = 1; i <= 10; ++i)
    // jadi i = 1; i lebih kecil dari 10 pre incement; ++i)
    console.log(n + " x " +  i);
    //n + x + i 


// soal 2
//index -> startnya dari 0
//lenght -> startnya dari 1
const kata: string="madam";
let result: string="";
for(let i =kata.length -1; i>= 0; i--){
result += kata[i];
}

console.log(result);

//CARA 2
const kata2: string="mobil";
const isPalindrome: boolean = kata2 === kata2.split("").reverse().join("");
console.log(isPalindrome);


// soal 3

const cm:number=100_000;
const km:number= cm /100_000;
console.log(`${km} km`);

//soal 4

const harga:number=10_000;
const hasil: string=new Intl.NumberFormat("id-ID",{
    style: "currency",
    currency: 'IDR',
   // maximumFractionDigits: 9,
}).format(harga);

console.log(hasil);

//soal 5

const kata3:string="Hello Word";
const search:string="ell";
const result2:string=kata3.replace(search,"")
console.log(result2);

// soal 6

const inputString:string= "hello word";
let words= inputString.split(" ");
//console.log(words);
//console.log(words[0] [0]);

for(let i =0; i < words.length; i++) {
    words[i]= words[i][0].toUpperCase() + words[i].slice[1];
}
console.log(words.join(" "));

// soal 7

//const inputString2: string=" The QuIck BroWn FoX";
//let swappedString: string="";
//for(let i=0; i< inputString2.length; i++){
    //if(inputString2[i] ==== inputString2[i].toUpperCase()) {
    //swappedString += inputString2[i].toLowerCase();
    //}else{
       // swappedString += inputString2[i].toUpperCase();

    //}
//}
//console.log(swappedString);

//SOAL 8

//const num1:number=10;
//const num2:number=27;
//console.log(num1>num2? num1);


//soal 9

const num1: number=42;
const num2: number=27;
const num3: number=18;

const smallest:number= Math.min(num1,num2,num3); // jadi smallest itu math.min mencari nilai terkecil
const largest:number= Math.max(num1,num2,num3); // jadi largest itu mencari itu math.max mencari nilai terbesar
const middle:number= num1+num2+num3+ -smallest -largest; //jadi middle num1+num2+num3+ -smallest -largest
console.log(`${smallest} ${middle} ${largest}`);

// SOAL 10


const input:any="hello";

if(typeof input === "string") {
    console.log(1);
} else if(typeof input === "number") {
    console.log(2);
} else {
    console.log(3);
}


// SOAL 11

 const inputString3:string="An Apple a day keeps the doctor aways";
 const replaceWord:string="a";
 let modifiedString:string="";

 for(let i= 0; i <inputString3.length; i++) {
    if (inputString3[i] === replaceWord){
        modifiedString += "*";
    }else{
        modifiedString  += inputString3[i];
    }
 }

 console.log(modifiedString);
 
