


function addThree(a, b, c){
    if(typeof a !== 'number' || typeof b !== 'number' || typeof c !== 'number'){throw "Enter 3 numbers"}
    var x = a+b+c
    console.log(x)
    return x
}

try{
    addThree(1, 2, "3")
} catch(err){
    console.log(err)
}


