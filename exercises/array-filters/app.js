function fiveAndGreaterOnly(arr) {
    var arr2 = []
    arr.forEach(function(stuff, index){
        if(stuff>=5){arr2.push(stuff)}
    })
    console.log(arr2);
    return arr2;
}

fiveAndGreaterOnly([3, 6, 8, 2]); /// [6, 8] 


function evensOnly(arr) {
    var arr2 = []
    arr.forEach(function(stuff, index){
        if(stuff%2===0){arr2.push(stuff)}
    })
    console.log(arr2);
    return arr2;
}

evensOnly([3, 6, 8, 2]); /// [6, 8, 2] 


function fiveCharactersOrFewerOnly(arr) {
    var arr2 = []
    arr.forEach(function(stuff, index){
        if(stuff.length<=5){arr2.push(stuff)}
    })
    console.log(arr2);
    return arr2;
}

fiveCharactersOrFewerOnly(["dog", "wolf", "by", "family", "eaten", "camping"]) // ["by", "dog", "wolf", "eaten"]  
  

function peopleWhoBelongToTheIlluminati(arr){
    var arr2 = []
    arr.forEach(function(stuff, index){
        if(stuff.member===true){arr2.push(stuff)}
    })
    console.log(arr2);
    return arr2;
}

peopleWhoBelongToTheIlluminati([  
    {
        name: "Angelina Jolie",
        member: true
    },
    {
        name: "Eric Jones",
        member: false
    },
    {
        name: "Paris Hilton",
        member: true
    },
    {
        name: "Kayne West",
        member: false
    },
    {
        name: "Bob Ziroll",
        member: true
    }
])

function ofAge(arr){
    var arr2 = []
    arr.forEach(function(stuff, index){
        if(stuff.age>=18){arr2.push(stuff)}
    })
    console.log(arr2);
    return arr2;
}

ofAge([  
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