const mongoose = require('mongoose')

const chatSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    bot: {
        type: String,
        required: true
    },
    inResponse:{
        type: String,
    }
})



module.exports = mongoose.model('chat', chatSchema)

