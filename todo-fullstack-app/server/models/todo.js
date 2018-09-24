const mongoose = require('mongoose')


    //Blueprint for all Todos
const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: String,
    imgUrl: String,
    completed: Boolean,
    price: Number,
    // user: {
    //     type: Schema.types.ObjectId,
    //     ref: "User"
    // }
})

module.exports = mongoose.model("Todo", todoSchema)





// todo:{
//     title: 'required',
//     description: '',
//     imgUrl: '',
//     completed: Boolean,
//     price: number
// }