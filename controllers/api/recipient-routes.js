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
  }).then((recipientData) => {
    if (!recipientData) {
      res.status(404).json({
        message: "No recipient found with this id",
      });
      return;
    }
    res.json(recipientData);
  })
  .catch((err)=> {
      res.status(500).json(err);
      console.log(err);
  })
});

// create new recipient
router.post("/", (req, res) => {});

// update recipient
router.put("/:id", (req, res) => {});

// delete a recipient
router.delete("/:id", (req, res) => {});

module.exports = router;
