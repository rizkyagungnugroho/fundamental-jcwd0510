
// EXERSICE soal 1
//min dan max diinisialisasi dengan nilai elemen pertama dari array (points2[0]). 
// Ini dilakukan karena kita akan mencari angka terkecil dan terbesar dalam array.
const points2: number[] = [12, 5, 23, 18, 4, 45, 32];

let min = points2[0];
let max = points2[0];
let average = 0; // avarage 0 ini diisi karena akan menjumlahkan semua angka array untuk mendapatkan rata rata

for (let i = 0; i < points2.length; i++) {
  if (points2[i] < min) min = points2[i]; // Jika nilai elemen saat ini lebih kecil dari min, maka kita memperbarui nilai min dengan nilai elemen tersebut.
  if (points2[i] > max) max = points2[i]; //Jika nilai elemen saat ini lebih besar dari max, maka kita memperbarui nilai max dengan nilai elemen tersebut.
  average += points2[i]; //setiap angka array tambahkan ke average
}

average /= points2.length; //kita membagi total yang ada di average dengan jumlah elemen dalam array (points2.length) untuk mendapatkan nilai rata-rata.

console.log("Min is : " + min);
console.log("Max is : " + max);
console.log("Average is : " + average);
;

// SOAL 2

const fruits:string[]= ["Apple", "banana", "Cherry", "date"];
fruits.splice(3,0, "and" ); // menambahkan data baru pada index 1
console.log(fruits);

// Soal 3
function smallest(arr: number[]): number { 
    arr.sort((a, b) => a - b);
    return arr[1];
}
const numbers = [5, 3, 1, 7, 2, 6];
console.log(smallest(numbers));


// SOAL 4
const arr5: number[]= [1,2,3]
const arr6: number[]= [3,2,1]


/// SOAL 5 
//menambahkan elemen ke dalam array jika elemen tersebut belum ada di dalam array
function addUniqueElement(arr, newElement) {
    if (!arr.includes(newElement)) {
        arr.push(newElement);
    }
    return arr;
}
const arr = [1, 2, 3, 4];
const newElement1 = 4;
const newElement2 = 7;

console.log(addUniqueElement(arr, newElement1)); 
console.log(addUniqueElement(arr, newElement2)); 



// SOAL 6
function sumNumbers(mixedArray) {
    return mixedArray
        .filter(item => typeof item === "number") // typeof item === "number" memeriksa apakah elemen dalam array adalah tipe data number.
        .reduce((sum, num) => sum + num, 0);     
        //mengiterasi array dan menjumlahkan angka.
        // //sum adalah akumulator yang menyimpan total sementara, dimulai dari 0.
        //num adalah nilai angka saat iterasi.
}

let mixedArray = ["3", 1, "string", null, false, undefined, 2];
console.log(sumNumbers(mixedArray)); 



// soal 7
function insertIntegers(arr, maxSize, ...integers) {
    const newArray = arr.concat(integers.slice(0, maxSize - arr.length)); 
    //Bagian ini menggabungkan array arr dengan menggunakan metode concat untuk menggabungkan 2 array jadi 1
    //mulai dari indeks 0 hingga panjang yang ditentukan oleh maxSize - arr.length. 
    // Ini memastikan bahwa jumlah elemen yang diambil tidak melebihi maxSize.

    return newArray;
}

const ar6 = [];
const maxSize = 5;
const result1 = insertIntegers(ar6, maxSize, 5, 10, 24, 3, 6, 7, 8);
console.log(result1); 




// soal 8 //fungsi yang akan menggabungkan 2 array yang diberikan menjadi satu array
const numb1:number[]=[1,2,3];
const numb2:number[]=[4,5,6];
console.log(numb1.concat(numb2));

// soal 9

// i !== j → memastikan bahwa indeks yang dibandingkan tidak sama (agar tidak membandingkan elemen dengan dirinya sendiri)
// d[i] === d[j] → mengecek apakah elemen di indeks i sama dengan elemen di indeks j (menunjukkan bahwa ada duplikasi).
//!dupli.includes(d[i]) → memastikan elemen belum dimasukkan ke dalam dupli, agar tidak ada elemen yang berulang dalam array hasil.
const d = [1, 2, 2, 2, 3, 3, 4, 5, 5];
const dupli = [...new Set(d.filter((num, i, arr) => arr.indexOf(num) !== i))];
//Mengembalikan indeks pertama dari num dalam array
//Mengecek apakah num sudah muncul sebelumnya.
//Jika iya, maka berarti angka tersebut duplikat.

console.log(dupli);



// soal 10
function araydifference(ar1,ar2) {
    const difference = ar1.filter(x => !ar2.includes(x)).concat(ar2.filter(x => !ar1.includes(x)));
    return difference;
}
const ar1 = [1, 2, 3, 4, 5];
const ar2 = [3, 4, 5, 6, 7];
const result = araydifference(ar1, ar2);
console.log(result); 


// soal 11

function getPrimitives(ar5:any[]) {
    return ar5.filter(item => item !== Object(item)); // filter item = item bukan object (item)

}

const ar5 = [1, null,[], undefined,{}, "string", {}, []]; // jadi const ar5 itu beberapa kata primitives yaitu 1 , null, underfined , array , [}
console.log(getPrimitives(ar5)); 

// soal 12 
function sumDuplicates(ar7) {
    let counts = {};
    let sum = 0;

    for (let num of ar7) {
        counts[num] = (counts[num] || 0) + 1; //// Hitung kemunculan setiap angka dalam array
    }

    // Jumlahkan angka yang muncul lebih dari sekali
    for (let num in counts) {
        if (counts[num] > 1) { //angka yang muncul lebih dari sekali (counts[num] > 1) yang dihitung.
            sum += num * (counts[num] - 1); // (counts[num] - 1) digunakan untuk menjumlahkan hanya duplikatnya.
        }
    }

    return sum;
}

let ar7 = [10, 20, 40, 10, 50, 30, 10, 60, 10];
console.log(sumDuplicates(ar7)); 




// soal 13
function rockPaperScissors(playerChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    //Math.random() menghasilkan angka acak antara 0 - 1.
    //Math.floor(Math.random() * choices.length) memilih indeks acak (0, 1, atau 2).


    console.log(`Computer picked: ${computerChoice}`);

    if (playerChoice === computerChoice) {
        return "Draw";
    }

    if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        return "Win";
    } else {
        return "Lose";
    }
}


console.log(rockPaperScissors("scissors"));



















