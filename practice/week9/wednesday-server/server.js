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


app.get("/", (req, res) => {
    res.send(database)
})

app.post("/", (req, res) => {
    req.body.id = uuidv4()
    database.push(req.body)
    res.send(database)
})

app.put("/:id", (req, res) => {
    var x = database.find(a=>a.id===re.params.id)
    var index = database.findIndex(a=>a.id===re.params.id)
    for(var j in req.params){
        x[`${j}`] = re.params[`${j}`]
    }
    database[index] = x
    res.send(database)
})


app.listen(5000, () => {
    console.log("Hello World")
})
