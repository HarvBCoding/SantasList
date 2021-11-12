const router = require("express").Router();
const { Recipient } = require("../../models");

// get all recipients
router.get('/', (req, res)=> {
    Recipient.findAll({

    })
        .then(recipientData => res.json(recipientData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// get one recipient
router.get('/:id', (req, res) => {

});

// create new recipient
router.post('/', (req, res) => {

});

// update recipient
router.put('/:id', (req, res) => {

});

// delete a recipient
router.delete('/:id', (req, res) => {

});

module.exports = router;