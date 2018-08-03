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
        return str.slice(Math.round(str.length/2));
    }
}

//prints fibonnaci sequence up to n

function fib(n){
    var sum = new Array(n);
    if(n===1){console.log("1");return 1;}
    else if(n===2) {console.log("1 and 1"); return 2;}
    else{
        console.log('1');
        console.log('1');
    var sum1=0;
    sum[0]=1;
    sum[1]=1;
    for(var i=2;i<=n;i++){
        
        sum[i]=sum[i-1]+sum[i-2];
        sum1=sum1+sum[i];
        console.log(sum[i]);
    }
    return sum1;
}}

//the quadratic equation

function quadEq(a, b, c){
    var arr = [((b*-1)-(Math.sqrt((b*b)-(4*a*c))))/(2*a), ((b*-1)+(Math.sqrt((b*b)-(4*a*c))))/(2*a)]
    return arr;
}

//find repeated characters in string

function howManyRepeated(str){
     str = str.toLowerCase();
     var arr = str.split("");
     arr.sort()
     var mostFreq = "";
     var rCount = 0;
     var mCount = 0;
     var currentLetter = "";

     for(var i =0;i<arr.length;i++){
         if(currentLetter !== arr[i]){rCount=0; currentLetter=arr[i];}
         rCount++;
        currentLetter=arr[i];
        if(rCount>=mCount){
            mCount=rCount;
            mostFreq=currentLetter;
        }
     }
     console.log(mostFreq);
     return mostFreq;
    
 }

 howManyRepeated("rrtttyyyyaaaaaaadcccccccccc");
