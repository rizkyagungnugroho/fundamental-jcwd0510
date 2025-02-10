


class Employee {
    name:string;
    gender:"male" | "female";
    workingHours: number;

    constructor(name:string, gender:"male" | "female"){
        this.name=name;
        this.gender=gender;
        this.workingHours= 0;
    }
    formatPrice(price: number) {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0,
        }).format(price);
    }
}

class FullTimeEmployee extends Employee {
    hourlyRate:number;
    extraHourlyRate: number;
    
    constructor(name:string, gender:"male" | "female") {
        super(name,gender);
        this.hourlyRate= 100_000;
        this.extraHourlyRate= 50_000;
    }

    addWorkingHours(hours:number) {
        this.workingHours =+ hours;
    }

    calculateSalery() {
        if(this.workingHours <=6) {
            return{
                name:   this.name,
                gender: this.gender,
                status: "full time",
                hours:  this.workingHours,
                totalSalary: this.formatPrice(this.workingHours * this.hourlyRate),
            };
        } else {
            const regularHours= 6;
            const extraHours= this.workingHours - regularHours;

            return{
                name:   this.name,
                gender: this.gender,
                status: "full time",
                hours:  this.workingHours,
                totalSalaryRegular:this.formatPrice(regularHours * this.hourlyRate),
                totalSalaryExtra: this.formatPrice(extraHours * this.extraHourlyRate),
                total: this.formatPrice(regularHours * this.hourlyRate + extraHours * this.extraHourlyRate),
            };
        }
    }
    }


class PartTimeEmployee extends Employee {
    hourlyRate:number;
    extraHourlyRate: number;
    
    constructor(name:string, gender:"male" | "female") {
        super(name,gender);

        this.hourlyRate= 100_000;
        this.extraHourlyRate= 50_000;
    }
    addWorkingHours(hours:number) {
        this.workingHours =+ hours;
    }
    calculateSalery() {
        if(this.workingHours <=6) {
            return{
                name:   this.name,
                gender: this.gender,
                status: "full time",
                hours:  this.workingHours,
                totalSalary: this.formatPrice(this.workingHours * this.hourlyRate),
            };
        } else {
            const regularHours= 6;
            const extraHours= this.workingHours - regularHours;

            return{
                name:   this.name,
                gender: this.gender,
                status: "full time",
                hours:  this.workingHours,
                totalSalaryRegular:this.formatPrice(regularHours * this.hourlyRate),
                totalSalaryExtra: this.formatPrice(extraHours * this.extraHourlyRate),
                total: this.formatPrice(regularHours * this.hourlyRate + extraHours * this.extraHourlyRate),
            };
        }
    }
}

const Employee1= new Employee ("jordi", "male");

Employee1



// soal 2

class Player{
    name:string;
    health: number;
    power: number;

    constructor(name:string) {
        this.name=name;
        this.health=100;
        this.power= 10;
    }
    damage(power:number) {
        this.health -= power;
    }


    useItem(item: {health: number;  power: number}) {
        this.health += item.health;
        this.power =+ item.power;
    }


    showStatus(){
        return `${this.name} -> health: ${this.health} | power ${this.power}`;
    }
}

class ShootingGame {
    player1: Player;
    player2: Player;

    constructor(player1: Player, player2:Player) {
        this.player1= player1;
        this.player2= player2;
    }
    
    getRandomItem(){
    /* 
    power =10 , health = 0
    power =0, health = 10
    power = 10, health = 10
    power = 0, health = 0
    */
            const health = Math.random() < 0.5 ? 0 : 10;
            const power = Math.random() <0.5 ? 0 : 10;
            return {health, power};
    }

    start(){
        while(this.player1.health > 0 && this.player2.health > 0 ){
           console.log(this.player1.showStatus());
           console.log(this.player2.showStatus());

           //get random item
           const item1= this.getRandomItem();
           const item2= this.getRandomItem();

           //use random item
           this.player1.useItem(item1);
           this.player2.useItem(item2);

            // hit other player
           this.player1.damage(this.player2.power);
           this.player2.damage(this.player1.power);

           console.log(this.player1.showStatus());
           console.log(this.player2.showStatus());  
        }
        if (this.player1.health <= 0) {
            return`${this.player2.name} WIN`;
        } else {
            return `${this.player1.name} WIN`;
        }
    }   
}

const aceng= new Player("aceng");
const udin= new Player("udin");
const game= new ShootingGame(aceng, udin);
console.log(game.start());
