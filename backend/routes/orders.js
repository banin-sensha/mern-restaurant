const router = require('express').Router();
let Orders = require('../models/orders.model');

router.route('/').get((req, res) => {
    Orders.find()
        .then(orders => res.json(orders))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.delete('/:id', function (req, res, next) {
    Orders.findByIdAndRemove(req.params.id, req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});

router.post('/', function (req, res, next) {
    Orders.create(req.body, function (err, post) {
        if (err) return next(err);
        res.json(post);
    });
});


module.exports = router;    