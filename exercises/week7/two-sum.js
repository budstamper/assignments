// Given an array of integers and a target integer, return the indices of the FIRST two numbers which add up to the target.

// Assume the same element may not be used twice.

var x = twoSum([1,2,3], 4);
console.log(x)
//returns [0, 2] because 1 + 3 equals 4

function twoSum(arr, num){
    for(var i = 0; i < arr.length; i++){
        for(var j = 0; j < arr.length; j++){
            if(j !== i){
                if(arr[i]+arr[j] === num){
                  return [i, j]
                }
            }
        }
        return `No two values equal ${num}`
    }
}