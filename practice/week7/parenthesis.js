// Given a string including parentheses, write a function that returns true if every opening parenthesis has a closing parenthesis.

var str1 = "()()" // -> true
var str2 = "(())" // -> true
var str3 = "()))" // -> false
// Also, every closing parentheses needs an opening partner before it.

var str4 = ")()(" // -> false
var str5 = "())(" // -> false

function parens(str){
    if(str.match(/[(]/g).length !== str.match(/[)]/g).length){
        return false
    }
    while(str.indexOf("(") !== -1 && str.indexOf(")") !== -1){
        if(str.indexOf("(") > str.indexOf(")")){
            return false
        } else {
            str = str.replace("(", "")
            str = str.replace(")", "")
        }
    }
    return true
}

console.log(parens(str1))
console.log(parens(str2))
console.log(parens(str3))
console.log(parens(str4))
console.log(parens(str5))
