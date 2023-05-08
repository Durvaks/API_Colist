const mongoose = require('mongoose');

const TasklistSchema = mongoose.Schema({
    name: { type: String, required: true },
    creator:{ type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task' }]
});

module.exports = mongoose.model('Tasklist', TasklistSchema)

