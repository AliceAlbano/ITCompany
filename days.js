var daysWorked = new Resource("days-worked");
var hourDurationMS = 1000;
var workedHoursPerDay = 8;
var workedDaysPerMonth = 20;

window.setInterval(function() {
    daysWorked.add(1);
    payWages();
}, hourDurationMS * workedHoursPerDay);

function payWages() {
    money.add(-developpers.getDailyCost());
    money.add(-salesRepresentatives.getDailyCost());
}