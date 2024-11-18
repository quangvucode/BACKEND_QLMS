const BookService = require("../services/book.service");

exports.create = async (req, res) => {
    try {
        const bookService = new BookService();
        const document = await bookService.create(req.body);
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
        const bookService = new BookService();
        const document = await bookService.update(req.params.id, req.body);
        if (!document) return res.status(404).json({ message: "Không tìm thấy sách" });
        res.json({ message: "Sách được cập nhật thành công" });
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
