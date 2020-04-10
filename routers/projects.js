const express = require('express');
const Projects = require('../data/helpers/projectModel');
const router = express.Router();


//GETs
router.get('/', (req, res) => {
    Projects.get()
    .then(projects => {
        res.status(200).json(projects);
    })
    .catch(error => {
        res.status(500).json({ message: 'Internal Server Error', error})
    })
});

router.get('/:id', (req, res) => {
    Projects.get(req.params.id)
    .then(project => {
        res.status(200).json(project)   
    })
    .catch(error => {
        res.status(404).json({ message: 'No project with that ID', error})
    })
});

router.get('/:id/actions', (req, res) => {
    Projects.getProjectActions(req.params.id)
    .then(actions => {
        res.status(200).json(actions)
    })
    .catch(error => {
        res.status(500).json({ message: 'Cannot get project actions', error})
    })
});


//POSTs

router.post('/', (req, res) => {
    Projects.insert(req.body)
    .then(project => {
        res.status(201).json(project)
    })
    .catch(error => {
        res.status(500).json({ message: 'Internal Server Error', error})
    })
});

//PUTs

router.put('/:id', (req, res) => {
    Projects.update(req.params.id, req.body)
    .then(update => {
        res.status(201).json(update)
    })
    .catch(error => {
        res.status(500).json({ message: 'Internal Server Error', error})
    })
});


//DELETEs

router.delete('/:id', (req, res) => {
    Projects.remove(req.params.id)
    .then(count => {
        if (count > 0) {
            res.status(200).json({ message: "Project has been destroyed." })
        } else {
            res.status(404).json({ message: "No project to delete at this ID" })
        }
    })
    .catch(error => {
        res.status(500).json({ message: 'Internal Server Error', error})
    })
});



module.exports = router;