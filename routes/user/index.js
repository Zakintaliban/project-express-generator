var express = require("express");
var router = express.Router();

const { logout, register, authentication, getUsers } = require("./controller");

/* GET users listing. */
router.get("/", getUsers);
router.get("/logout", logout);
router.post("/register", register);
router.post("/authentication", authentication);

module.exports = router;
