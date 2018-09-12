
// Write a function that takes a query object and an HTTP endpoint and then returns a URL with a query string.

// Part 2

// Write a function that does the opposite from above: given a valid URL with a query string attached, return a query object.


function stringifyUrl(url, query) {
    var x = Object.getOwnPropertyNames(query)
    url+="?"
    url+=`${x[0]}=${query[x[0]]}`
    for(var i = 1; i<x.length; i++){
        url+="&"
        url+=`${x[i]}=${query[x[i]]}`
    }
    return url
}

function unStringifyUrl(url){
    var obj = {}
    while(url.lastIndexOf("?") !== -1){
            var str = url.substring(url.lastIndexOf("=")+1)
            url = url.substring(0, url.lastIndexOf("="))
            if(url.lastIndexOf("&") !== -1){
                var str2 = url.substring(url.lastIndexOf("&")+1)
                url = url.substring(0, url.lastIndexOf("&"))
                obj[str2] = str
            } else {
                var str2 = url.substring(url.lastIndexOf("?")+1)
                url = url.substring(0, url.lastIndexOf("?"))
                obj[str2] = str
            }
        }
    return obj
}

const url = "http://localhost:8080/monkeys"
const query = {
  color: "black",
  species: "howler"
}

var y = stringifyUrl(url, query)
console.log(y)
y = unStringifyUrl(y)
console.log(y)
//returns "http://localhost:8080/monkeys?color=black&species=howler"





