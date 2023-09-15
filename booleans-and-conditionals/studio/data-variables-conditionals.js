// Initialize Variables below
let date = 'Monday 2019-03-18';
let time = '10:05:34 AM';
let astronautCount = 7;
let astronautStatus = 'ready';
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let macimumFuelTemp = -150;
let fuelLevel = '100%';
let weatherStatus = 'Clear';
let preparedForLiftOff = true;
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
if (astronautCount <= 7){
   preparedForLiftOff = true 
} else {
    preparedForLiftOff = false
}
// add logic below to verify all astronauts are ready
if (astronautStatus = 'ready'){
    preparedForLiftOff = true
} else {
    preparedForLiftOff = false
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
if (totalMassKg <= 850000){
    preparedForLiftOff = true
} else {
    preparedForLiftOff = false
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
if (fuelTempCelsius < -150 || fuelTempCelsius > -300){
    preparedForLiftOff = false
} else {
    preparedForLiftOff = true
}
// add logic below to verify the fuel level is at 100%
if (fuelLevel = '100%'){
    preparedForLiftOff = true
} else {
    preparedForLiftOff = false
}
// add logic below to verify the weather status is clear
if (weatherStatus = 'Clear'){
    preparedForLiftOff = true
} else {
    preparedForLiftOff = false
}
// Verify shuttle launch can proceed based on above conditions
console.log('date: ' + date);
console.log('time: ' + time);
console.log('astronaut count: ' + astronautCount);
console.log('crew mass: ' + crewMassKg);
console.log('fuel mass: ' + fuelMassKg);
console.log('shuttle mass: ' + shuttleMassKg);
console.log('total mass: ' + totalMassKg);
console.log('fuel temp celsius:' + fuelTempCelsius);
console.log('weather status:' + weatherStatus);