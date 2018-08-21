const peopleAndPets = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47,
        pets: [
            {
                name: "Alfred",
                type: "dog",
                nickNames: ["Lil Alfred", "Alfy", "Alfinator"]
            },
            {
                name: "Charles",
                type: "cat",
                nickNames: ["Charley"]
            },
            {
                name: "Bark Obama",
                type: "dog",
                nickNames: ["Barack", "Mr. President"]
            },
            {
                name: "Christopher George Latore Wallace",
                type: "dog",
                nickNames: ["Notorious D.I.G.", "Diggie Smalls"]
            }

        ]
    },
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12,
        pets: [
            {
                name: "Howard",
                type: "dog",
                nickNames: []
            },
            {
                name: "Bear",
                type: "dog",
                nickNames: []
            }
        ]
    },
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78,
        pets: [
            {
                name: "Bird Person",
                type: "bird",
                nickNames: ["Phoenixperson"]
            },
            {
                name: "Krombopulos Michael",
                type: "Gromflomite",
                nickNames: ["Assassin man"]
            },
            {
                name: "Squanchy",
                type: "Cat-person",
                nickNames: ["Squanch", "Smarf", "Thunder Cat"]
            }

        ]
    },
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 13,
        pets: [
            {
                name: "Morty Jr.",
                type: "Gazorpazorp",
                nickNames: ["Gwendolyn Jr."]
            },
            {
                name: "Snuffels",
                type: "dog",
                nickNames: ["Snowball"]
            }

        ]
    }
];


const peopleWithPets = [
    {
        firstName: "Sarah",
        lastName: "Palin",
        age: 47,
        pets: ["dog", "cat"]
    }, 
    {
        firstName: "Frank",
        lastName: "Zappa",
        age: 12,
        pets: ["dog"]
    }, 
    {
        firstName: "Rick",
        lastName: "Sanchez",
        age: 78,
        pets: ["cat", "parrot"]
    }, 
    {
        firstName: "Morty",
        lastName: "Smith",
        age: 13,
        pets: ["cat", "parrot", "dog"]
    }, 
    {
        firstName: "Kyle",
        lastName: "Mooney",
        age: 27,
        pets: ["dog"]
    }
];

function sortedDogOwners(arr, arr2) {
    //Return desired list
    var ageOrder = []
    var petNames = []
        for(var i = 0; i<arr.length; i++){
            if(arr[i].pets.indexOf("dog") !== -1){
                ageOrder.push(arr[i])
            }
        }
        ageOrder.sort(function(a,b){
            return a.age <b.age
        })
        // console.log(ageOrder)

        for(var i = 0; i<arr2.length; i++){
            if(arr2[i].age > 20){
                var mArr = arr2[i].pets
                console.log(mArr)
                for(var j = 0; j< mArr.length; j++){
                    var mmArr = mArr.nickNames
                if(mmArr !== undefined){
                    petNames.push(`<li>${arr2[i].pets[j].firstName}</li>`)
                }
            }
            }
        }
        console.log(petNames)
}

sortedDogOwners(peopleWithPets, peopleAndPets)
    
    //Output: 
    // ['<li>Alfred</li>',
    // '<li>Charles</li>',
    // '<li>Bark Obama</li>', 
    // '<li>Christopher George Latore Wallace</li>',
    // '<li>Morty Jr.</li>', 
    // '<li>Snuffels</li>']