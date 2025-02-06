const checkObjectEqual = (obj1: any, obj2: any) => {
    const key1 = Object.keys(obj1);
    const key2 = Object.keys(obj2);
    // kalo kita mau mengambil value
    //const value1= object.value(objetnya)

    console.log(key1);
    console.log(key2);

    if (key1.length != key2.length) {
        return false;
    }

    for (const key of key1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
};

console.log(checkObjectEqual({a:1}, {b:2}));

// no 2

const intersection= (obj1:any, obj2: any) => {
    const duplicate={};

    for (const key in obj1) {
        console.log(key);
        // kondisi=======================
        if (obj1[key] === obj2[key]){
            duplicate[key] = obj1[key];
        //================================
        }
    }

    return duplicate;
};

console.log(intersection({a:1, c:1}, {a:1 , c:2}));


// soal 3
    
    interface Student {
        name: string;
        email:string;
    }

    const combineArray=(arr1: Student[], arr2: Student[]) => {
        const margeArr= [...arr1, ...arr2];
        const temp: Student[] = [];

        margeArr.forEach((student) => {
            const existingStudent= temp.find((murid) => {
                return murid["email"] === student.email;
            });

            if (!existingStudent) {
                temp.push(student);
            }
            
    });

    return temp;
};
    
    const input1= [
        {name: "Student 1", email: "student1@email.com"},
        {name: "Student 2", email: "student2@email.com"},
    ];

    const input2= [
        {name: "Student 1", email: "student1@email.com"},
        {name: "Student 3", email: "student3@email.com"},

    ];

    console.log(combineArray(input1, input2));
    

    //no 4
    
    const switchKeyToValue= (data:any[]) => {
        const result = [];

        data.forEach((item) => {
            const temp = {};
          
          for(const key in item) {
             temp[item[key]] = key;
        }
        
        result.push(temp);
   });

    return result

};

        console.log(switchKeyToValue([{name: "davied", age:21 }, {name: "joko", age:222}]));
        
// no 5

const factorial = (n:number) => {
    if(n===1) {
        return {
            steps: [1],
            total: 1,
        };
    } else {
        const next= factorial(n-1);

        return{
            steps: [n,...next.steps],
            total: n * next.total,
        };
    }
};

const { steps, total } = factorial(5);
console.log(steps.join(" x ")+ " = " +total);

console.log(steps);
console.log(total);

/* 
Proses Eksekusi Rekursi:
    1. factorial(5) dipanggil, tetapi untuk menghitung total, ia harus menunggu 
       factorial(4).
    2. factorial(4) dipanggil, tetapi ia harus menunggu factorial(3).
    3. factorial(3) dipanggil, tetapi ia harus menunggu factorial(2).
    4. factorial(2) dipanggil, tetapi ia harus menunggu factorial(1).
    5. Base case tercapai di factorial(1), sehingga dikembalikan 
       { steps: [1], total: 1 }.
    6. Sekarang factorial(2) bisa lanjut dengan hasil dari factorial(1), 
       menghitung { steps: [2, 1], total: 2 * 1 }, lalu mengembalikan hasilnya.
    7. factorial(3) lanjut dengan hasil dari factorial(2), menghitung 
       { steps: [3, 2, 1], total: 3 * 2 }, lalu mengembalikan hasilnya.
    8. factorial(4) lanjut dengan hasil dari factorial(3), menghitung 
       { steps: [4, 3, 2, 1], total: 4 * 6 }, lalu mengembalikan hasilnya.
    9. factorial(5) akhirnya mendapatkan hasil dari factorial(4), menghitung 
       { steps: [5, 4, 3, 2, 1], total: 5 * 24 }, lalu mengembalikan hasil akhir.

Kesimpulan:
    - Setiap pemanggilan rekursi harus menunggu hasil dari pemanggilan berikutnya 
      sebelum ia bisa melanjutkan perhitungannya.
    - Karena itu, kode dalam return pada else baru dieksekusi setelah pemanggilan 
      rekursif selesai dan mulai kembali ke atas dari base case.
    - Itulah sebabnya console.log(next) mencetak hasil dari rekursi terdalam ke luar, 
      bukan sebaliknya.
*/



