const input = require('readline-sync');

function reverse(str) {
    let reversed = '';

    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }

    return reversed;
}

function makeLine(size){
    let output = "";
    for (let i = 0; i < size; i++){
        output += '#';
    }
    return output;
}
console.log(makeLine(5));

function makeSquare(size){
    //let output = "";
    //for (let i = 0; i < size; i++){
       // if (i === size -1){
         //   output += makeLine(size);
        //} else {
          //  output += `${makeLine(size)}\n`;
        //}
   // }
    return makeRectangle(size,size);
}

console.log(makeSquare(6));

function makeRectangle(width, height){
    let output = "";
    for (let i = 0; i < height; i++){
        output += `${makeLine(width)}\n`;
    }
    return output.slice(0, -1) //Why slice and how did he choose the (0, -1)
}

console.log(makeRectangle(8,3));

function makeDownwardStairs(height) {
    let output = "";
    for(let i =0; i < height; i++) {
        output += `${makeLine(i+1)}\n`;
    }
    return output.slice(0, 1);
}
console.log(makeDownwardStairs(5));

function makeSpaceLine(numSpaces, numChars){
    let spaces = "";
    for (let i = 0; i < numSpaces; i++){
        spaces += " ";
    }

    let chars = makeLine(numChars);
    return `${spaces}${chars}${spaces}`;
}
console.log(makeSpaceLine(3, 5));

function makeIsoscelesTriangle(height){
    output = "";
    for (let i = 0; i < height; i++){
        output += `${makeSpaceLine(height - i - 1, 2 * i + 1)}\n`;
    }
    return output.slice(0, -1);
} 
console.log(makeIsoscelesTriangle(3));

function makeDiamond(height){
    output = ""
    let topHalf = makeIsoscelesTriangle(height);
    let bottomHalf = reverse(topHalf);
    return `${topHalf}\n${bottomHalf}`;
}
console.log(makeDiamond(3));