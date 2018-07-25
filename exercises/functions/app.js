// Write a function that accepts two numbers as parameters, and returns the sum.

// Write a function that accepts three numbers as parameters, and returns the largest of those numbers.

// Write a function that accepts one number as a parameter, and returns whether that number is even or odd. (Return the string "even" or "odd");

// Write a function that accepts a string as a parameter. If the length of the string is less than or equal to twenty characters long, return the string concatenated with itself (string + string). If the string is more than twenty characters long, return the first half of the string.

function adding(a, b){
    return a+b;
}

function biggest(a, b, c){
    var bige = 0;
    if(a>bige){bige=a;}
    if(b>bige){bige=b;}
    if(c>bige){bige=c;}
    return bige;
}

function evenOdd(a){
    if(a%2===0){return "even";}
    else if(a%2!==0){return "odd";}
    else{return "odd";}
}

function strger(str){
    if(str.length<20){
        return str+=str;
    } else{
        return str.slice(Mth.round(str.length/2);
    }
}