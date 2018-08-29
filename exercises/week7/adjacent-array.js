// Given an array of strings, find the 3 adjacent elements with the longest combined length. Return them in the form of an array.

// Example:

// For const inputArray = ["this", "is", "an", "array"], the output of combined(inputArray) should 
// return ["is", "an", "array"] because they have the longest combined length of any 3 adjacent elements.

const inputArray = ["this", "is", "an", "array"]

function adjacent3(arr){
    var high = arr[0].length+arr[1].length+arr[2].length
    var arrCounter = 1
    for(var i = 2; i < arr.length-1; i++){
        if(arr[i-1].length + arr[i].length + arr[i+1].length > high){
            high = arr[i-1].length + arr[i].length + arr[i+1].length
            arrCounter = i
        }
    }
    return [ arr[arrCounter-1], arr[arrCounter], arr[arrCounter+1] ]
}

var x = adjacent3(inputArray)
console.log(x) // => ["is", "an", "array"]