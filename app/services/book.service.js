const Book = require("../models/book.model");

class BookService {
    async create(data) {
        const book = new Book(data);
        await book.save();
        return book;
    }

    async findAll() {
        return await Book.find();
    }

    async findById(id) {
        return await Book.findById(id);
    }

    async update(id, data) {
        return await Book.findByIdAndUpdate(id, data, { new: true });
    }

    async delete(id) {
        return await Book.findByIdAndDelete(id);
    }

    async deleteAll() {
        const result = await Book.deleteMany();
        return result.deletedCount;
    }
}

module.exports = BookService;
