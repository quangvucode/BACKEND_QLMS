const express = require("express");
const userController = require("../controllers/user.controller");

const router = express.Router();

// Định tuyến đăng ký
router.post("/register", userController.register);

// Định tuyến đăng nhập
router.post("/login", userController.login);

module.exports = router;
