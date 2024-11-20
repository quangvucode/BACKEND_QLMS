const mongoose = require("mongoose");

// Định nghĩa schema (cấu trúc) cho đối tượng Book (Sách)
const bookSchema = new mongoose.Schema({
    // Trường title (tên sách), kiểu dữ liệu là String, bắt buộc phải có
    title: { type: String, required: true },
    
    // Trường author (tác giả sách), kiểu dữ liệu là String, bắt buộc phải có
    author: { type: String, required: true },
    
    // Trường publicationYear (năm xuất bản), kiểu dữ liệu là Number, bắt buộc phải có
    publicationYear: { type: Number, required: true },
    
    // Trường publisher (nhà xuất bản), kiểu dữ liệu là String, bắt buộc phải có
    publisher: { type: String, required: true },
    
    // Trường copies (số lượng bản sao), kiểu dữ liệu là Number, giá trị mặc định là 1
    copies: { type: Number, default: 1 },
    
    // Trường image (ảnh), kiểu dữ liệu là String (URL), không bắt buộc
    image: { type: String, default: null },
});

module.exports = mongoose.model("Book", bookSchema);
