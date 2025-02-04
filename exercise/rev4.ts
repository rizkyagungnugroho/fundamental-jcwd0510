// soal 1
function segitiga(height: number) {
    for (let i = 1; i <= height;i++) {
        let row: String=" ";
    for(let j =1; j <= i;j++) {
        row += j + " ";

    }
    console.log(row);
    
}
}
segitiga(5);

// NO 2
function segitiga2(height: number) {
    let currentNumber: number=1;

    for(let i = 1; i <= height; i++) {
        let row: String=" ";

    for(let j =1; j <= i; j++){
        if (currentNumber <10) {
        row += "0" + currentNumber +" ";
        }else {
            row += currentNumber + " ";
        }
        currentNumber++;
    }
    console.log(row);
}
}

segitiga2(5);

// no 3

function fizzBuzz(n:number){
    let massage: string= "";

    for(let i = 1; i <= n; i++) {
        if(i % 3 ===0 && i % 5 === 0){
            massage += "fizzBuzz" + ", ";
        } else if (i % 3 ===0) {
            massage += "fizz" + ",";
        } else if(i % 5 === 0){
            massage += "Buzz" + " ";
        } else {
            massage += i + " ";
        }
    }
   
    console.log(massage);
    
}

// no 4
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
console.log(calculateBMI(75,  1.65)); 

// no 5

function removeOddNumbers(numbers:number[]) {
     return numbers.filter((number) => number % 2=== 0);
}
console.log(removeOddNumbers([1,2,3,4,5,6,7,8,9,10]));

// cara 2

function removeOddNumbers(arr) {
    return arr.filter(num => num % 2 === 0); // Jika num % 2 === 0, berarti num adalah angka genap.
}

console.log(removeOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])); 


// no 6

function splitString(input:string){
     return input.split(" ");
}
console.log(splitString("hello world"));


