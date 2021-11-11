const router = require("express").Router();
const { User } = require("../../models");

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

  router.get("/:id", (req, res) => {
    User.findOne({
      attributes: {
        exclude: ["password"],
      },
      where: {
        username: req.params.username,
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
});

module.exports = router;
