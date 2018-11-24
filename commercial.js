var salesRepresentatives = new Resource("sales-representative-number");
var salesRepresentativeSalary = 120000;
var eachDay = workedHoursPerDay * hourDurationMS;

window.setInterval(function() {
    sellFeature();
}, eachDay);