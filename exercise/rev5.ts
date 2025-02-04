// soal 1 
//sorting

const sortfunction = (arr: number[]) => {
    arr.sort((a, b) => a - b);
    const lowest: number = arr[0];
    const highest: number = arr[arr.length - 1];
    const sum: number = arr.reduce((a, b) => a + b, 0);
    const average: number = sum / arr.length;
    return { lowest, highest, average };
};
console.log(sortfunction([3,2,6,5,8,1]));


// cara 2

const sortFunction2=(arr:number[]) => {
    let lowest:number=arr[0];
    let highest:number= arr[0];
    let sum:number=0;
 
    for(const num of arr) {
        if(num < lowest) lowest=num;
        if(num > highest) highest=num;
        sum += num;
}
const avarage= sum /Array.length;
return{ lowest, highest, avarage};

};

console.log(sortFunction2([3,2,6,5.8,1]));

// no 2

const concatWords = (words: string[]) => {
    if(words.length ==1){
    }else {
        const lastWord=words.pop();
        return words.join(" , ") + " and " + lastWord;
    }

    }

console.log(concatWords(["apple", "banana","cherry", "date" ]));


// no 3
const secondSmallest = (arr:number[]) => {
    if(arr.length <2) {
        return"minium array lenght harus 2";
    }
    const sortedArr = arr.sort((a , b) => a-b);
    return sortedArr[1];

};
console.log(secondSmallest([5,1,3,4]));


//no 4
const calculateArr=(arr1:number[], arr2:number[]) => {
    const result:number[] = [];

    for (let i= 0; i < arr1.length; i++) {
        result.push(arr1[i] + arr2[i]);
        
    }
    return result;
};
console.log(calculateArr([1,2,3], [3,2,1]));

//no 5

const addNewElement= (arr:number[], newElement:number) => {
    if(!arr.includes(newElement)){
    arr.push(newElement);
}
    return arr;
};
console.log(addNewElement([1,2,3,4], 7));
console.log(addNewElement([1,2,3,4], 4));

// NO 6

const sumNumberDataTypes= (arr:any[]) => {
    let total:number=0;
    arr.forEach((value) => { // melakukan looping pada array tadi tidak me-return baru
        if(typeof value === "number") {
            total += value;
        }
    });
    return total;
};
console.log(sumNumberDataTypes(["3",1,"string",null,false, undefined,2]));

// no 7

const LimitData = (maxSize: number, ...integers: number[]) => {
    const result: number[] = [];

    integers.forEach((integer) => {
        if (result.length === maxSize) {
            return;
        }
        result.push(integer);
    });

    return result;
};

console.log(LimitData(3, 5, 10, 24, 3, 6, 7, 8));


/// no 8 
const combineArr= (arr1: number[], arr2:number[]) => {
    return [...arr1, ... arr2];

};

console.log(combineArr([1,2,3], [4,5,6]));

// no 9

const findDuplicates= () => (arr:number[]) => {
    const duplicates: number [] = [];

    //loop setiap elemen dalam array 
    for(let i= 0; i < arr.length; i++){
        const currentNumber =arr[i];

        // cek apakah angka ini sudah muncuk sebelumnya dalam array
        let count: number =0;
        for(let j = 0; j < arr.length; j++) {
            if(arr[j] === currentNumber) {
                count++;
            }
        }
        
        //jika angka muncul lebih dari sekali tambahkan ke variable duplicate
        if(count > 1 && !duplicates.includes(currentNumber)){
            duplicates.push(currentNumber);
        }
    }
        return duplicates;
};

console.log(findDuplicates([1,2,2,2,3,3,4,5,5]));


// NO 10

const findDifference = (arr1: number[], arr2:number[]) => {
    const difference: number[] =[];

    for (const item of arr1) {
        if (!arr2.includes(item) && !difference.includes(item)) {
            difference.push(item);
        }
    }

    for (const item of arr2) {
        if(!arr1.includes(item) && !difference.includes(item)) {
            difference.push(item);
        }
    }
    return difference;
    
};

console.log(findDifference([1,2,3,4,5,],[3,4,5,6,7]));


// NO 11

const filterPrimitiveDataTypes= (arr:any[]) => {
    return arr.filter((value) => {
        return typeof value !== "object" || value === null;
    });
};

console.log(filterPrimitiveDataTypes([1, [], undefined, {}, "string", {}, []]));


// No 12
const sumDuplicatesValues= (arr:number[]) => {
    const seen: number[] = [];
    const duplicate: number[]= [];
    let result: number=  0;

    for (const value of arr){
        if (seen.includes(value)){
            if (!duplicate.includes(value)) {
                duplicate.push(value);
            }
        } else {
            seen.push(value);
        }
    }
    
    console.log(seen);
    console.log(duplicate);
    
    for (const value of arr) {
        if (duplicate.includes(value)){
            result =+ value;
        }
    }
    return result;
;}


console.log(sumDuplicatesValues([20,40,10,50,30,10,60,10,20]));








// NO 13

const rockPaperScissor = (player: "rock" | "paper" | "scissor") => {
    const choices: ("rock" | "paper" | "scissor")[] = [
      "rock",
      "paper",
      "scissor",
    ];
  
    const computer = choices[Math.floor(Math.random() * 2.9)];
  
    if (player === computer) {
      return { result: "Draw", computer, player };
    }
  
    if (
      (player === "rock" && computer === "scissor") ||
      (player === "scissor" && computer === "paper") ||
      (player === "paper" && computer === "rock")
    ) {
      return { result: "Win", computer, player };
    }
  
    return { result: "Lose", computer, player };
  };
  
  console.log(rockPaperScissor("paper"));

