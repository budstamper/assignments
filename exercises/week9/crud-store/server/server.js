var express = require('express')
var app = express()
var morgan = require("morgan")
var mongoose = require('mongoose')
require('dotenv').config()
const PORT = process.env.PORT || 8989
const invRoutes = require('./routes/inventory')

app.use(morgan('dev'))
app.use(express.json())

//connect to mongo
mongoose.connect('mongodb://localhost:27017/inventory', { useNewUrlParser: true})
    .then(()=>console.log('Successfully connected to mongoDB'))
    .catch(err=>console.log(err))

app.use('/inventory', invRoutes)

app.listen(PORT, () => {
    console.log("starting")
})