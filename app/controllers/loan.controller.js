const LoanService = require("../services/loan.service");

exports.create = async (req, res) => {
    try {
        const loanService = new LoanService();
        const document = await loanService.create(req.body);
        res.status(201).json(document);
    } catch (error) {
        res.status(500).json({ message: "Đã xảy ra lỗi khi tạo" });
    }
};

exports.findAll = async (req, res) => {
    try {
        const loanService = new LoanService();
        const documents = await loanService.findAll();

        // Định dạng kết quả trả về
        const results = documents.map(loan => ({
            _id: loan._id,
            bookTitle: loan.bookId.title,
            borrowerName: loan.borrowerId.name,
            loanDate: loan.loanDate,
            returnDate: loan.returnDate,
            returned: loan.returned
        }));

        res.json(results);
    } catch (error) {
        res.status(500).json({ message: "Đã xảy ra lỗi khi truy xuất mượn sách" });
    }
};

exports.findOne = async (req, res) => {
    try {
        const loanService = new LoanService();
        const document = await loanService.findById(req.params.id);

        if (!document) return res.status(404).json({ message: "Không tìm thấy" });

        // Định dạng kết quả trả về
        const result = {
            _id: document._id,
            bookTitle: document.bookId.title,
            borrowerName: document.borrowerId.name,
            loanDate: document.loanDate,
            returnDate: document.returnDate,
            returned: document.returned
        };

        res.json(result);
    } catch (error) {
        res.status(500).json({ message: "Đã xảy ra lỗi khi truy xuất mượn sách" });
    }
};


exports.update = async (req, res) => {
    try {
        const loanService = new LoanService();
        const document = await loanService.update(req.params.id, req.body);
        if (!document) return res.status(404).json({ message: "Không tìm thấy" });
        res.json({ message: "Đã cập nhật thành công" });
    } catch (error) {
        res.status(500).json({ message: "Đã xảy ra lỗi khi cập nhật mượn sách" });
    }
};

exports.delete = async (req, res) => {
    try {
        const loanService = new LoanService();
        const document = await loanService.delete(req.params.id);
        if (!document) return res.status(404).json({ message: "Không tìm thấy" });
        res.json({ message: "Xoá thành công" });
    } catch (error) {
        res.status(500).json({ message: "Đã xảy ra lỗi khi xóa mượn sách" });
    }
};
