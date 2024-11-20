const express = require("express");
const multer = require("multer");
const bookController = require("../controllers/book.controller");

const router = express.Router();

// Cấu hình Multer để lưu ảnh vào thư mục 'uploads'
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "uploads/"); // Thư mục lưu trữ ảnh
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "-" + file.originalname); // Đặt tên file
    },
});

const upload = multer({ storage });

// Tạo sách với upload ảnh
router.post("/", upload.single("image"), bookController.create);

// Cập nhật sách (nếu có ảnh mới)
router.put("/:id", upload.single("image"), bookController.update);

router.get("/", bookController.findAll);
router.get("/:id", bookController.findOne);
router.delete("/:id", bookController.delete);

module.exports = router;
