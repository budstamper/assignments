var xhr = new XMLHttpRequest()
console.log(xhr)

xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        // parsing is turning raw JSON data (string) into a JS object we can access.
        var data = JSON.parse(xhr.responseText)
        console.log(data)
        parsePokemon(data)
    }
}





function parsePokemon(data){
    var display = document.getElementById('list')
    var str = `
    <h1 class="box">Pokemon</h1>\n
    `
    for(var i = 0; i<data.objects[0].pokemon.length;i++){
    str+=`
    <p> Pokemon #${i+1}: ${data.objects[0].pokemon[i].name}</p>
    `
    }
    display.innerHTML = str;
}

        // 1. request type   2. URL    3. Is Asynchronous
        xhr.open("GET", "http://api.vschool.io:6543/pokemon.json", true)
        xhr.send()
        