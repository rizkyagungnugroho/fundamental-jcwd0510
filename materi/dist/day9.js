// DATA STRUCUTURE
// STACK -> LIFO (last in firt Out)
class Stack {
    constructor() {
        this.container = [];
        this.maxSize = 10;
    }
    isFull() {
        return this.container.length >= this.maxSize;
    }
    isEmpty() {
    }
    push(element) {
        if (this.isFull()) {
            return "container full";
        }
        this.container.push(element);
    }
    pop() {
        if (this.isEmpty()) {
            return "container empty";
        }
        this.container.pop();
    }
    showContainer() {
        return this.container;
    }
}
const stack = new Stack();
console.log(stack.showContainer());
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.push(5);
console.log(stack.showContainer());
stack.pop();
stack.pop();
console.log(stack.showContainer());
// QUEUE -> FIFO (First in First Out)
class QUEUE {
    constructor() {
        this.container = [];
    }
    enqueue(element) {
        this.container.push(element);
    }
    dequeue() {
        this.container.shift();
    }
    showContainer() {
        return this.container;
    }
}
const queue = new QUEUE();
console.log(queue.showContainer());
queue.enqueue(1);
queue.enqueue(2);
queue.enqueue(3);
queue.enqueue(4);
console.log(queue.showContainer());
queue.dequeue();
console.log(queue.showContainer());
queue.dequeue();
console.log(queue.showContainer());
queue.dequeue();
console.log(queue.showContainer());
// Set -> only unique values 
const fruits = ["banana", "apple", "mango", "apple"];
const mySet = new Set(fruits);
console.log(mySet);
// mengecek apakah di dalam set ada value yang kita cari
console.log(mySet.has("banana"));
console.log(Array.from(mySet));
console.log([...mySet]);
const temp = [];
for (const value of mySet) {
    temp.push(value);
}
console.log(temp);
// menghapus data 
mySet.delete("mango");
console.log(mySet);
// menghitung jumlah data yang ada
console.log(mySet.size);
// Hash Table / MAP =======================================
const myMap = new Map();
myMap.set("name", "john");
myMap.set(123, 9000);
const objek = { addres: "jakarta" };
myMap.set(objek, 9000);
const fn = () => { };
myMap.set(fn, "ini adalah function");
console.log(myMap.get("name"));
console.log(myMap.get(123));
console.log(myMap.get(fn));
console.log(myMap.get(objek));
for (const [key, value] of myMap) {
    console.log(`${key} = ${value}`);
}
console.log(myMap.size);
console.log(myMap.has(123));
console.log(myMap.delete(fn));
console.log(myMap.has(fn));
export {};
