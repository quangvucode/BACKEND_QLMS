const Loan = require("../models/loan.model");

class LoanService {
    async create(data) {
        const loan = new Loan(data);
        await loan.save();
        return loan;
    }

    async findAll() {
        return await Loan.find()
            .select("_id loanDate returnDate returned") // Chỉ lấy các trường cần thiết của Loan
            .populate({ path: "bookId", select: "title -_id" }) // Chỉ lấy title của Book và bỏ _id
            .populate({ path: "borrowerId", select: "name -_id" }); // Chỉ lấy name của Borrower và bỏ _id
    }

    async findById(id) {
        return await Loan.findById(id)
            .select("_id loanDate returnDate returned") // Chỉ lấy các trường cần thiết của Loan
            .populate({ path: "bookId", select: "title -_id" }) // Chỉ lấy title của Book và bỏ _id
            .populate({ path: "borrowerId", select: "name -_id" }); // Chỉ lấy name của Borrower và bỏ _id
    }

    async update(id, data) {
        return await Loan.findByIdAndUpdate(id, data, { new: true })
            .select("_id loanDate returnDate returned")
            .populate({ path: "bookId", select: "title -_id" })
            .populate({ path: "borrowerId", select: "name -_id" });
    }

    async delete(id) {
        return await Loan.findByIdAndDelete(id);
    }
}

module.exports = LoanService;
