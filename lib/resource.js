class Resource {
    constructor(tag) {
        this.tag = tag;
        this.number = 0;
    }

    add (value) {
        this.number += value;
        this.updateUI();
    }

    updateUI() {
        var element = document.getElementById(this.tag);
        element.textContent = Math.floor(this.number);
    } 
}