class Money extends Resource {
    constructor(tag) {
        super(tag);
        this.number = 10000;
    }
}

var money = new Money("money-money-money");

document.addEventListener("DOMContentLoaded", function() {
    money.updateUI();
}, false);