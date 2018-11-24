var codeLines = 0;
var featureSize = 100;
var featurePrice = 100;

function sellFeature() {
    if (codeLines < featureSize) {
        return;
    }
    money += featurePrice;
    var span = document.getElementById("money-value");
    span.textContent = money;

    codeLines -= featureSize;
    updateCodeLinesContent();
}

function updateCodeLinesContent() {
    var span = document.getElementById("code-lines-value");
    span.textContent = Math.floor(codeLines);
}