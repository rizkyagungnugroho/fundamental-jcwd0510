class Employee {
    constructor(type, hoursPerDay, totalDays) {
        this.type = type;
        this.hoursPerDay = hoursPerDay;
        this.totalDays = totalDays;
    }

    calculateSalary() {
        let hourlyRate = (this.type === "full-time")
            ? (this.hoursPerDay > 6 ? 75000 : 100000)
            : (this.hoursPerDay > 6 ? 30000 : 50000);
        
        return hourlyRate * this.hoursPerDay * this.totalDays;
    }
}

// Contoh penggunaan
const employee1 = new Employee("full-time", 7, 10);
console.log(`Total Salary: IDR ${employee1.calculateSalary()}`);

const employee2 = new Employee("part-time", 5, 15);
console.log(`Total Salary: IDR ${employee2.calculateSalary()}`);
