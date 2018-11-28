class Developpers extends Employees {
    constructor() {
        super("developper-number", 100000);
    }

    workForOneHour() {
        codeLines.add(this.number * delayMS / 1000);
    }
}

const developpers = new Developpers();

window.setInterval(function() {
    developpers.workForOneHour();
}, delayMS);