class BankQueue {
    constructor() {
        this.queue = [];
    }

    enqueue(customer) {
        this.queue.push(customer);
        return "customer added";
    }

    dequeue() {
        if (this.queue.length === 0) {
            return "queue is empty";
        }
        return this.queue.shift();
    }

    size() {
        return this.queue.length;
    }

    show() {
        return this.queue.length > 0 ? this.queue : "queue is empty";
    }
}

// Example usage
const bankQueue = new BankQueue();
bankQueue.enqueue("Customer 1");
bankQueue.enqueue("Customer 2");
bankQueue.enqueue("customer3");
bankQueue.enqueue("costumer 4");
bankQueue.dequeue();
console.log(bankQueue.show());
bankQueue.dequeue(); 
console.log(bankQueue.show());
bankQueue.dequeue();
console.log(bankQueue.show());
bankQueue.dequeue();
console.log(bankQueue.show());
console.log(bankQueue.size()); 


    //soal 2


    class Train {
        constructor() {
            this.passengers = ["masinis"];
            this.maxCapacity = 10;
        }
    
        isFull() {
            return this.passengers.length >= this.maxCapacity;
        }
    
        isEmpty() {
            return this.passengers.length === 1; // Only 'masinis' remains
        }
    
        showPassenger() {
            return {
                passengers: [...this.passengers],
                availableSeats: this.maxCapacity - this.passengers.length
            };
        }
    
        passengerIn(name) {
            if (this.passengers.includes(name)) {
                return "passenger already exists";
            }
            if (this.isFull()) {
                return "train full";
            }
            this.passengers.push(name);
            return "add passenger success";
        }
    
        passengerOut(name) {
            if (name === "masinis") {
                return "cannot remove masinis";
            }
            if (this.isEmpty()) {
                return "train empty";
            }
            const index = this.passengers.indexOf(name);
            if (index === -1) {
                return "passenger not found";
            }
            this.passengers.splice(index, 1);
            return "remove passenger success";
        }
    }
    
    // Example usage
    const train = new Train();
    console.log(train.passengerIn("Alice")); 
    console.log(train.passengerIn("Bob"));  
    console.log(train.passengerOut("Alice")); 
    console.log(train.showPassenger());
    