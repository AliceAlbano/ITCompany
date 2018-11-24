var developperNumber = 0;

function produceCode() {
    codeLines += developperNumber * delayMS / 1000;
    updateCodeLinesContent();
}

window.setInterval(function() {
    produceCode();
}, delayMS);