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
let maximumFuelTemp = -150;
let fuelLevel = 100;
let weatherStatus = 'Clear';
let preparedForLiftOff = true;
// add logic below to verify total number of astronauts for shuttle launch does not exceed 7
let validCount = false;
if (astronautCount <= 7){
    validCount = true
}
// add logic below to verify all astronauts are ready
let validStatus = false;
if (astronautStatus === 'ready'){
    validStatus = true;
}
// add logic below to verify the total mass does not exceed the maximum limit of 850000
let validMass = false;
if (maximumMassLimit <= 850000){
    validMass = true;
}
// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300
let validTemp = false;
if (fuelTempCelsius >= -300 && fuelTempCelsius <= -150){
    validTemp = true;
}
// add logic below to verify the fuel level is at 100%
let validFuelLevel = false;
if (fuelLevel = 100){
    validFuelLevel = true;
}
// add logic below to verify the weather status is clear
let safeWeather = false;
if (weatherStatus = 'Clear'){
    safeWeather = true;
}
// Verify shuttle launch can proceed based on above conditions
if (validCount && validStatus && validMass && validTemp && validFuelLevel && safeWeather){
console.log('All systems are a go! Initiating space shuttle launch sequence.');
console.log('---------------------------------------------------------------');
console.log('Date: ' + date);
console.log('Time: ' + time);
console.log('Astronaut Count: ' + astronautCount);
console.log('Crew Mass: ' + crewMassKg);
console.log('Fuel Mass: ' + fuelMassKg);
console.log('Shuttle Mass: ' + shuttleMassKg);
console.log('Total Mass: ' + totalMassKg);
console.log('Fuel Temp Celsius:' + fuelTempCelsius);
console.log('Weather Status: ' + weatherStatus);
console.log('-----------------------------------------------------------------');
console.log('Have a safe trip astronauts!')
} else {
    console.log('Not safe for lift off.  One ore more conditions not met. Double check all variables.')
}