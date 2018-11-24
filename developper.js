var developpers = new Resource("developper-number");
var developperSalary = 100000;

function produceCode() {
    codeLines.add(developpers.number * delayMS / 1000);
}

window.setInterval(function() {
    produceCode();
}, delayMS);