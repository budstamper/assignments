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

      const displayFriends = friends.map((friend, i)=>{
          return <Friend key={friend.name+i}
                    name={friend.name}
                    age={friend.age} />
      })

      const displayPets = friends.map((friend)=>{
           const temp = friend.pets.map((pet, i)=>{
             return <Pet key={pet.name +i}
             name={pet.name}
             breed={pet.breed}/>
           })
            return <div>{friend.name}'s' Pets:{temp}</div>
      })

    return(
        <div className='container'>
            <div className="displayFriendsStyle">
            {displayFriends}
            </div>
            <div>
            </div>
            <div className="displayPetsStyle">
            {displayPets}
            </div>

        </div>
    )
}

export default App