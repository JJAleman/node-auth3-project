const router = require("express").Router();

const Users = require("./users-model.js");
const restricted = require("../auth/resticted-middleware.js");
const checkRole = require("../auth/check-role-middleware.js");

router.get("/", restricted, checkRole("Admin"), (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

router.get(
  "/something",
  restricted,
  checkRole("Student"),
  checkRole("Tutor"),
  (req, res) => {
    res.end();
  }
);

module.exports = router;
