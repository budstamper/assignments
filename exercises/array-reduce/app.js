function total(arr) {
    return arr.reduce(function(a,b){
        return a+b
    })
}

var x = total([1,2,3]) // 6  


function stringConcat(arr) {
    return arr.reduce(function(a,b){
        return String(a)+String(b)
    })
}

var x =stringConcat([1,2,3]) // "123" 


function totalVotes(arr) {
    var y = 0;
    arr.forEach(function(a){
        if(a.voted === true){y++}
    })
    return y
}

var voters = [  
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];
var x =totalVotes(voters) // 7  



function shoppingSpree(arr) {
    var y = 0;
    arr.forEach(function(a){
        y+=a.price
    })
    return y
}

var wishlist = [  
    { title: "Tesla Model S", price: 90000 },
    { title: "4 carat diamond ring", price: 45000 },
    { title: "Fancy hacky Sack", price: 5 },
    { title: "Gold fidgit spinner", price: 2000 },
    { title: "A second Tesla Model S", price: 90000 }
];

var x = shoppingSpree(wishlist) // 227005 


function flatten(arr) {
    var y = []
    for(var i =0; i<arr.length;i++){
        y=y.concat(arr[i])
    }
    return y
}

var arrays = [  
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];

var x = flatten(arrays) // ["1", "2", "3", true, 4, 5, 6]; 



var voters = [  
    {name:'Bob' , age: 30, voted: true},
    {name:'Jake' , age: 32, voted: true},
    {name:'Kate' , age: 25, voted: false},
    {name:'Sam' , age: 20, voted: false},
    {name:'Phil' , age: 21, voted: true},
    {name:'Ed' , age:55, voted:true},
    {name:'Tami' , age: 54, voted:true},
    {name: 'Mary', age: 31, voted: false},
    {name: 'Becky', age: 43, voted: false},
    {name: 'Joey', age: 41, voted: true},
    {name: 'Jeff', age: 30, voted: true},
    {name: 'Zack', age: 19, voted: false}
];

function voterResults(arr) {
    var y = {youngVotes: 0, youth: 0, midVotes: 0, mids: 0, oldVotes: 0, olds: 0}
    arr.forEach(function(a){
        if(18<a.age && a.age<=25){
            y.youth++
            if(a.voted === true){y.youngVotes++}
        }
        else if(26<a.age && a.age<=35){
            y.mids++
            if(a.voted === true){y.midVotes++}
        }
        else if(36<a.age && a.age<=55){
            y.olds++
            if(a.voted === true){y.oldVotes++}
        }
    })
    return y
}

var x = voterResults(voters) // Returned value shown below:  
/*
{ youngVotes: 1,
  youth: 4,
  midVotes: 3,
  mids: 4,
  oldVotes: 3,
  olds: 4 
}
*/


console.log(x)




