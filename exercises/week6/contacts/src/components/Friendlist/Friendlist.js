import React from 'react';
import Friend from './Friend';
import Pet from './Pet';

const App = () => {

    const friends = [
        {
          name: "Ben",
          age: 29,
          pets: [
            {
              name: "spot",
              breed: "tabby"
            },{
              name: "John Johnson",
              breed: "husky"
            },{
              name: "Bear the bear",
              breed: "Grizzly"
            }
          ]
        },{
          name: "Bob",
          age: 31,
          pets: [
            {
              name: "Sally",
              breed: "Australian Shepard"
            }
          ]
        },{
          name: "Marcus",
          age: 25,
          pets: [
            {
              name: "Indy",
              breed: "Akita"
            },{
              name: "Anna",
              breed: "persian cat"
            }
          ]
        },{
          name: "Jacob",
          age: 20,
          pets: [
            {
              name: "fluffy",
              breed: "sphynx cat"
            },{
              name: "patches",
              breed: "sphynx cat"
            },{
              name: "tiger",
              breed: "sphynx cat"
            },{
              name: "oscar",
              breed: "sphynx cat"
            }
          ]
        }
      ]

      const displayPets;

      const displayFriends = friends.map((friend, i)=>{
          return <li key={friend.name+i}
                    name={friends.name}
                    age={friend.age}></li>
      })

      const pets = friends.map((friend)=>{
          return friend.pets
      })

      for(var i = 0; i < pets.length; i++){
          var temp = pets[i]
      displayPetsTemp = temp.map((pet, i)=>{
          return <li key={friend.pets[]}
      })
      display
    }

    return(
        <div className='container'>
            <ul className="displayFriendsStyle">
            {displayFriends}
            </ul>
            <ul className="displayPetsStyle">
            {displayPets}
            </ul>

        </div>
    )
}

export default App