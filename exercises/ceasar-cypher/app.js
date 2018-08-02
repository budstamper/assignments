var ask = require('readline-sync');
var message = ask.question('What phrase would you like to encrypt?: ');
var shift2 = ask.questionInt('How many letters would you like to shift?: ');
var alphabet = "abcdefghijklmnopqrstuvwxyz";


function ceasarCipher(str, shift) {
    var mStr=""
    for(var i = 0; i<str.length;i++){
        if(alphabet.indexOf(str[i])!== -1){
            var index = alphabet.indexOf(message[i]);
            mStr+=alphabet[(index+shift)%26];
        } else{mStr+=message[i];}
    }

return mStr;
}

console.log(ceasarCipher(message, shift2));