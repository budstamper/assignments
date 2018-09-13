const express = require('express')
const veggieRouter = express.Router()
const uuid = require('uuid')

const veggies = [
    {
        type: 'spinach',
        id: 1
    },{
        type: 'carrot',
        id: 2
    }
]

// veggieRouter.get('/', (req, res) => {
//     res.send(veggies)
// })

veggieRouter.route('/')
    .get((req,res)=>{
        res.send(veggies)
    })
    .post((req, res) =>{
        var newVeggie = req.body
        newVeggie.id = uuid()
        veggies.push(newVeggie)
        res.send(veggies)
    })

veggieRouter.route("/:id")
    .get((req,res)=>{
        console.log('getting id', req.params.id)
        var index = veggies.findIndex(a=>a.id===Number(req.params.id))
        console.log("index", index, veggies[index])
        res.send(veggies[index])
    })
    .put((req,res)=>{
        var y = veggies.find(a=>a.id===Number(req.params.id))
        for(var i in y){
            if(y.hasOwnProperty(i)){
                if(req.params.hasOwnProperty(i)){
                    y[`${i}`]=req.params[`${i}`]
                }
            }
        }
        veggies[`${veggies.finIndex(a=>a.id===y.id)}`] = y
        res.send(veggies)
    })
    .delete((req,res)=>{
        veggies.splice(veggies.findIndex(a=>a.id===Number(req.params.id)), 1)
        res.send(veggies)
    })

module.exports = veggieRouter