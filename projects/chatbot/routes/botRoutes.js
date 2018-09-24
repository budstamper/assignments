var express = require('express')
var chatRouter = express.Router()
const chats = require('../models/Bot')




chatRouter.route('/')
    .get((req, res)=>{
        chats.find((err, chats)=>{
            if(err) return res.status(500).send(err)
            return res.status(200).send(chats)
        }) //returns all
        // Todos.find({ completed: false || req.query.completed})
    })
    .post((req, res)=>{
        console.log(req.body)
        const newChat = new chats(req.body)
        newChat.save((err, newSavedChat)=>{
            if (err) return res.status(500).send(err)
            return res.status(201).send(newSavedChat)
        }) //command to save to mongo database
    })



chatRouter.route('/:id')
    .get((req, res)=>{
        chats.findOne({_id: req.params.id},(err, foundChat)=>{
            if(err)return res.status(500).send(err)
            return res.status(200).send(foundChat)
        })
    })
    .put((req, res)=>{
        chats.findOneAndUpdate({
            _id:req.params.id
        },
        req.body,
        (err, updatedChat)=>{
            if(err)return res.status(500).send(err)
            return res.status(201).send(updatedChat)
        })
    })
    .delete((req, res)=>{
        chats.findOneAndRemove({_id: req.params.id}, (err, deletedChat)=>{
            if(err)return res.status(500).send(err)
            return res.status(202).send({deletedChat: deletedChat, msg: "Chat successfully deleted"})
        })
    })


module.exports = chatRouter