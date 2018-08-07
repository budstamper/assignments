var chai = require('chai')
var app = require('./app.js')

var assert = chai.assert



describe(`create a function that returns people of age greater than 18`, function(a){
    it(`should have age 19 or more`, function(){
        assert.deepEqual(app.sortedOfAge(app.peopleArray), [  
          {
            firstName: "Kyle",
            lastName: "Mooney",
            age: 27
          },{
            firstName: "Lev",
            lastName: "Tolstoy",
            age: 82
          },{
            firstName: "Morty",
            lastName: "Smith",
            age: 29
          },{
            firstName: "Rick",
            lastName: "Sanchez",
            age: 78
          },{
              firstName: "Sarah",
              lastName: "Palin",
              age: 47
            },
          ])
    })
})

describe