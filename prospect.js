var prospectRessources = 0;

function prospect() {
    addProspectRessource(1);
}

function addProspectRessource(value) {
    prospectRessources += value;
    var span = document.getElementById("prospect-value");
    span.textContent = prospectRessources;
}