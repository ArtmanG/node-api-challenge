const express = require('express');
const Actions = require('../data/helpers/actionModel');
const Projects = require('../data/helpers/projectModel');
const router = express.Router();


//GETs
router.get('/', (req, res) => {
    Actions.get()
    .then(actions => {
        res.status(200).json(actions);
    })
    .catch(error => {
        res.status(500).json({ message: 'Internal Server Error', error})
    })
});

router.get('/:id', (req, res) => {
    Actions.get(req.params.id)
    .then(action => {
        res.status(200).json(action)   
    })
    .catch(error => {
        res.status(404).json({ message: 'No action with that ID', error})
    })
});

//POSTs

//PUTs

//DELETEs

module.exports = router;