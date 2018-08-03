
var wizards = ["Edwin Odesseiron", "Harry Potter", "Ronny the Bear", "Gandalf the Grey"]  

wizards.forEach(function(stuff){
    console.log(stuff);
})


var wizards = [  
    {
      name: "Edwin Odesseiron",
      age: 37,
      alignment: "lawful evil"
    },
    {
      name: "Harry Potter",
      age: 21,
      alignment: "neutral good"
    },
    {
      name: "Hermony Granger",
      age: 21,
      alignment: "lawful good"
    },
    {
      name: "Ronny the Bear",
      age: 21,
      alignment: "neutral good"
    },
    {
      name: "Gandalf",
      age: 100,
      alignment: "neutral good"
    }
  ]

wizards.forEach(function(stuff){
    console.log(stuff.name);
    stuff.isAlive = true;
})

var arr = wizards.filter(function(stuff){
     return stuff.alignment ==='neutral good';
})
console.log("here");
console.log(arr);

var id = wizards.findIndex(function(stuff){
    return stuff.alignment === "lawful good" 
})
console.log("here2");
console.log(id);

var boo = wizards.every(function(stuff){
    return stuff.isAlive === true;
})
console.log("here3");
console.log(boo);

var boo2 = wizards.some(function(stuff){
    return stuff.alignment === 'neutral good';
})
console.log("here4");
console.log(boo2);

wizards.forEach(function(stuff){
    if(stuff.alignment === 'neutral good'){stuff.isAlive = false;}
})
console.log("here5");
console.log(wizards);

var boo3 = wizards.every(function(stuff){
    return stuff.isAlive === true;
})
console.log("here6");
console.log(boo3);

var boo4 = wizards.some(function(stuff){
    return stuff.isAlive === true;
})
console.log("here7");
console.log(boo4);