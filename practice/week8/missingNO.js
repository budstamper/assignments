//find one missing number in array

function miss(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[0]+i !== arr[i]){
            return arr[0]+i
        }
    }
}

var m = [1,2,3,4,6,7,8,9,10]
var x = miss(m)
console.log(x) // => 5
m = [12,13,14,15,16,18,19]
x = miss(m)
console.log(x) // => 17