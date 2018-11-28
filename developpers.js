class Developpers extends Resource {
    constructor() {
        super("developper-number");
        this.annualSalary = 100000;
    }

    produceCode() {
        codeLines.add(this.number * delayMS / 1000);
    }

    getDailyCost() {
        return this.number * this.annualSalary / (workedDaysPerMonth * 12)
    }
}

const developpers = new Developpers();

window.setInterval(function() {
    developpers.produceCode();
}, delayMS);