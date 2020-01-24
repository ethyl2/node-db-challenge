const express = require('express');
const Projects = require('./projects-model.js');
const router = express.Router();

router.get('/', (req, res) => {
    Projects.getProjects()
    .then(response => {
        res.status(200).json(response);
    })
    .catch(err => {
        res.status(500).json({error: err, message: 'Unable to retrieve projects'});
    });
});

router.post('/', (req, res) => {
    const projectData = req.body;

    Projects.addProject(projectData)
        .then(project => {
            res.status(201).json(project);
        })
        .catch (err => {
            res.status(500).json({ message: 'Failed to create new project' });
        }); 
})

router.get('/:id', (req, res) => {
    const id = req.params.id;

    Projects.getProject(id)
    .then(response => {
        res.status(200).json(response);
    })
    .catch(err => {
        res.status(500).json({error: err, message: `Unable to retrieve project of id ${id}`});
    });
})

module.exports = router;
