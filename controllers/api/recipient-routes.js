const router = require("express").Router();
const { Recipient } = require("../../models");

// get all recipients
router.get("/", (req, res) => {
  Recipient.findAll({})
    .then((recipientData) => res.json(recipientData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get one recipient
router.get("/:id", (req, res) => {
  Recipient.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then((recipientData) => {
      if (!recipientData) {
        res.status(404).json({
          message: "No recipient found with this id",
        });
        return;
      }
      res.json(recipientData);
    })
    .catch((err) => {
      res.status(500).json(err);
      console.log(err);
    });
});

// create new recipient
router.post("/", (req, res) => {
  Recipient.create({
    name: req.body.name,
    relationship: req.body.relationship,
    user_id: req.session.user_id,
  })
    .then((recipientData) => res.json(recipientData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// update recipient
router.put("/:id", (req, res) => {
  Recipient.update(
    {
      name: req.body.name,
      relationship: req.body.relationship
    },
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(recipientData => {
      if (!recipientData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(recipientData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete a recipient
router.delete("/:id", (req, res) => {
  
});

module.exports = router;
