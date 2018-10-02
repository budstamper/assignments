var express = require('express')
var itemRouter = express.Router()
const Inventory = require('../models/inventory')



// get one, put, delete
itemRouter.route('/:id')
//check for id of post and user
    .get((req, res)=>{
        Inventory.findOne({_id: req.params.id},(err, founditem)=>{
            if(err)return res.status(500).send(err)
            return res.status(200).send(founditem)
        })
    })
    .put((req, res)=>{
        Inventory.findOneAndUpdate({
            _id:req.params.id
        },
        req.body,
        (err, updateditem)=>{
            if(err)return res.status(500).send(err)
            return res.status(201).send(updateditem)
        })
    })
    .delete((req, res)=>{
        Inventory.findOneAndRemove({_id: req.params.id}, (err, deleteduser)=>{
            if(err)return res.status(500).send(err)
            return res.status(202).send({deleteduser: deleteduser, msg: "item successfully deleted"})
        })
    })



itemRouter.route('/')
    .get((req, res)=>{
        //returns all
        Inventory.find({},(err,items)=>{
            if(err) return res.status(500).send(err)
            return res.status(200).send(items)
        })
    })
    .post((req, res)=>{
        const newItem = new Inventory(req.body)
        newItem.save((err, item)=> {
            if(err) return res.status(500).send({success:false, err})
            return res.status(201).send({success:true,item})
        })
    })


module.exports = itemRouter

