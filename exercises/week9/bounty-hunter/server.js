var express = require('express')
var bodyParser = require('body-parser')
var app = express()
var uuidv4 = require('uuid/v4')

const bounties = [
    {
        fname: "Luke",
        lname: "Skywalker",
        living: true,
        price: 300,
        type: 'jedi',
        id: uuidv4()
    },{
        fname: 'Anakin',
        lname: 'Skywalker',
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
    console.log("posting", req.body)
    req.body.id = uuidv4()
    req.body.living = true
    bounties.push(req.body)
    res.send(bounties)
})

app.put("/bounty/:id", (req, res) => {
    console.log("putting", req.body, req.params)
    // console.log(req.body)
    const found = bounties.find(a => a.id === req.params.id)
    const foundIndex = bounties.findIndex(b => b.id === req.params.id)
    const newBounty = Object.assign(found, req.body)
    // console.log("found: ", found, "found index: ", foundIndex, "new bounty: ", newBounty)
    bounties.splice(foundIndex, 1, newBounty)
    console.log(bounties)
    res.send(bounties)
})

app.delete("/bounty/:id", (req, res) => {
    console.log("deleting", req.params)
    bounties.splice(bounties.find(a=>a.id === req.params.id), 1)
    res.send(bounties)
})


app.listen(4000, () => {
    console.log("starting")
})

