//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

//1) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.
let element1 = ['hydrogen', 'H', 1.008];
let element2 = ['helium', 'He', 4.003];
let element26 = ['iron', 'Fe', 55.85];
//2) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.
let table = [];
table.push(element1);
table.push(element2);
table.push(element26);
console.log(table);
//3) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).
console.log(table[1]);
console.log(table[0][1]);
//4) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.
console.log(table[0][2]);
console.log(table[1][0]);
console.log(table[2][1]);
//5) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the name/symbol/mass values. Experiment! Create a 3-dimensional array and print out one entry from each level in the array.
let food = []; 
let breakfast = [1, 'morning', 'eggs'];
let lunch = [2, 'midday', 'sandwich'];
let dinner = [3, 'evening', 'pizza'];
let eggTypes = ['scrambled', 'overeasy', 'poached'];
breakfast.push(eggTypes);
let sandTypes = ['turkey', 'tuna', 'blt'];
lunch.push(sandTypes);
let pizzaTypes = ['cheese', 'pepperoni', 'sardines'];
dinner.push(pizzaTypes);
food.push(breakfast);
food.push(lunch);
food.push(dinner);
console.log(food [0]);
console.log(food [1][1]);
console.log(food [0][1][1]);