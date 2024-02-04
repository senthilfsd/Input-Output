/* Write a code to get the input in the given format and print the output in the given format

Input Description:
A single line contains a string.

Output Description:
Print the characters in a string separated by space.

Sample Input :
guvi
Sample Output :
g u v i */

//Sollution............//
// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
  //Method-1
  //console.log(userInput[0].split('').join(' '));

  //Another method-2 with separate of split and join...//
  const arr = userInput[0].split();
  console.log(arr.join(''));


  //end-here
});