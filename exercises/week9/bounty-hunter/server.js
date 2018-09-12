var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var uuidv4 = require('uuid/v4')

const bounties = [
    {
        fname: "Luke",
        lname: "Skywalker",
        living: true,
        price: 200,
        type: 'jedi',
        id: uuidv4()
    },{
        name: 'Anakin',
        name: 'Skywalker',
        living: false,
        price: 100,
        type: 'sith',
        id: uuidv4()
    }
]


app.use(bodyParser.json())

app.get("/bounty", (req, res) => {
    res.send(bounties)
})

app.get("/bounty/:id", (req, res) => {
    const found = bounties.filter(a=>a.id === req.params.id)
    res.send(found[0])
})

app.post("/bounty/", (req, res) => {
    req[id] = uuidv4()
    bounties.push(req)
    res.send(bounties)
})

app.put("/bounty/:id", (req, res) => {
    console.log("putting")
    console.log(req.body)
    const found = bounties.find(a => a.id === req.params.id)
    const foundIndex = bounties.find(a => a.id === req.params.id)
    const newBounty = Object.assign(found, req.body)
    bounties.splice(foundIndex, 1, newBounty)
    res.send(bounties)
})

app.delete("/bounty/:id", (req, res) => {
    bounties = bounties.filter(a=>a.id !== req.params.id)
    res.send(bounties)
})


app.listen(4000, () => {
    console.log("starting")
})








