
var xhr = new XMLHttpRequest()

var name = document.getElementById('name').value
console.log(name)

axios.get(`https://api.vschool.io/${name}/todo`).then(function(response){
    displayData(response.data)
}).catch(function(err){
    console.log(err)
})

document.getElementById("name").addEventListener('change', function(){
    console.log(document.getElementById('name').value)
    if(name !== document.getElementById('name').value){
        name = document.getElementById('name').value
        console.log(name)

        axios.get(`https://api.vschool.io/${name}/todo`).then(function(response){
            displayData(response.data)
        }).catch(function(err){
            console.log(err)
        })
    }
})


function displayData(obj){
    //grab list from html
    var display = document.getElementById('list')
    display.innerHTML = ''
    //for each todo object in the array
    for(var i = 0; i<arr.length; i++){
        //create a text element (p, h1-16,span)
        //Put todo text in the text element
        //Append text element to list on DOM
        if(arr[i].completed = true){
            display.innerHTML += `
            <h1 class="box"><input type="checkbox" name="vehicle" value="jk" class="check" checked>${arr[i].title}</h1>
            <p> Description: ${arr[i].description}</p>
            <p> Price: ${arr[i].price} </p>

            <button value="Delete"></button>
            `
        }else{
            display.innerHTML += `
            <h1 class="box"><input type="checkbox" name="vehicle" value="jk" class="check">${arr[i].title}</h1>
            <p> Description: ${arr[i].description}</p>
            <p> Price: ${arr[i].price} </p>
            `
        }
    }
    display.classList.add('anotherClass')

    //document.getElementsByClassName('check').addEventListener()
}


xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        // parsing is turning raw JSON data (string) into a JS object we can access.
        var data = JSON.parse(xhr.responseText)
        displayData(data)
    }
}


        // 1. request type   2. URL    3. Is Asynchronous
xhr.open("GET", "https://swapi.co/api/people/1/", true)
xhr.send()

document.post.addEventListener('submit' ,function(e){
    e.preventDefault()

    var postNote = {
        title: document.post.title.value,
        description: document.post.description.value,
        price: document.post.price.value,
        completed: document.post.tF.value
    }

    axios.post(`https://api.vschool.io/${name}/todo`, postNote).then(function(response){
        displayData(response.data)
    }).catch(function(err){
        console.log(err)
    })
})