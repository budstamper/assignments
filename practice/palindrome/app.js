function isPalindrome(str){
    str = str.split(/[\s,/.?!;:'" ]+/).join("").split("").join("").toLowerCase()
    return str === str.split("").reverse().join("")
}


console.log(isPalindrome("Star Rats!"));  // true  
console.log(isPalindrome("palindrome"));  // false  
console.log(isPalindrome("I madam, I made radio! So I dared! Am I mad?? Am I?!"));  // true  
console.log(isPalindrome('racecar')); //true