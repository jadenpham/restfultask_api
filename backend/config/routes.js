var mongoose = require('mongoose');
    Tasks = mongoose.model("Tasks");

var tasks = require('../controllers/tasks.js');

module.exports = function(app){
    app.get('/', function(req, res){
        tasks.show(req, res);
    })
    app.get('/:id', function(req, res){
        tasks.showOne(req, res);
    })
    app.get('/new/:title/:desc/:bool', function(req ,res){
        tasks.create(req ,res);
    })
    app.get('/remove/:id', function(req, res){
        tasks.delete(req, res);
    })
    app.get('/update/:id/:title/:desc/:bool', function(req ,res){
        tasks.update(req, res);
    })
}
