function multTable(){
    var arr = new Array(10).fill([])
    for(var i =1; i<arr.length+1; i++){
        for(var j = 1; j<arr.length+1; j++){
            arr[i-1].push(i*j)
        }
    }
    console.log(arr)
    return arr
}

multTable();
// Output:
//  [
//    [1,2,3,4,5...],
//    [2,4,6,8,10...],
//    [3,6,9,12,15...],
//    ...
//  ]

function multTable2(n){
    var arr = new Array(n)
    for(var i =1; i<arr.length+1; i++){
        var arrTemp = []
        for(var j = 1; j<arr.length+1; j++){
            arrTemp.push(i*j)
        }
        arr[i - 1] = arrTemp
    }
    // console.log(arr)
    return arr
}

multTable2(100);
// Output:
//  [
//    [1,2,3,4,5...],
//    [2,4,6,8,10...],
//    [3,6,9,12,15...],
//    ...
//  ]