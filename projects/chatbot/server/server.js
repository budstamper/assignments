var express = require('express')
var app = express()
var uuidv4 = require('uuid/v4')
var morgan = require("morgan")
var mongoose = require('mongoose')
const PORT = process.env.PORT || 4004
const chatRoutes = require('../routes/chatRoutes')

app.use(morgan('dev'))
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/chatbot', { useNewUrlParser: true})
    .then(()=>console.log('Successfully connected to mongoDB'))
    .catch(err=>console.log(err))

app.use('/chat', chatRoutes)


app.listen(PORT, () => {
    console.log("starting")
})

