var express = require("express");
var router = express.Router();

const { getUsers } = require("../user/controller");

/* GET home page. */
router.get("/", getUsers);

module.exports = router;
