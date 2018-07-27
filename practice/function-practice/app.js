function revStr(str){
    return str.split("").reverse().join("");
}


function isNum(str){
    var numstr=[0,1,2,3,4,5,6,7,8,9]

    for(var i =0;i<str.length;i++){
        if(numstr.indexOf(str[i])!==-1){
        } else{return false;}
    }
    return true;

}


function isEven(num){
    if(num%2===0 || num===0){return true;}
    else{return false;}
}

function arrMean(arr){
    var mean=0
    for(var i = 0;i<arr.length;i++){
        mean+=arr[i];
    }
    return mean/arr.length;
}

function arrCombine(arr1, arr2){
    var combined = [];
    var length;

    if(arr1.length===arr2.length){length=arr1.length;}
    else if(arr1.length<arr2.length){length=arr2.length;}
    else {length=arr1.length}

    for(var i = 0; i<length;i++){
        if(arr1[i] || arr1[i]===0){combined.push(arr1[i]);}
        if(arr2[i] || arr2[i]===0){combined.push(arr2[i]);}
    }
    return combined;
}


console.log(revStr("xyz"));
console.log(isNum(34));
console.log(isNum("two"));
console.log(isEven(3));
console.log(isEven(4));
console.log(arrMean([3,4,5,6,7]));
var t = [234,456,678,"asdf","adfg",3,5,-4,0];
var tt= ["asdf", "wert", "fgh",456, 0];
console.log(arrCombine(t,tt));