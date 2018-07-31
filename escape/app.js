//npm init -y

//npm install --save readline-sync
//or
//npm i -S readline-sync


var readline = require('readline-sync');

var name = readline.question('Welcome to prison, inmate #110132901, give us your name! ');

//template literals
console.log(`"Have good time, ${name}", the guards laugh as they throw you into your cell.\n Moments later you can hear the guard snoring. There doesn't seem to be anyone else around.\n "I have to get out of here.", you say to yourself.\n You inspect your cell to see a large reinforced door and a hole in the wall to your right. `)

var isAlive = true;
var hasKey = false;
var choices = ['Put hand in hole', 'Open the door', 'Look around'];

while(isAlive){
    var index = readline.keyInSelect(choices, "What would you like to do? ");

    if(choices[index] === 'Open the door'){
        if(hasKey){
            console.log('the door was opened')
            isAlive = false
        }else{
            console.log('I need to find the key');
            choices.push('Find the key');
        }
    }

    else if(choices[index]=== 'Put hand in hole'){
        console.log('You have died.')
        isAlive=false;
    }

    else if(choices[index]==='Find the key'){
        console.log('You search under your bunk to find a key!')
        hasKey=true;
    }

    else{console.log("There's nothing here");}
}