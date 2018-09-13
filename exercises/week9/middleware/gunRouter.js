
var express = require('express')
var app = express()
var bodyParser = require('body-parser')
const gunRouter = require('./gunRouter')


var guns = [
    {
        name: "m16"
    },{
        name: "handgun"
    }
]

gunRouter.route("/")
    ,get

app.use((req, res, next)=>{
    req.params.knife = {name: "knife", sharp: true}
    next()
})


module.exports = gunRouter


