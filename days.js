var daysWorked = new Resource("days-worked");
var hourDurationMS = 1000;
var workedHoursPerDay = 8;
var workedDaysPerMonth = 20;

window.setInterval(function() {
    daysWorked.add(1);
    payWages();
}, hourDurationMS * workedHoursPerDay);

function payWages() {
    money.add(-developpers.number * developperSalary / (workedDaysPerMonth * 12));
    money.add(-salesRepresentatives.number * salesRepresentativeSalary / (workedDaysPerMonth * 12));
}