// Write a function that takes an array as a parameter and returns a new array with the contents randomly "shuffled".

// Example

// shuffle([1,2,3,4,5]);
// //returns [3,5,4,1,2]

function shuffle(arr){
    var arr2 = new Array(arr.length)
    for(var i = 0; i < arr.length; i++){
        do{
            var rand = Math.floor(Math.random()*arr.length)
        }while(arr2[rand]!==undefined)
        arr2[rand] = arr[i]
    }
    return arr2
}


var x = shuffle([1,2,3,4,5]);
console.log(x)
//returns [3,5,4,1,2]