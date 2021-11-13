const router = require("express").Router();
const { Gift, Recipient } = require("../../models");

// get all gifts 
router.get("/", (req, res) => {
    Gift.findAll({
        include: [
            {
                model: Recipient,
                attributes: ['name', 'relationship']
            }
        ]
    })
    .then(giftData => res.json(giftData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// get one gift 
router.get("/:id", (req, res) => {
    
})

// create new gift  
router.post("/", (req, res) => {
    
})

// update gift
router.put("/:id", (req, res) => {
    
})

// delete a recipient
router.delete("/:id", (req, res) => {})

module.exports = router;