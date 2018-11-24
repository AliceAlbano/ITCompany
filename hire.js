var developperNumber = 0;

function hireDevelopper() {
    if (prospectRessources < 5) {
        return
    }
    developperNumber++;
    var span = document.getElementById("developper-number");
    span.textContent = developperNumber;
    addProspectRessource(-5);
}