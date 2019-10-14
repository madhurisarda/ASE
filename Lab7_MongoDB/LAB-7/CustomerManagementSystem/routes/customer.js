var express = require('express');
var router = express.Router();
var Customer = require('../models/Customer.js');

/* GET ALL CUSTOMER */
router.get('/', function (req, res, next) {
  Customer.find(function (err, products) {
    if (err) return next(err);
    res.json(products);
  });
});

/* GET SINGLE CUSTOMER BY ID */
router.get('/:id', function (req, res, next) {
  Customer.findById(req.params.id, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* SAVE CUSTOMER */
router.post('/', function (req, res, next) {
  Customer.create(req.body, function (err, post) {
    if (err) return next(err);
    res.json(post);
  });
});

/* UPDATE CUSTOMER */
router.put('/:id', function(req, res, next){
  Customer.findByIdAndUpdate(req.params.id, req.body, function (err, post){
    if (err) return next(err);
    res.json(post);
  })
})
/* DELETE CUSTOMER */
router.delete('/:id', function(req, res, next){
  Customer.findByIdAndDelete(req.params.id, function (err, post){
    if (err) return next(err);
    res.json(post);
  })
})
module.exports = router;
