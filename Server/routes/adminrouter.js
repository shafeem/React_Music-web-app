const express = require("express");
const authMiddleWare = require("../jwt/auth");
const { adminLogin } = require("../controller/admincontroller");

const router = express.Router();

router.post("/adminVerify", adminLogin);

module.exports = router;
