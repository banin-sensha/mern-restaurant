const router = require('express').Router();
let Food = require('../models/foodModel');

router.route('/').get((req, res) => {
    Food.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;