var codeLines = new Resource("code-lines-value");
var featureSize = 100;
var featurePrice = 100;

function sellFeature() {
    if (codeLines.number < featureSize) {
        return;
    }
    money.add(featurePrice);
    codeLines.add (-featureSize);
}