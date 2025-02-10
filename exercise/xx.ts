class Train {
    passengers:string;
    maxCapacity:number;
    constructor() {
        this.passengers = "masinis";
        this.maxCapacity = 10;
    }
    isFull(){
        return this.passengers.length >= this.maxCapacity;
    }
    isEmpty(){
        return this.passengers.length === 1;
    }

    showPassager(){
        return{
            passagers:this.showPassager,
            seatkosong: this.maxCapacity - this.passengers.length
        }
    }
    passengersIn(){
        
    }
}    




const result= {
    datas: [
        {name:"joko",nik: "1234", gender: "male"},
        {name:"budi",nik: "12345", gender: male"},
        {name:"joko",nik: "1234", gender: "male"},
    ]
    
}