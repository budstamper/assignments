console.log("I am NUTRON, AI.\n")

var ask = require('readline-sync');

var upper = ask.question("Enter a string to uppercase:");

upper2= upper.toUpperCase();

console.log(upper2);

var howMany = ask.question("Enter a string to find how many letters it has: ");

var mLength = howMany.length;

console.log(mLength);


var str1=ask.question('Enter string one to concatenate: ');
var str2=ask.question('Enter second string to concatenate: ');

var str3=str1+str2;

console.log(str3);

var lastHalf=ask.question('Enter a string to get the last half: ');

lastHalf2=lastHalf.slice(Math.floor(lastHalf.length/2),lastHalf.length);

console.log(lastHalf2);

var numStr=ask.question('Enter a number to cut from: ');

lastHalf=lastHalf.slice(numStr,lastHalf.length);

console.log(lastHalf);
