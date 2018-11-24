var developperNumber = 0;

function produceCode() {
    codeLines += developperNumber;
    updateCodeLinesContent();
}

window.setInterval(function() {
    produceCode();
}, 1000);