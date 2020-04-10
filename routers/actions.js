const express = require('express');
const Actions = require('../data/helpers/actionModel');
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

router.post('/', (req, res) => {
    Actions.insert(req.body)
    .then(action => {
        res.status(201).json(action)
    })
    .catch(error => {
        res.status(500).json({ message: 'Internal Server Error', error})
    })
});

//PUTs

router.put('/:id', (req, res) => {
    Actions.update(req.params.id, req.body)
    .then(update => {
        res.status(201).json(update)
    })
    .catch(error => {
        res.status(500).json({ message: 'Internal Server Error', error})
    })
});

//DELETEs

router.delete('/:id', (req, res) => {
    Actions.remove(req.params.id)
    .then(count => {
        if (count > 0) {
            res.status(200).json({ message: "Action has been destroyed." })
        } else {
            res.status(404).json({ message: "No Action to delete at this ID" })
        }
    })
    .catch(error => {
        res.status(500).json({ message: 'Internal Server Error', error})
    })
});

module.exports = router;