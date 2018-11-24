var daysWorked = new Resource("days-worked");
var hourDurationMS = 1000;
var workedHoursPerDay = 8;

window.setInterval(function() {
    daysWorked.add(1);
}, hourDurationMS * workedHoursPerDay); 