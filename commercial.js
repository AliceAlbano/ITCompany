class SalesRepresentatives extends Employees {
    constructor() {
        super("sales-representative-number", 120000);
    }

    workForOneHour() {
    }
}

var salesRepresentatives = new SalesRepresentatives();

var eachDay = workedHoursPerDay * hourDurationMS;

window.setInterval(function() {
    sellFeature(salesRepresentatives.number);
}, eachDay);