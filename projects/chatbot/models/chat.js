const mongoose = require('mongoose')

const chatSchema = new mongoose.Schema({
    text: {
        type: String,
        required: true
    },
    bot: {
        type: String,
        required: true
    }
})



module.exports = mongoose.model('chat', chatSchema)

