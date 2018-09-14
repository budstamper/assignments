var express = require('express')
var app = express()
var uuidv4 = require('uuid/v4')
var morgan = require("morgan")
var mongoose = require('mongoose')


app.use(express.json())
app.use(morgan('dev'))

mongoose.connect('mongodb.://localhost:27017/mogoose-intro', { useNewUrlParser: true})
    .then(()=>console.log('Successfully connected to mongoDB'))
    .catch(err=>console.log(err))


app.use('/bounty', require('./bountyRouter.js'))


app.listen(4001, () => {
    console.log("starting")
})