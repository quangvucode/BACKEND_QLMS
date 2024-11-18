const BorrowerService = require("../services/borrower.service");

exports.create = async (req, res) => {
    try {
        const borrowerService = new BorrowerService();
        const document = await borrowerService.create(req.body);
        res.status(201).json(document);
    } catch (error) {
        res.status(500).json({ message: "Đã xảy ra lỗi khi tạo mượn sách" });
    }
};

exports.findAll = async (req, res) => {
    try {
        const borrowerService = new BorrowerService();
        const documents = await borrowerService.findAll();
        res.json(documents);
    } catch (error) {
        res.status(500).json({ message: "Đã xảy ra lỗi khi truy xuất người mượn sách" });
    }
};

exports.findOne = async (req, res) => {
    try {
        const borrowerService = new BorrowerService();
        const document = await borrowerService.findById(req.params.id);
        if (!document) return res.status(404).json({ message: "Không tìm thấy người mượn sách" });
        res.json(document);
    } catch (error) {
        res.status(500).json({ message: "Đã xảy ra lỗi khi truy xuất người mượn sách" });
    }
};

exports.update = async (req, res) => {
    try {
        const borrowerService = new BorrowerService();
        const document = await borrowerService.update(req.params.id, req.body);
        if (!document) return res.status(404).json({ message: "Không tìm thấy người mượn sách" });
        res.json({ message: "Người mượn sách được cập nhật thành công" });
    } catch (error) {
        res.status(500).json({ message: "Đã xảy ra lỗi khi cập nhật người mượn sách" });
    }
};

exports.delete = async (req, res) => {
    try {
        const borrowerService = new BorrowerService();
        const document = await borrowerService.delete(req.params.id);
        if (!document) return res.status(404).json({ message: "Không tìm thấy người mượn sách" });
        res.json({ message: "Người mượn sách được cập nhật thành công" });
    } catch (error) {
        res.status(500).json({ message: "Đã xảy ra lỗi khi xóa người mượn sách" });
    }
};
