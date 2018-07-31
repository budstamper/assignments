var phrase = 'slimy smelly solution'
var newStr="";

function getFrequency(string) {
    var freq = {};
    var newStr="";
    for (var i=0; i<string.length;i++) {
        var character = string[i];
        console.log(freq[character]);
        if (freq[character]) {
           freq[character]++;
        } else {
           freq[character] = 1;
           newStr+=character;
        }
    }

    var sortable = [];
    for (var num in freq) {
        sortable.push([num, freq[num]]);
    }

    sortable.sort(function(a, b) {
        return a[1] - b[1];
    });

    sortable.reverse();

    for(var i=0;i<sortable.length;i++){
        console.log("'" + sortable[i][0] + "' : " +sortable[i][1]);
    }

    console.log(newStr);
    return freq;
};

getFrequency(phrase);