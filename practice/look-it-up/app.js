var dictionary = {};

function lookUp(word){
    word = word.toUpperCase();
    return dictionary.word.value;
}


function addEntry(word, definition){
    //noVary turns word singular
    word = noVary(word);
    word = word.toUpperCase();
    if(dictionary[word]===undefined){
        dictionary[word] = definition;
    } else{
        console.log(`${word} is already in the dictionary`);
    }
}

//extra credit
//"npm install compromise" within "look-it-up" directory
//compromise is a natural language processor with useful word commands
//CAUTION: compromise is a "simple" NLP and is not all inclusive
var nlp = require("compromise");

//extra credit function takes word as parameter
function noVary(str){
    //word must be in all lowercase or all uppercase to proces corectly and will return lowercase
    str= str.toLowerCase();
    //assign parsed string data to a variable
    var psd = nlp(str);
    //assign metadata object to var
    var mTags = psd.out('tags');
    
    //assign variable to part of speech within metadata
    var pos = mTags[0].tags[0];

    //compromise has different methods for different parts of speech,
    //you cannot simply singularize a word as far as I can tell.
    //(possibly because of the way words are singularized)
    //therefore we will conditionalize all possibilities
    if(pos === "Noun"){
        var x = psd.nouns().toSingular().out();  
        return x;
    } else if(pos === "Verb"){
        var x = psd.verbs().toSingular();
        return x;
    }else{
        return str;
    }
}

console.log(dictionary);
addEntry('Dog', "an Animal.");
console.log(dictionary);
addEntry('go', "moving toward or away from a place.");
console.log(dictionary);
addEntry('Dog', "Pet.");
console.log(dictionary);

// extra credit
addEntry('Dogs', "Plural of dog");
console.log(dictionary);

