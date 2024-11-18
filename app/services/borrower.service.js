const Borrower = require("../models/borrower.model");

class BorrowerService {
    async create(data) {
        const borrower = new Borrower(data);
        await borrower.save();
        return borrower;
    }

    async findAll() {
        return await Borrower.find();
    }

    async findById(id) {
        return await Borrower.findById(id);
    }

    async update(id, data) {
        return await Borrower.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id) {
        return await Borrower.findByIdAndDelete(id);
    }
}

module.exports = BorrowerService;
