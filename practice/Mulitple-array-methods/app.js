function sortedOfAge(arr){
    var arr1 = arr.filter(function(a){
        return a.age >18
    })
    arr1.sort((a, b) => a.firstName.localeCompare(b.firstName));
    return arr1
}

var peopleArray = [  
  {
    firstName: "Sarah",
    lastName: "Palin",
    age: 47
  },{
    firstName: "Frank",
    lastName: "Zappa",
    age: 12
  },{
    firstName: "Rick",
    lastName: "Sanchez",
    age: 78
  },{
    firstName: "Morty",
    lastName: "Smith",
    age: 13
  },{
    firstName: "Kyle",
    lastName: "Mooney",
    age: 27
  }
]

console.log(sortedOfAge(peopleArray))

function toDisplayInHTML(arr){
  arr.sort(function(a,b){
    return a.age < b.age
  })
  var arr1 = arr.map(function(a){
      return String(`<li>${a.firstName} ${a.lastName} is ${a.age}</li>`)
  })
  return arr1
}

console.log(toDisplayInHTML(peopleArray));  //==> ["<li>Rick Sanchez is 78</li>", "<li>Sarah Palin is 47</li>", "<li>Kyle Mooney is 27</li>", "<li>Morty Smith is 13</li>", "<li>Frank Zappa is 12</li>"]  