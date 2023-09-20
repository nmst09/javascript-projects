const input = require('readline-sync');
let str = input.question("Enter a word: ");
let numsToSlice = Number(input.question("Please enter a number of characters to slice (minimum 3): "));
let frontStr = "";
let backStr = "";
let newString = "";
//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
//Use a template literal to print the original and modified string in a descriptive phrase.
//console.log(`The string, ${str} has been converted to ${newString}.`);
//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
//let userAnswer = input.question('How many letters need to be relocated?');
//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.

if (str.length < 4) {
    console.log(`Your word ${str} is too short, so we changed it LaunchCode.`);
    str = "LaunchCode";
}

if (numsToSlice < 3 || numsToSlice > str.length) {
    console.log(`The number of letters you want to slice will not run smoothly, so we are changing it to 3.`);
    numsToSlice = 3;
}

frontStr = str.slice(0, numsToSlice);
backStr = str.slice(numsToSlice);
newString = backStr + frontStr;
console.log(`Your string ${str} has been converted to ${newString}.`);