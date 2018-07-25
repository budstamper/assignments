var fruit = ["banana", "apple", "orange", "watermelon"];  
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];  

console.log("fruit: ", fruit);  
console.log("vegetables: ", vegetables);  


vegetables.pop();

console.log("fruit: ", fruit);  
console.log("vegetables: ", vegetables);  


fruit.shift();

console.log("fruit: ", fruit);  
console.log("vegetables: ", vegetables);  


fruit.indexOf("orange");

console.log("fruit: ", fruit);  
console.log("vegetables: ", vegetables);  


fruit.push(fruit.indexOf("orange"));

console.log("fruit: ", fruit);  
console.log("vegetables: ", vegetables);  


console.log(vegetables.length);
vegetables.push(vegetables.length);

console.log("fruit: ", fruit);  
console.log("vegetables: ", vegetables);  


var food = fruit.concat(vegetables);

console.log("fruit: ", fruit);  
console.log("vegetables: ", vegetables);  
console.log("foods: ", food);


food.splice(4, 2);

console.log("fruit: ", fruit);  
console.log("vegetables: ", vegetables);  
console.log("foods: ", food);



food.reverse();

console.log("fruit: ", fruit);  
console.log("vegetables: ", vegetables);  
console.log("foods: ", food);


console.log(food.toString());