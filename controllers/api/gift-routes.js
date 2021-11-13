const router = require("express").Router();
const { Gift, Recipient } = require("../../models");

// get all gifts
router.get("/", (req, res) => {
    Gift.findAll({
        include: [
            {
                model: Recipient,
                attributes: ["name", "relationship"],
            },
        ],
    })
        .then((giftData) => res.json(giftData))
        .catch((err) => {
            console.log(err);
            res.status(500).json(err);
        });
});

// get one gift
router.get("/:id", (req, res) => {
    Gift.findOne({
        where: {
            id: req.params.id,
        },
        include: [
            {
                model: Recipient,
                attributes: ["name", "relationship"],
            },
        ],
    })
        .then((giftData) => {
            if (!giftData) {
                res.status(404).json({
                    message: "No recipient found with this id",
                })
                return;
            }
            res.json(giftData);
        })
        .catch((err) => {
            res.status(500).json(err);
            console.log(err);
        });
});

// create new gift
router.post("/", (req, res) => {
    Gift.create({
        gift_name: req.body.gift_name,
        price: req.body.price,
        recipient_id: req.body.recipient_id
    })
        .then(giftData => res.json(giftData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// update gift
router.put("/:id", (req, res) => {
    Gift.update(
        {
            gift_name: req.body.gift_name,
            price: req.body.price
        },
        {
            where: {
                id: req.params.id
            }
        }
    )
    .then(giftData => {
        if (!giftData) {
            res.status(404).json({ message: 'No post found with this id' });
            return;
        }
        res.json(giftData);
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
}); 

// delete a recipient
router.delete("/:id", (req, res) => { });

module.exports = router;
