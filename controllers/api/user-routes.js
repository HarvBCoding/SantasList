const router = require("express").Router();
const { User } = require("../../models");

// GET all users
router.get("/", (req, res) => {
  User.findAll({
    attributes: {
      exclude: ["password"],
    },
  })
    .then((userData) => res.json(userData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Get one user
router.get("/:id", (req, res) => {
  User.findOne({
    attributes: { exclude: ["password"] },
    where: {
      id: req.params.id,
    },
  })
    .then((userData) => {
      if (!userData) {
        res.status(404).json({
          message: "No user found with this username",
        });
        return;
      }
      res.json(userData);
    })
    .catch((err) => {
      res.status(500).json(err);
      console.log(err);
    });
});

// create a new user
router.post('/', (req, res) => {
  User.create(req.body)
    .then((user) => res.json(user))
    .catch(err => {
      console.log(err);
      res.status(400).json(err);
    });
});

module.exports = router;
