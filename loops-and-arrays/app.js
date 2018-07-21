var arr= [];

function createEvenArray(highestNum){
    for(var i =1;i<highestNum;i++){
        i%2===0 ? arr.push(i) : console.log("odd");
    }
    return arr;
}

function addOdds(evensOnlyArray){
    if(evensOnlyArray[0]===2){evensOnlyArray.push(1);}
    for(var i =0;i<evensOnlyArray.length;i++){
        evensOnlyArray.push(evensOnlyArray[i]+1);
    }
    return evensOnlyArray;
}

function sortNums(numberArray) {  
    return numberArray.sort(function(a, b){return a-b});
}

createEvenArray(10);
evensOnlyArray(arr);
sortNums(arr);

for(var i =0;i,arr.length;i++){
    console.log(arr[i]);
}

