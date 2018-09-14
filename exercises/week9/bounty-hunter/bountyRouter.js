var express = require('express')
var bountyRouter = express.Router()

bountyRouter.get("/",(req,res)=>{
    res.send("hello World")
})





module.exports = bountyRouter