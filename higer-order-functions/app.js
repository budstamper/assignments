// Use .forEach() to replace the following for loop.

// for (var i = 0; i < cars.length; i++) {  
//   console.log(`${cars[i]} goes vroom`);
// }

var cars = ['car1', 'car2', 'car3', 'car4', 'car5'];

cars.forEach(function(stuff){
    console.log(`${stuff} goes vroom`);
})

// Use .map() to replace the following for loop.

// var angryCars = [];
// for (var i = 0; i < cars.length; i++) {  
//   angryCars.push(cars[i].toUpperCase());
// }

var angryCars = [];

angryCars = cars.map(function(stuff){
    return stuff.toUpperCase();
})

// Use .filter() to replace the following for loop.

// var newCars = [];
// for (var i = 0; i < cars.length; i++) {  
//   if (cars[i].year > 2005){
//     newCars.push(cars[i]);
//   }
// }

var newCars = [];

newCars = cars.filter(function(stuff){
    return stuff.year > 2005;
})

// Use .find() to replace the following for loop.

// for (var i = 0; i < cars.length; i++) {  
//   if (cars[i].model === "E150"){
//     var coolVan = cars[i];
//     break;
//   }
// }

var coolVan = cars.find(function(stuff){
    return cars.model === "E150"
})

// Use .some() to replace the following for loop.

// for (var i = 0; i < cars.length; i++) {  
//   if (cars[i].model === "E150"){
//     console.log("It is true that there is one or more E150s");
//     break;
//   }
// }

var boo = cars.some(function(stuff){
    return cars.model === "E150"
})
console.log(`It is ${boo} that there is one or more E150s`);


// Use .every() to replace the following for loop.

// for (var i = 0; i < cars.length; i++) {  
//   if (cars[i].make != "E150"){
//     console.log("It is false that every car is an E150");
//     break;
//   }
// }
var boo2 = cars.every(function(stuff){
    return cars.model === "E150"
})
console.log(`It is ${boo2} that there is one or more E150s`);


// Use .reduce() to replace the following for loop and carTotals definition.

// var numberOfFords = 0;  
// var numberOfChevys = 0;

// for (var i = 0; i < cars.length; i++) {  
//   if (cars[i].model === "ford"){
//     numberOfFords ++;
//   }
//   if (cars[i].model === "chevy"){
//     numberOfchevys ++;
//   }
// }

var ford = cars.filter(function(stuff){
    return cars.model === 'ford'
})

var chevy = cars.filter(function(stuff){
    return cars.model === 'chevy'
})


var carTotals = { numberOfFords: ford.length, numberOfchevys: chevy.length }  
console.log(carTotals);



