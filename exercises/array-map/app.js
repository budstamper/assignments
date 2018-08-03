function doubleNumbers(arr){
    arr=arr.map(function(num){
        return num*2;
    })
    console.log(arr);
}

doubleNumbers([2, 5, 100]); // [4, 10, 200] 


function stringItUp(arr){
    arr=arr.map(function(num){
        return String(num);
    })
    console.log(arr);
}

stringItUp([2, 5, 100]); // ["2", "5", "100"] 


function capitalizeNames(arr){
    arr=arr.map(function(num){
        return num[0].toUpperCase()+num.slice(1);
    })
    console.log(arr);
}

capitalizeNames(["john", "JACOB", "jinGleHeimer", "schmidt"]); // ["John", "Jacob", "Jingleheimer", "Schmidt"]


function namesOnly(arr){
    arr=arr.map(function(num){
        return num.name;
    })
    console.log(arr);
}

namesOnly([  
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]) 
// ["Angelina Jolie", "Eric Jones", "Paris Hilton", "Kayne West", "Bob Ziroll"]


function makeStrings(arr){
    arr=arr.map(function(num){
        if(num.age>=18){return `${num.name} can go to the Matrix`}
        else{return `${num.name} is under age!!`}
    })
    console.log(arr);
}

makeStrings([  
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]) 
// ["Angelina Jolie can go to The Matrix", 
// "Eric Jones is under age!!", 
// "Paris Hilton is under age!!", 
// "Kayne West is under age!!", 
// "Bob Ziroll can go to The Matrix"]



function readyToPutInTheDOM(arr){
    arr=arr.map(function(num){
        return `<h1>${num.name}</h1><h2>${num.age}</h2>`;
    })
    console.log(arr);
}
readyToPutInTheDOM([  
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]) 
// ["<h1>Angelina Jolie</h1><h2>80</h2>", 
// "<h1>Eric Jones</h1><h2>2</h2>", 
// "<h1>Paris Hilton</h1><h2>5</h2>", 
// "<h1>Kayne West</h1><h2>16</h2>", 
// "<h1>Bob Ziroll</h1><h2>100</h2>"]
