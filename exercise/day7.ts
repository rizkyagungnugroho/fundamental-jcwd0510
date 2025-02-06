
//SOAL 1

function areObjectsEqual(obj1, obj2) { 
    //JSON.stringify(obj1) mengonversi objek pertama menjadi string JSON.
    //Operator === membandingkan dua string JSON tersebut.
    //Jika hasilnya sama, maka objek dianggap sama (mengembalikan true).

    return JSON.stringify(obj1) === JSON.stringify(obj2);
}


console.log(areObjectsEqual({ a: 1 }, { a: 1 }));
console.log(areObjectsEqual({ a: "Hello" }, { a: 1 }));
console.log(areObjectsEqual({ a: 1}, { a: 1})); 
;

// soal 2
function getObjectIntersection(obj1, obj2) {
    let intersection = {};
    
    for (let key in obj1) {
        if (obj2.hasOwnProperty(key) && obj1[key] === obj2[key]) {
            intersection[key] = obj1[key];
        }
    }
    
    return intersection;
}

// Example usage
const obj1 = { a: 1, b: 2 };
const obj2 = { a: 1, c: 3 };
console.log(getObjectIntersection(obj1, obj2)); // Output: { a: 1 }


// soal 3
function mergeStudentData(array1, array2) { // operator spread
    return [...new Map([...array1, ...array2].map(student => [student.email, student])).values()];
    // fungsi map untuk membuat kunci nilai 
    // metode map ini untuk gabungkan menjadi pasangan kunci nilai
    //digunakan kunci dan student sendiri digunakan sbg nilai 

}
const array1 = [
    { name: 'Student 1', email: 'student1@mail.com' },
    { name: 'Student 2', email: 'student2@mail.com' }
];
const array2 = [
    { name: 'Student 1', email: 'student1@mail.com' },
    { name: 'Student 3', email: 'student3@mail.com' }
];

console.log(mergeStudentData(array1, array2));


// soal 4
// 
function switchPropertiesAndValues(arr) {
    // metode map untuk membuat array baru dengan objek 
    //yg terlah di modifikasi 
    return arr.map(obj => {
    //
      let newObj = {};
      for (let key in obj) {
        // untuk iterasi melalui setiap kunci dalam object
        if (obj.hasOwnProperty(key)) {
            // memeriksa jika properti langsung menggunakan hasOwnProperty
          newObj[obj[key]] = key;
          // menukar kunci nilai dari obj menjadi kunci new obj 
          // kunci dari obj menjadi nilai di newObj
        }
      }
      return newObj;
      
    });
  }
  const input = [{ name: 'David', age: 20 }];
  const output = switchPropertiesAndValues(input);
  console.log(output); 

// soal 5
function faktorial(n: number){
    if (n < 0) { 
        return -1; 
    } else if (n === 0) {
        return 1;
    } else {
        return n * faktorial (n - 1);
    }
}
console.log(faktorial(5));

