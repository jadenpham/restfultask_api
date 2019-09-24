const mongoose = require('mongoose');
require('../config/mongoose.js');

var TaskSchema = new mongoose.Schema({
    title: {type: String},
    description: {type: String},
    completed: {type: Boolean},
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
})

mongoose.model("Tasks", TaskSchema);

var Tasks = mongoose.model("Tasks");

mongoose.Promise = global.Promise;