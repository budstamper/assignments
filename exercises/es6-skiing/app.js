function collectAnimals(...rest) { 
    // console.log(rest) 
    return rest
}

collectAnimals("dog", "cat", "mouse", "jackolope", "platypus"); 
// ["dog", "cat", "mouse", "jackolope", "platypus"]

const fruit = ["apple", "pear"];
const sweets = ["cake", "pie"];
const vegetables = ["carrit"];

const food = {
    fruit: fruit,
    sweets: sweets,
    vegetables: vegetables
}

// console.log(food)

const vacation = {  
    location: "Burly Idaho",
    duration: "2 weeks"
  };

  const {location, duration} = vacation;

  console.log(`We're going to have a good time in ${location} for ${duration}`)

  const Items = [0]

  const [firstItem] = Items;



  const favoriteActivitiesInOrder = ["magnets", "snowboarding", "philanthropy", "janitor work", "eating"];

const [firstFav, secondFav, thirdFav] = favoriteActivitiesInOrder

console.log("My top three favorite activities are, " + firstFav + ", " + secondFav + ", and " + thirdFav);

function combineAnimals(...rest) {  
    rest = rest.reduce(function(a, b){
        return a.concat(b)
    })
    console.log(rest)
}

const realAnimals = ["dog", "cat", "mouse"];
const magicalAnimals = ["jackolope"];
const mysteriousAnimals = ["platypus"];

combineAnimals(realAnimals, magicalAnimals, mysteriousAnimals); 

// ["dog", "cat", "mouse", "jackolope", "platypus"]


function product(...rest) {
  
    return rest.reduce(function(acc, number) {
        return acc * number;
    }, 1)
}

console.log(product(1,2,3,4,5,6))



function unshift(arr,...rest) {  
return rest.concat(arr);
}



function populatePeople(names){
    return names.map(function(name){
        name = name.split(" ");
        const [f,l] = name;
        return {
            firstName: f,
            lastName: l
        }
    })
}

var xx = populatePeople(["Frank Peterson", "Suzy Degual", "Liza Jones"])
//[
//  {firstName: "Frank", lastName: "Peterson"},
//  {firstName: "Suzy", lastName: "Degual"},
//  {firstName: "Liza", lastName: "Jones"},
//]

console.log(xx)