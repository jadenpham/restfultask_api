const mongoose = require('mongoose');
    Tasks = mongoose.model("Tasks");

module.exports = {
    show: function(req, res){
        Tasks.find({})
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.json(err)
        })
    },
    showOne: function(req ,res){
        Tasks.findOne({_id: req.params.id})
        .then( result => {
            res.json(result);
        })
        .catch(err =>{
            res.json(err);
        })
    },
    create: function(req, res){
        Tasks.create({title: req.params.title, description: req.params.desc, completed: req.params.bool})
        .then(result => {
            res.json(result)
        })
        .catch(err =>{
            res.json(err)
        })
    },
    delete: function(req, res){
        Tasks.deleteOne({_id: req.params.id})
        .then(result => {
            res.json(result);
        })
        .catch(err => {
            res.json(err);
        })
    },
    update: function(req, res){
        Tasks.updateOne({_id: req.params.id}, {$set: {title: req.params.title, description: req.params.desc, completed: req.params.bool}})
        .then(result => {
            res.json(result)
        })
        .catch(err => {
            res.json(err)
        })
    }
}