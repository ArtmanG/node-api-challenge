const express = require('express');
const Actions = require('../data/helpers/projectModel');
const router = express.Router();

router.get('/', (req, res) => {
    res.json({ api: '/api/projects'});
});

module.exports = router;