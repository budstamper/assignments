var dogs = [
    { name: 'Fluffy', isFluffy: true },
    { name: 'Fido', isFluffy: true },
    { name: 'Scooby', isFluffy: true },
    { name: 'Ralph', isFluffy: false },
  ]
  
  // Only return the fluffy ones:

  var fluffyDogs = dogs.filter(function(stuff){
    return stuff.isFluffy=true;
  })

  console.log(fluffyDogs);

  var names = dogs.map(function(stuff){
      return stuff.name;
  })
  console.log(names);