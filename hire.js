var developperCost = 5;
var salesRepresentativeCost = 2;

function hireDevelopper() {
    if (prospectRessources.number < developperCost) {
        return;
    }
    developpers.add(1);
    prospectRessources.add(-developperCost);
}

function setHireDevelopperButtonText(text) {
    var button = document.getElementById("hire-developper-button");
    button.textContent = text;
}

function hireSalesRepresentative() {
    if (prospectRessources.number < salesRepresentativeCost) {
        return;
    }
    salesRepresentatives.add(1);
    prospectRessources.add(-salesRepresentativeCost);
}

function setHireSalesRepresentativeButtonText(text) {
    var button = document.getElementById("hire-sales-representative-button");
    button.textContent = text;
}

document.addEventListener("DOMContentLoaded", function() {
    setHireDevelopperButtonText("Hire (" + developperCost + ")");
    setHireSalesRepresentativeButtonText("Hire (" + salesRepresentativeCost + ")");
}, false);