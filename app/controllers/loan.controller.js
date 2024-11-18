const LoanService = require("../services/loan.service");

exports.create = async (req, res) => {
    try {
        const loanService = new LoanService();
        const document = await loanService.create(req.body);
        res.status(201).json(document);
    } catch (error) {
        console.error("Error creating loan:", error);
        res.status(500).json({ message: "Đã xảy ra lỗi khi tạo mượn sách", error: error.message });
    }
};

exports.findAll = async (req, res) => {
    try {
        const loanService = new LoanService();
        const documents = await loanService.findAll();

        // Định dạng kết quả trả về
        const results = documents.map(loan => ({
            _id: loan._id,
            bookTitle: loan.bookId?.title, // Sử dụng optional chaining để tránh lỗi khi bookId hoặc title không tồn tại
            borrowerName: loan.borrowerId?.name, // Sử dụng optional chaining
            loanDate: loan.loanDate,
            returnDate: loan.returnDate,
            returned: loan.returned
        }));

        res.json(results);
    } catch (error) {
        console.error("Error fetching loans:", error);
        res.status(500).json({ message: "Đã xảy ra lỗi khi truy xuất mượn sách", error: error.message });
    }
};

exports.findOne = async (req, res) => {
    try {
        const loanService = new LoanService();
        const document = await loanService.findById(req.params.id);

        if (!document) {
            return res.status(404).json({ message: "Không tìm thấy mượn sách với ID yêu cầu" });
        }

        // Định dạng kết quả trả về
        const result = {
            _id: document._id,
            bookTitle: document.bookId?.title,
            borrowerName: document.borrowerId?.name,
            loanDate: document.loanDate,
            returnDate: document.returnDate,
            returned: document.returned
        };

        res.json(result);
    } catch (error) {
        console.error("Error fetching loan:", error);
        res.status(500).json({ message: "Đã xảy ra lỗi khi truy xuất mượn sách", error: error.message });
    }
};

exports.update = async (req, res) => {
    try {
        const loanService = new LoanService();
        
        // Nếu loan được đánh dấu là "Đã trả", cập nhật returnDate thành ngày hiện tại
        if (req.body.returned === true) {
            req.body.returnDate = new Date(); // Đặt ngày hiện tại làm ngày trả
        }
        
        const document = await loanService.update(req.params.id, req.body);
        
        if (!document) return res.status(404).json({ message: "Không tìm thấy mượn sách với ID yêu cầu" });
        
        res.json({ message: "Đã cập nhật thành công", data: document });
    } catch (error) {
        console.error("Error updating loan:", error);
        res.status(500).json({ message: "Đã xảy ra lỗi khi cập nhật mượn sách", error: error.message });
    }
};

exports.delete = async (req, res) => {
    try {
        const loanService = new LoanService();
        const document = await loanService.delete(req.params.id);

        if (!document) {
            return res.status(404).json({ message: "Không tìm thấy mượn sách với ID yêu cầu" });
        }

        res.json({ message: "Xoá thành công" });
    } catch (error) {
        console.error("Error deleting loan:", error);
        res.status(500).json({ message: "Đã xảy ra lỗi khi xóa mượn sách", error: error.message });
    }
};
