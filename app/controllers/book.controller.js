const BookService = require("../services/book.service");

exports.create = async (req, res) => {
    try {
        const bookData = {
            ...req.body,
            image: req.file ? `/uploads/${req.file.filename}` : null, // Thêm đường dẫn ảnh nếu có
        };
        const bookService = new BookService();
        const document = await bookService.create(bookData);
        res.status(201).json(document);
    } catch (error) {
        res.status(500).json({ message: "Đã xảy ra lỗi khi tạo sách" });
    }
};

exports.findAll = async (req, res) => {
    try {
        const bookService = new BookService();
        const documents = await bookService.findAll();
        res.json(documents);
    } catch (error) {
        res.status(500).json({ message: "Đã xảy ra lỗi khi truy xuất sách" });
    }
};

exports.findOne = async (req, res) => {
    try {
        const bookService = new BookService();
        const document = await bookService.findById(req.params.id);
        if (!document) return res.status(404).json({ message: "Không tìm thấy sách" });
        res.json(document);
    } catch (error) {
        res.status(500).json({ message: "Đã xảy ra lỗi khi truy xuất sách" });
    }
};

exports.update = async (req, res) => {
    try {
        const bookData = {
            ...req.body,
            image: req.file ? `/uploads/${req.file.filename}` : req.body.image, // Giữ ảnh cũ nếu không upload mới
        };
        const bookService = new BookService();
        const document = await bookService.update(req.params.id, bookData);
        if (!document) return res.status(404).json({ message: "Không tìm thấy sách" });
        res.json(document);
    } catch (error) {
        res.status(500).json({ message: "Đã xảy ra lỗi khi cập nhật sách" });
    }
};

exports.delete = async (req, res) => {
    try {
        const bookService = new BookService();
        const document = await bookService.delete(req.params.id);
        if (!document) return res.status(404).json({ message: "Không tìm thấy sách" });
        res.json({ message: "Đã xóa sách thành công" });
    } catch (error) {
        res.status(500).json({ message: "Đã xảy ra lỗi khi xóa sách" });
    }
};
