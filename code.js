var codeLines = new Resource("code-lines-value");
var featureSize = 80;
var featurePrice = 5000;

function sellFeature(numberToSell) {
    var readyToSell = Math.floor(codeLines.number / featureSize);
    var numberActuallySold = Math.min(readyToSell, numberToSell);
    money.add(featurePrice * numberActuallySold);
    codeLines.add (-featureSize * numberActuallySold);
}