const express = require('express')
const morgan = require('morgan')
const app = express()
const mongoose = require('mongoose')
const PORT = process.env.PORT || 7000
const todoRoutes = require('./routes/todoRoutes')
const bodyParser = require('body-parser')


app.use(morgan('dev'))
app.use(bodyParser.json())

mongoose.connect('mongodb://localhost:27017/todoapp', { useNewUrlParser: true }, () =>{
    console.log('connected to the database')
}).catch(err => { console.log(err) })

app.use('/todos', todoRoutes)



app.listen(7000, ()=>{
    console.log(`Server is running on ${PORT}`)
})



