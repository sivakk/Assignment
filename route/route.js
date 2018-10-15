var express = require('express');
var router = express.Router();
const Person = require('../models/list');

router.get('/test', (req, res, next) => {
    Person.find(function (err, persons) {
        if (err)
            res.json(err);
        else {
            res.json(persons);
        }

    })
});

router.post('/post_route', (req, res, next) => {
    let newPerson = new Person({
        personName: req.body.personName,
        phoneNumber: req.body.phoneNumber
    })


    newPerson.save((err, item) => {

        if (err) {
            res.json(err)
        } else {
            res.json({
                msg: 'item added to db'
            });
        }
    });
});


router.put('/person/:id', (req, res, next) => {

    Person.findOneAndUpdate({
            _id: req.params.id
        }, {
            $set: {
                personName: req.body.personName,
                phoneNumber: req.body.phoneNumber
            }
        },
        function (err, result) {
            if (err) {
                res.json(err);
            } else {
                res.json(result)
            }

        });
});

router.delete('/person/:id', (req, res, next) => {
    Person.remove({
        _id: req.params.id
    }, function (err, result) {
        if (err) {
            res.json(err);
        } else {
            res.json(result);
        }
    });
});
module.exports = router;