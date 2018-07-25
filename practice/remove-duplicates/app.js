var input1 = "bookkeeper larry";
var temp = "";
var temp2 = "";
var duplicates = "";
var count = 0;

// No duplicates: "bokepr lay"
// The Extras: "okeerr"

function removeDups(str){
    for(var i =0; i < str.length; i++){
        temp = str[i];
        temp2=temp2+temp;
        for(var ii =0;ii<temp2.length; ii++){
            if(temp2[ii]===temp){
                count++
                if(count>1){
                duplicates.concat(temp);
                str = str.slice(0, i) + str.slice(i+1);
            }
        }
        }

    }
}

removeDups(input1);

console.log(input1);
console.log(duplicates);