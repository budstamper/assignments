
// Write an Express server to handle a GET request that returns an object (of any kind) as a response.

// Write a middleware function in a separate JavaScript file that accepts the req, res, and next parameters, 
// adds a property to the req, and allows the server to continue on with it's normal operation.

// Pull that module into your main server code and set it up as middleware.

// Use Postman to make the GET request and test whether your middleware did its job.


var express = require('express')
var app = express()
var bodyParser = require('body-parser')
const gunRouter = require('./gunRouter')


app.use(bodyParser.json())

app.use('/guns', gunRouter)


app.get("/guns",(req,res)=>{
    guns.push(req.params.knife)
    res.send(guns)
})

a.listen(4444,() => {
    console.log(`listening on port ${port}`)
})



