var lyrics = ["This", "hit", "that", "ice", "cold",  
              "Michelle", "Pfeiffer", "that", "white", 
              "gold", "This", "one", "for", "them", 
              "hood", "girls", "Them", "good", "girls", 
              "straight", "masterpieces", "Stylin'", 
              "whilen'", "livin'", "it", "up", "in", 
              "the", "city", "Got", "Chucks", "on", 
              "with", "Saint", "Laurent", "Gotta", "kiss", 
              "myself", "I'm", "so", "pretty"];

function joiner(){
    var sen = lyrics.join(" ");         
console.log(sen);
}

function rever(){
    lyrics.reverse();
var sen2 = lyrics.join(" ");
lyrics.reverse();
console.log(sen2);
}

function evOther(){
    for(var i=0;i<lyrics.length;i+=2){
    console.log(lyrics[i]);
}
}

function swap(){
    for(var i=1;i<lyrics.length;i+=2){
    var ii = "";
    ii = lyrics[i];
    lyrics[i]=lyrics[i-1];
    lyrics[i-1]=ii;
}
var sen3=lyrics.join(" ");
console.log(sen3);
}