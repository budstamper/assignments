class Player{
    constructor(){
        this.name = ""
        this.totalCoins = 0
        this.hasStar = false
        this.status = "Small"             //Powered Up, Big, Small, and Dead
        this.gameActive = true
    }
    setName(namePicked){
        this.name = namePicked
    }
    gotHit(){
        switch (this.status){
        case "Powered Up": this.status = "Big"
        break;
        case "Big": this.status = "Small"
        break;
        case "Small": this.status = "Dead"; this.gameActive = false; console.log("You Died!")
        break;
        }
    }
    gotPowerup(){
        switch (this.status){
        case "Big": this.status = "Powered Up"
        break;
        case "Small": this.status = "Big"
        break;
        }
    }
    addCoin(){
        this.totalCoins++
    }
    print(){
        console.log(`
        Name: ${this.name}
        Status: ${this.status}
        Coins: ${this.totalCoins}
        Star: ${this.hasStar}
        `)
    }
}

const player = new Player()

//set name random
var ran = Math.round(Math.random())
var who = ""
if(ran === 1){
    who = "Mario"
}else{
    who = "Luigi"
}
player.setName(who)

function randomRange(){
    return Math.round(Math.random()*2)
}

function gameOn(){
var isHit = randomRange()
// console.log(isHit)
if(isHit === 0){
    player.gotHit()
} else if(isHit === 1){
    player.gotPowerup()
} else{
    player.addCoin()
}
player.print()
}

//start mario game
var playing = setInterval(gameOn, 1000)
//end mario game

setInterval(off, 1000)

function off(){
    if(!player.gameActive){clearInterval(playing)}
    }