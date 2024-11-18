const express = require("express");
const loanController = require("../controllers/loan.controller");

const router = express.Router();

// Tạo mới một giao dịch mượn sách
router.post("/", loanController.create);

// Lấy danh sách tất cả các giao dịch mượn sách
router.get("/", loanController.findAll);

// Lấy thông tin giao dịch mượn sách theo ID
router.get("/:id", loanController.findOne);

// Cập nhật thông tin giao dịch mượn sách theo ID
router.put("/:id", loanController.update);

// Xóa giao dịch mượn sách theo ID
router.delete("/:id", loanController.delete);

module.exports = router;
