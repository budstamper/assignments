document.getElementById("btn").addEventListener('click', function(e){
    //console.log('started');
    e.preventDefault();
    var goomba = document.getElementById("goo").value*5;
    var bobomb = document.getElementById("bobo").value*7;
    var cheep = document.getElementById("cheepo").value*11;

    var total = goomba+bobomb+cheep;

    //console.log(Number(total));

    document.getElementById("coster").innerHTML=Number(total)+" Coins";
});