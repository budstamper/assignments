var alphabet = 'abcdefghijklmnopqrstuvwxyz';

countCode("aaacodebbb") //-> 1 
countCode("codexxcode") //-> 2 
countCode("cozexxcope") //-> 2

function countCode(str) {
    var count = 0;
    for(var i = 0; i< str.length; i++){
        if(str[i].toLowerCase().includes('c') && str[i+1].toLowerCase().includes('o') && alphabet.includes(str[1+2].toLowerCase()) && str[i+3].toLowerCase().includes('e'))
        count++
    }
    console.log(count);
    return count;
}