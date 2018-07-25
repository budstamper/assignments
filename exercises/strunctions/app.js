// Implement all of the listed String Methods below using at least 3 unique Functions.
// .concat()
// .indexOf()
// .lastIndexOf()
// .match()
// .replace()
// .slice()
// .split()
// .toLowerCase()
// .toUpperCase()
// .substr()

function addStr(str1, str2){
    return str1.concat(str2);
}

function countDup(str){
    var count = 0;
    for(var i = 0;i<str.length;i++){
        if(i!==str.lastIndexOf(str[i])){
            count++;
        }
    }
    return count;
}

function whereB(str){
    if(str.indexOf("b")!==-1){
    for(var i = 0;i<str.length;i++){
        if(str[i].toLowerCase==="b"){return i}
    }}else "no b's here."

}


function cutLast(str, num){
    str=str.slice(-num);
    return str;
}

function getStrArr(str){
    var words = str.split('');
    return words;
}

function upperPart(str, num1, num2){
    str=str.toUpperCase(str.substr(num1, num2));
    return str;
}