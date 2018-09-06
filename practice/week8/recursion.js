// Write a recursive function that takes two integers, n and counter as parameters and does the following:

// If the n is divisible by three, divide it by three and call the function again, providing the new value as n and counter + 1 as counter

// If not, either add or subtract 1 to a get a new value that is divisible by three and repeat step 1.

// If n is one, simply return the value counter.

function doStuff(n, counter){
    if(n===1){
        return counter
    } else if(n%3===0 && n!==0){
        n = n/3
        counter++
        return doStuff(n, counter)
    } else if(n%3===2){
        n++
        counter++
        return doStuff(n, counter)
    } else if(n%3===1){
        n--
        counter++
        return doStuff(n, counter)
    }
}
var x =doStuff(12334, 0)
console.log(x)