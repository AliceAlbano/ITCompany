class Employees extends Resource {
    constructor(tag, annualSalary) {
        super(tag);
        this.annualSalary = annualSalary;
    }

    workForOneHour() {}

    getDailyCost() {
        return this.number * this.annualSalary / (workedDaysPerMonth * 12);
    }
}