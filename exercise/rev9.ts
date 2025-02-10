class BankQueue{
    queue: string[];

    constructor() {
        this.queue= [];
    }

    private isEmpty(){
        return this.queue.length === 0;
    }

    enqueue(costumer: string){
        this.queue.push(costumer);
        return "enqueue success";
    }
    dequeue(){
        if(this.isEmpty()) {
            return "antrian kosong";
        }
        return "dequeue succes";
    }
    size(){
        return `Jumlah antrian ${this.queue.length}`;
    }
}

const mandiri =new BankQueue();

console.log(mandiri.enqueue("jack"));
console.log(mandiri.enqueue("agus"));
console.log(mandiri.queue);
console.log(mandiri.dequeue());




// no 2

class Train{
    container:string[];
    maxSize:number;

    constructor(maxSize: number=10){
        this.container =["masinis"];
        this.maxSize= maxSize;
    }

    private isFull(){
        return this.container.length >= this.maxSize;
    }
    
    private isEmpty(){
        return this.container.length === 1;
    }

    passengerIn(name:string) {
        if(this.isFull()) {
            return "penuh cik";
        }

      if(this.container.includes(name)){
        return "penumpang sudah di dalam kereta";
      }
    }

    passengerOut(name:string){
        if(name === "masinis"){
            return "Masinis gak boleh turun";
        }
        if(this.isEmpty()){
            return"kereta masih kosong";
            
        }
        const index= this.container.indexOf(name);


        if(index === -1){
            return "penumpang tidak ditemukan";
        }

        this.container.splice(index, 1);
        return `${name} berhasil dikeluarkan`;
    }

    showPassanger(){
        return{
            passenger: this.container
            .filter((value) => value !== "masinis")
            .join(" , "),
            remainingSeat: this.maxSize -this.container.length,
        };

    }
}

const taksaka = new Train();
console.log(taksaka.passengerIn("joko"));
