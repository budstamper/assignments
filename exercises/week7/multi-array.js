// Given a multi-dimensional array containing only primitive data types (strings, booleans, and numbers), 
// write a function that returns whether EACH element within each subarray belongs to the same data type.

function checkTypes(arr) {
    var y = true
    var x = typeof arr[0][0]
    for(var i = 0; i<arr.length; i++){
        for(var j = 0; j<arr[i].length; j++){
            if(x !== typeof arr[i][j] && y === true){
                return false
            }
        }
    }
    return true
    
}

const multiD1 = [[1,2,3],["a","b","c"],[true, true, true]]
var a = checkTypes(multiD1);
console.log(a)
// returns false (inner arrays aren't consistent with each other's data types)

const multiD2 = [[true,false,true],[false,false,true]]
var b = checkTypes(multiD2)
console.log(b) 
// returns true (each inner array contains the same data type as the others)