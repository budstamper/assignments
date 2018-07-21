var chessPlayer = {
    name : "Magnus",
    age: 28,
    rating: 2842,
    isChampion:true,
    recentVictories:[
        {
            name: "Vishy",
            age: 43,
            rating: 2802,
            isChampion:true,
            notableVictories:[
                {
                    Name: "Kamsky",
                    rating: 2798,
                    isChampion:false
                }
            ]
        }, {
            name:"goletiani",
            rating: 2565,
            isChampion:false
        },{
            name:"fred",
            rating:2401,
            isChampion:false
        },{
            name:"bill",
            rating:2679,
            isChampion:false
        },{
            name:"karpov",
            rating:2798,
            isChampion:true
        },{
            name:"kasparov",
            rating: 2861,
            isChampion:true
        },{
            name:"joe",
            rating:2200,
            isChampion:false
        },{
            name:"Fischer",
            rating:2943,
            isChampion:true
        },{
            name:"ivan",
            rating:2567,
            isChampion:false
        },{
            name:"yuri",
            rating:2400,
            isChampion:false
        }
    ],
    gamesWon() {
        console.log(recentVictories.length);
    }
}

chessPlayer.gamesPlayed = 8756;
chessPlayer.birthYear = "1990";

chessPlayer.recentVictories.push({name:"hikaru", rating:2805});
chessPlayer.recentVictories.push({name:"polgar", rating:2721});

chessPlayer.gamesWon();