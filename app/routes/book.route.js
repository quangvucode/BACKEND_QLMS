const express = require("express");
const bookController = require("../controllers/book.controller");

const router = express.Router();

router.post("/", bookController.create);
router.get("/", bookController.findAll);
router.get("/:id", bookController.findOne);
router.put("/:id", bookController.update);
router.delete("/:id", bookController.delete);

module.exports = router;
