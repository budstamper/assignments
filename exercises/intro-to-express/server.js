var express = require('express')
var app = express()

app.get('/', (req, res)=>{
    res.send("Hello Bud")
})

// app.post()

app.listen(6001, ()=>console.log("server starting"))