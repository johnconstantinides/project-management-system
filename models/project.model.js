const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const projectSchema = new Schema({
    name: String,
    projectName: String,
    finished: {
        type: Boolean,
        default: false
    },
})

const Project = mongoose.model('projects',projectSchema);
module.exports = Project;