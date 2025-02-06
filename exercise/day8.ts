class Employee {
    // name:string;
    // workingHours:[];
    constructor(public name: string, public workingHours: number) {
      this.name = name;
      this.workingHours = workingHours;
    }
  }
  
  class FullTimeEmployee extends Employee {
    constructor(name: string, workingHours: number) {
      super(name, workingHours);
    }
  
    calculateSalary() {
      let total = 0;
      let total2 = 0;
      let salary = 100_000;
      let salar2 = 75_000;
  
      if (this.workingHours === 6) {
        total += this.workingHours * 100_000;
      } else if (this.workingHours > 6) {
        total2 = salary * 6;
        total += (this.workingHours - 6) * salar2;
        total += total2;
      } else {
        return "Jam Kerja anda Kurang, Gaji Dipotong";
      }
      return total;
    }
  }
  
  const FullAndi = new FullTimeEmployee("budi", 6);
  console.log(FullAndi.calculateSalary());
  
  class PartTimeEmployee extends Employee {
    constructor(name: string, workingHours: number) {
      super(name, workingHours);
    }
  
    claculateSalary() {
      let total = 0;
      let total2 = 0;
      let salary = 50_000;
      let salar2 = 30_000;
  
      if (this.workingHours === 6) {
        total += this.workingHours * 50_000;
      } else if (this.workingHours > 6) {
        total2 = salary * 6;
        total += (this.workingHours - 6) * salar2;
        total += total2;
      } else {
        return "Jam Kerja anda Kurang, Gaji Dipotong";
      }
      return total;
    }
  }
  
  const partAndi = new PartTimeEmployee("Andi", 8);
  console.log(partAndi.claculateSalary());


// 2 
class Player {
    name: string;
    health: number;
    power: number;

    constructor(name: string, health: number = 100, power: number = 10) {
        this.name = name;
        this.health = health;
        this.power = power;
    }

    damage(power: number) { 
        this.health -= power;
        if (this.health < 0) this.health = 0;
    }

    useItem(item: { health: number; power: number }) {
        this.health += item.health;
        this.power += item.power;
    }

    showStatus() {
        console.log(`${this.name} (Health => ${this.health}, Power => ${this.power})`);
    }
}

class ShootingGame {
    player1: Player;
    player2: Player;

    constructor(player1: Player, player2: Player) {
        this.player1 = player1;
        this.player2 = player2;
    }
     
    getRandomItem(healthProb = 0.5, powerProb = 0.5) {
        const health = Math.random() > healthProb ? 10 : 0;
        const power = Math.random() > powerProb ? 10 : 0;
        return { health, power };
    }

    start() {
        console.log("Starting the shooting game...");
        while (this.player1.health > 0 && this.player2.health > 0) {
            this.player1.showStatus();
            this.player2.showStatus();

            const item1 = this.getRandomItem();
            const item2 = this.getRandomItem();

            this.player1.useItem(item1);
            this.player2.useItem(item2);

            this.player1.damage(this.player2.power);
            this.player2.damage(this.player1.power);

            console.log("After shooting:");
            this.player1.showStatus();
            this.player2.showStatus();
        }

        const winner = this.player1.health > 0 ? this.player1.name : this.player2.name;
        console.log(`The winner is ${winner}!`);
    }
}

const player1 = new Player("Player 1");
const player2 = new Player("Player 2");
const game = new ShootingGame(player1, player2);
game.start();