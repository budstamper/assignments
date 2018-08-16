function findMissingNo(arr){
    //Find and return the missing number(s)
    // sort/remove dups
    var arr2 = arr.slice() // slice makes copy of array before sorting it
  .sort(function(a,b){
    return a > b;
  })
  .reduce(function(a,b){
    if (a.slice(-1)[0] !== b) a.push(b); // slice(-1)[0] means last item in array without removing it (like .pop())
    return a;
  },[]); // this empty array becomes the starting value for a

  console.log(arr2)

    var missingNums = []
    for(var i = arr2[0], j = 0; i < arr2[arr2.length-1]; i++, j++){
        var x = arr2[0]+j
        if(arr2[j] !== x){
            // console.log("here", arr2[j], j, x, missingNums)
            arr2.splice(j, 0, x)
            missingNums.push(x)
        }
    }
    return missingNums
}

var arr = [3,5,4,8,1,2,7]

var output = findMissingNo(arr)
console.log(output) //Output: 6

arr =[2,1,3,5] 
var output = findMissingNo(arr)
console.log(output) //Output: 4

var arr3 =[12, 10, 9] 
var output = findMissingNo(arr3)
console.log(output)//Output: 11

arr =[-3,0,-2,3,2,-1] 
var output = findMissingNo(arr)
console.log(output)//Output: 1