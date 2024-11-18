const express = require("express");
const borrowerController = require("../controllers/borrower.controller");

const router = express.Router();

// Tạo mới một người mượn sách
router.post("/", borrowerController.create);

// Lấy danh sách tất cả người mượn
router.get("/", borrowerController.findAll);

// Lấy thông tin người mượn theo ID
router.get("/:id", borrowerController.findOne);

// Cập nhật thông tin người mượn theo ID
router.put("/:id", borrowerController.update);

// Xóa người mượn theo ID
router.delete("/:id", borrowerController.delete);

module.exports = router;
