const name = 'John'
var age = 101
var pets = ["cat", "dog"]

var petObjects = []

for (var i = 0; i < pets.length; i++){
  var pet = {type: pets[i]}
  if (pets[i] === "cat"){
    var name = "fluffy"
  } else {
    var name = "spot"
  }
  pet.name = name
  petObjects.push(pet)
}

const vegetables = carrots.map(carrot => ({type: "carrot", name: carrot}))

friends = people.filter(person => !!person.friendly)

const doMathSum = (a, b) => a + b


const produceProduct = (a, b) => a * b

const say = (fname, lname, age) => `Hi ${fname} ${lname}, how does it feel to be ${age}?`

const dogs = animals.filter((animal)=> animal.type === "dog" ? true : false)

const hawaii = (location, name) => location === "Hawaii" && name === "Janice" ? ` Hi ${name}
Welcome to ${location}.

I hope you enjoy your stay. Please ask the president of Hawaii if you need anything.` : false
