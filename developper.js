var developpers = new Resource("developper-number");

function produceCode() {
    codeLines += developpers.number * delayMS / 1000;
    updateCodeLinesContent();
}

window.setInterval(function() {
    produceCode();
}, delayMS);