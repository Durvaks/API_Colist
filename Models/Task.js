const mongoose = require('mongoose');

const TaskSchema = mongoose.Schema({
    description:{type: String, required: true},
    creationDate:{type: Date, require: true},
    creator:{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, index: true},
    comment:{
        text: {type: String},
        date: {type: Date}
    },    
    lastChange:{type: Date},
    userLastChange:{ type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    permissions:[{
        user: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
        type: {type: String}
    }],
    type:{type: String}
})

module.exports = mongoose.model('Task', TaskSchema);