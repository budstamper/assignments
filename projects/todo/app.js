console.dir(axios)
var xhr = new XMLHttpRequest()

var name = document.getElementById('name').value
console.log(name)


//`https://api.vschool.io/${name}/todo`
axios.get(`http://eyewatch20.com/home/budthestud1/public_html/`).then(function(response){
    console.log(response.data)
    displayData(response.data)
}).catch(function(err){
    console.log(err)
})

document.getElementById("name").addEventListener('keyup', function(){
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

var idArray = []
function displayData(arr){
    console.log(arr)
    //grab list from html
    var display = document.getElementById('list')
    display.innerHTML = ''
    //for each todo object in the array
    for(var i = 0; i<arr.length; i++){
        //create a text element (p, h1-16,span)
        //Put todo text in the text element
        //Append text element to list on DOM
        if(arr[i].completed === true){
            var todoID = ""
            todoID += arr[i]._id
            display.innerHTML += `
            <h1 class="box"><input type="checkbox" name="vehicle" value="jk" onchange="uncomplete('${todoID}')" checked>${arr[i].title}</h1>
            <p> Description: ${arr[i].description}</p>
            <p> Price: ${arr[i].price} </p>

            <button value="Delete" onclick="deleteTODO('${todoID}')" id="${arr[i]._id}">Delete</button>
            `
        }else{
            var todoID = ""
            todoID += arr[i]._id
            display.innerHTML += `
            <h1 class="box"><input type="checkbox" name="vehicle" value="jk" onchange="completed('${todoID}')">${arr[i].title}</h1>
            <p> Description: ${arr[i].description}</p>
            <p> Price: ${arr[i].price} </p>

            <button value="Delete" onclick="deleteTODO('${todoID}')" id="${arr[i]._id}">Delete</button>
            `
        }
    }
}


xhr.onreadystatechange = function(){
    if(xhr.readyState == 4 && xhr.status == 200){
        // parsing is turning raw JSON data (string) into a JS object we can access.
        var data = JSON.parse(xhr.responseText)
        displayData(data)
    }
}


        // 1. request type   2. URL    3. Is Asynchronous
xhr.open("GET", `https://api.vschool.io/${name}/todo`, true)
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

    axios.get(`https://api.vschool.io/${name}/todo`).then(function(response){
        displayData(response.data)
    }).catch(function(err){
        console.log(err)
    })
    this.reset()
})

//delete function
function deleteTODO(str){
    console.log(`deleting ${str}`);
    axios.delete(`https://api.vschool.io/${name}/todo/${str}`, false).then(function(response){

        axios.get(`https://api.vschool.io/${name}/todo`).then(function(response){
        displayData(response.data)
})
.catch(function(err){
console.log(err)
})
    }).catch(function(err){
        console.log(err)
    })
}
//checkbox update -- NO WORKY!!
function uncomplete(str){
    console.log(`un-completing ${str}`);
    axios.put(`https://api.vschool.io/${name}/todo/${str}`, {"complete": false}).then(function(response){
        displayData(response.data)
    }).catch(function(err){
        console.log(err)
    });
}

function completed(str){
    console.log(`completing ${str}`);
    
    axios.put(`https://api.vschool.io/${name}/todo/${str}`, {"complete": true}).then(function(response){
        displayData(response.data)
    }).catch(function(err){
        console.log(err)
    });
}
