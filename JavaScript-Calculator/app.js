var ask = require('readline-sync');

var num1 = Number(ask.question('Enter your first number: '));
var num2= Number(ask.question('Enter your second number: '));

var str = ask.question('Please enter the operation to perform: add, sub, mul, div: ');

function moper(n1, n2, s){
    if(s==="add"){return n1+n2;}
    else if(s==="sub"){return n1-n2;}
    else if(s==="mul"){return n1*n2;}
    else if(s==="div"){return n1/n2;}
    else{return "Somethings not right..."}
}

console.log("the result is: " + moper(num1,num2,str));