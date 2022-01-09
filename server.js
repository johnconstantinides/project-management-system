const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
let Project = require('./models/project.model')

require('dotenv').config();

const app = express()
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("Connected to database")
})


app.listen(port, () => {
    console.log(`server running on port ${port}`)
})

app.get('/projects', (req,res) => {
    Project.find()
        .then(projects => res.json(projects))
        .catch(err => res.status(400).json('Error: ' + err))
})

app.post('/projects/add',(req,res) => {
    const newProject = new Project({
        name: req.body.name,
        projectName: req.body.projectName
    })

    newProject.save()
        .then(() => res.json('New project added'))
        .catch(err => res.status(400).json('Error ' + err));
})

app.post('/projects/update/:id', (req,res) => {
    Project.findById(req.params.id)
        .then(project => {
            project.name = req.body.name;
            project.projectName = req.body.projectName

            project.save()
                .then(() => res.json('Project has been updated'))
                .catch(err => res.status(400).json('Error '+ err));
        })
        .catch(err => res.status(400).json('Error: ' + err))
})

app.delete('/projects/delete/:id', (req,res) => {
    Project.findByIdAndDelete(req.params.id)
        .then(() => res.json('Project deleted'))
        .catch(err => res.status(400).json("Error " + err))
})
