//Define three variables for the LaunchCode shuttle - one for the starting fuel level, another for the number of astronauts aboard, and the third for the altitude the shuttle reaches.
const input = require('readline-sync');
let fuelLevel = input.question("Enter a value for the starting fuel level of the space craft: ");
fuelLevel = Number(fuelLevel);
let astronautsAboard = input.question("How many astronauts are aboard?: ");
astronautsAboard = Number(astronautsAboard);
let shuttleAltitude = 0;

/*Exercise #4: Construct while loops to do the following:
  a. Query the user for the starting fuel level. Validate that the user enters a positive, integer value greater than 5000 but less than 30000. */

  while (fuelLevel <= 5000 || fuelLevel > 30000 || isNaN(fuelLevel)) {
  fuelLevel = Number(input.question(`Sorry, ${fuelLevel} is not a valid fuel level input. Please enter a fuel level greater than 5000 and les than 30000: `));
}




//b. Use a second loop to query the user for the number of astronauts (up to a maximum of 7). Validate the entry.
while (astronautsAboard < 1 || astronautsAboard > 7 || isNaN(astronautsAboard)) {
  fuelLevel = Number(input.question(`Sorry, ${astronautsAboard} is not a valid amount of astronauts. Please enter a number between 1 and 7: `));
}


  
  
  
//c. Use a final loop to monitor the fuel status and the altitude of the shuttle. Each iteration, decrease the fuel level by 100 units for each astronaut aboard. Also, increase the altitude by 50 kilometers.
while (fuelLevel-100*astronautsAboard >= 0) {
  shuttleAltitude += 50;
  fuelLevel -= 100*astronautsAboard;
  }


/*Exercise #5: Output the result with the phrase, “The shuttle gained an altitude of ___ km.”

If the altitude is 2000 km or higher, add “Orbit achieved!” Otherwise add, “Failed to reach orbit.”*/
 
let output = console.log(`The shuttle gained an altitude of ${shuttleAltitude} km.`);
if (shuttleAltitude >= 2000) {
  output += console.log("Orbit acheived!");
} else {
  output += console.log("Failed to reach orbit.");
}