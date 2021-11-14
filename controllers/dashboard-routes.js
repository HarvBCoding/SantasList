const router = require('express').Router();
const { Recipient, Gift, User } = require('../models');

// GET all recipients for dashboard
router.get('/', (req, res) => {
    Recipient.findAll({
        where: {
            user_id: req.session.user_id
        },
        attributes: ['name', 'relationship'],
        include: [
            {
                model: Gift,
                attributes: ['gift_name', 'price']
            }
        ]
    })
    .then(recipientData => {
        const recipients = recipientData.map(recipient => recipient.get({ plain: true}));
        res.render('dashboard', { recipients, loggedIn: true });
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// edit single post
router.get('/edit/:id', (req, res) => {
    Recipient.findByPk(req.params.id, {
        attributes: ['name', 'relationship'],
        include: [
            {
                model: Gift,
                attributes: ['gift_name', 'price']
            }
        ]
    })
    .then(recipientData => {
        if (recipientData) {
            const rec = recipientData.get({ plain: true });
            
            res.render('edit-recipient', {rec, loggedIn: true});

        } else {
            res.status(404).end();
        }
    })
    .catch(err => {
        res.status(500).json(err);
    });
});

module.exports = router;