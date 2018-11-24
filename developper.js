var developpers = new Resource("developper-number");

function produceCode() {
    codeLines.add(developpers.number * delayMS / 1000);
}

window.setInterval(function() {
    produceCode();
}, delayMS);