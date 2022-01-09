const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    course: {
        type: String,
        required: true
    },
    projectName: {
        type: String,
        required: true
    },
    dueDate: {
        type: String,
        required: true
    },
    finished: {
        type: Boolean,
        default: false
    }
})

const Project = mongoose.model('projects',projectSchema);
module.exports = Project;