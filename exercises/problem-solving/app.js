// Write a function that takes an array of numbers and returns the largest (without using Math.max())

function largest(arr){
    var big = arr[0];
    for(var i=1;i<arr.length;i++){
        if(arr[i]>big){big=arr[i];}
    }
    console.log(big)
    return big;
}

largest([3, 5, 2, 8, 1]) // => 8  


// Write a function that takes an array of words and a character and return each word that has that letter present.

function lettersWithStrings(arr, char){
    console.log(arr + " "+ char);
    var list=[]
    for(var i=0;i<arr.length;i++){
        var temp ="";
        temp=arr[i];
        for(var j=0;j<temp.length;j++){
            if(temp[j]===char){list.push(temp); console.log("adding")}
        }
    }
    console.log(list);
    return list;
}

lettersWithStrings(["#3", "$$$", "C%4!", "Hey!"], "!") // => ["C%4!", "Hey!"]  


// Write a function that takes a num1 and num2 and returns whether num1 is divisible by num2.

function isDivisible(a,b){
    if(a%b===0){console.log("true"); return true;}
    else{console.log("false"); return false;}
}

isDivisible(4, 2) // => true  
isDivisible(9, 3) // => true  
isDivisible(15, 4) // => false  