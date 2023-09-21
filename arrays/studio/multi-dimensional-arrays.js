const input = require('readline-sync');

let food = "water bottles,meal packs,snacks,chocolate";
let equipment = "space suits,jet packs,tool belts,thermal detonators";
let pets = "parrots,cats,moose,alien eggs";
let sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let foodArray = food.split(",").sort();
let equipmentArray = equipment.split(",").sort();
let petsArray = pets.split(",").sort();
let sleepAidsArray = sleepAids.split(",").sort();
//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHoldArr = [foodArray, equipmentArray, petsArray, sleepAidsArray];
console.log(cargoHoldArr);
//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
let selectedCabinet = Number(input.question("Please select a cabinet from 0-3 in the cargo hold.: "));
let specificItem = input.question("Also select a particular item from your selected cabient.: ").toLowerCase();
//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (isNaN(selectedCabinet)) {
    console.log("Input not valid. Please try again.")
} else if (selectedCabinet < 0 || selectedCabinet > 3) {
    console.log(`Sorry your selected cabinet, ${selectedCabinet}, is not valid please try again.`)
} else {
    console.log(`The contents of cabinet ${selectedCabinet} are as follows:
    ${cargoHoldArr[selectedCabinet]}`);

    if (cargoHoldArr[selectedCabinet].includes(specificItem)) {
        console.log(`Cabinet ${selectedCabinet} DOES contain ${specificItem}.`);
      } else {
        console.log(`Cabinet ${selectedCabinet} DOES NOT contain ${specificItem}.`);
      }
}

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
