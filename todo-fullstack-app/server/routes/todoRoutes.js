const express = require('express')
const todoRouter = express.Router()
const Todos = require('../models/todo')




todoRouter.route('/')
    .get((req, res)=>{
        Todos.find((err, todos)=>{
            if(err) return res.status(500).send(err)
            return res.status(200).send(todos)
        }) //returns all
        // Todos.find({ completed: false || req.query.completed})
    })
    .post((req, res)=>{
        console.log(req.body)
        const newTodo = new Todos(req.body)
        newTodo.save((err, newSavedTodo)=>{
            if (err) return res.status(500).send(err)
            return res.status(201).send(newSavedTodo)
        }) //command to save to mongo database
    })



todoRouter.route('/:id')
    .get((req, res)=>{
        Todos.findOne({_id: req.params.id},(err, foundTodo)=>{
            if(err)return res.status(500).send(err)
            return res.status(200).send(foundTodo)
        })
    })
    .put((req, res)=>{
        Todos.findOneAndUpdate({
            _id:req.params.id
        },
        req.body,
        (err, updataedTodo)=>{
            if(err)return res.status(500).send(err)
            return res.status(201).send(updatedTodo)
        })
    })
    .delete((req, res)=>{
        Todos.findOneAndRemove({_id: req.params.id}, (err, deletedTodo)=>{
            if(err)return res.status(500).send(err)
            return res.status(202).send({deletedTodo: deletedTodo, msg: "Todo successfully deleted"})
        })
    })



module.exports = todoRouter