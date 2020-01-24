const express = require('express');
const Resources = require('./resources-model.js');
const router = express.Router();

router.get('/', (req, res) => {
    Resources.getResources()
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json({error: err, message: 'Unable to retrieve resources'});
        });
}
);

router.get('/:id', (req, res) => {
    const id = req.params.id;
    Resources.getResource(id)
        .then(response => {
            res.status(200).json(response);
        })
        .catch(err => {
            res.status(500).json({error: err, message: `Unable to retrieve resource of id ${id}`});
        });
});

router.post('/', (req, res) => {
    const resourceData = req.body;

    Resources.addResource(resourceData)
        .then(resource => {
            res.status(201).json(resource);
        })
        .catch (err => {
            res.status(500).json({ message: 'Failed to create new resource' });
        }); 
});

module.exports = router;