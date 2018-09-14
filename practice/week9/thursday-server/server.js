// Using your server you made in the warmup yesterday that allows a GET and a PUT
    // Build a small React App that get's the data from that server in componentDidMount 
    // Do not use redux for this warmup, use a class component to get and save the data in it's component state


var express = require("express")
var app = express()
var bodyParser = require("body-parser")
var uuidv4 = require('uuid/v4')

const database = [
    {
        type: "m16",
        id: uuidv4()
    },{
        type: 'handgun',
        id: uuidv4()
    }
]

app.use(bodyParser.json())


app.get("/gun", (req, res) => {
    console.log('getting')
    res.send(database)
})

app.post("/", (req, res) => {
    req.body.id = uuidv4()
    database.push(req.body)
    res.send(database)
})

app.put("/:id", (req, res) => {
    var x = database.find(a=>a.id===req.params.id)
    var index = database.findIndex(a=>a.id===req.params.id)
    for(var j in req.params){
        x[`${j}`] = re.params[`${j}`]
    }
    database[index] = x
    res.send(database)
})


app.listen(5004, () => {
    console.log("Hello World")
})





