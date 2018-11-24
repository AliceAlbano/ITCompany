var developperNumber = 0;
var developperCost = 5;

function hireDevelopper() {
    if (prospectRessources < developperCost) {
        return
    }
    developperNumber++;
    var span = document.getElementById("developper-number");
    span.textContent = developperNumber;
    addProspectRessource(-developperCost);
}

function setHireDevelopperButtonText(text) {
    var button = document.getElementById("hire-developper-button");
    button.textContent = text;
}

document.addEventListener("DOMContentLoaded", function() {
    setHireDevelopperButtonText("Hire (" + developperCost + ")");
}, false);