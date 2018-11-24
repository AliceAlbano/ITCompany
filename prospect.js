var prospectRessources = 0;

function prospect() {
    prospectRessources++;
    var span = document.getElementById("prospect-value");
    span.textContent = prospectRessources;
}