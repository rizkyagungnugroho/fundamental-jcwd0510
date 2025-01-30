// soal 1 
function segitiga(height: number) {
    for(let i = 1; i <= height;i++) {
        let row: String=" ";
    for(let j =1; j <= i;j++) {
        row += j + " ";

    }
    console.log(row);
    
}
segitiga(5);

// soal 2 

function fizzBuzz(n) {
    // Loop sebanyak n kali
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");  // Jika kelipatan 3 dan 5
        } else if (i % 3 === 0) {
            console.log("Fizz");      // Jika kelipatan 3
        } else if (i % 5 === 0) {
            console.log("Buzz");      // Jika kelipatan 5
        } else {
            console.log(i);           // Jika bukan kelipatan 3 atau 5, tampilkan angka
        }
    }
}

fizzBuzz(6);  // Output: 1, 2, Fizz, 4, Buzz, Fizz
fizzBuzz(15); // Output: 1, 2, Fizz, 4, Buzz, Fizz, 7, 8, Fizz, Buzz, 11, Fizz, 13, 14, Fizz






// SOAL 3
function calculateBMI(weight, height) {
    let bmi = weight/(height**2);  // berat badan / (tinggi badan  *tinggi badan)

    if (bmi < 18.5) {
        return "less weight"; // kurang
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        return "ideal"; //ideal 
    } else if (bmi >= 25.0 && bmi <= 29.9) {
        return "overweight"; //kelebihan
    } else if (bmi >= 30.0 && bmi <= 39.9) {
        return "very overweight"; // sangat kelebihan 
    } else {
        return "obesity"; //obesitas
    }
}

// Example usage:
console.log(calculateBMI(53, 1.65)); // Output: "ideal"
console.log(calculateBMI(85, 1.65)); // Output: "overweight"
console.log(calculateBMI(50, 1.65)); // Output: "less weight"
console.log(calculateBMI(120, 1.65)); // Output: "obesity"
console.log(calculateBMI(75,  1.65)); // Output: "obesity"




//  num % 2 === 0 adalah kondisi untuk memilih angka genap.
//  % (modulus) menghitung sisa pembagian
//  Jika num % 2 === 0, berarti num adalah angka genap.
//  Jika num % 2 !== 0, berarti num adalah angka ganjil dan akan dihapus dari hasil akhir.

// SOAL 4
function removeOddNumbers(arr) {
    return arr.filter(num => num % 2 === 0); // Jika num % 2 === 0, berarti num adalah angka genap.
}

console.log(removeOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); 



 // SOAL 5 
function str(str) {
    return str.split(" "); // string menjadi array berdasarkan pemisah
}

console.log(str("Hello World")); 