const express = require('express');
const Tasks = require('./tasks-model.js');
const router = express.Router();

router.get('/', (req, res) => {
    Tasks.getTasks()
    .then(response => {
        res.status(200).json(response);
    })
    .catch(err => {
        res.status(500).json({error: err, message: 'Unable to retrieve tasks'});
    });
});

router.post('/', (req, res) => {
    const taskData = req.body;

    Tasks.addTask(taskData)
        .then(task => {
            res.status(201).json(task);
        })
        .catch (err => {
            res.status(500).json({ message: 'Failed to create new task' });
        }); 
});

router.get('/:id', (req, res) => {
    const id = req.params.id;
    Tasks.getTask(id)
    .then(response => {
        res.status(200).json(response);
    })
    .catch(err => {
        res.status(500).json({error: err, message: `Unable to retrieve task of id ${id}`});
    });
});



module.exports = router;