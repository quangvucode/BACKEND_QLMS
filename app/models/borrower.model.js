const mongoose = require("mongoose");

const borrowerSchema = new mongoose.Schema({
    // Trường name (tên người mượn), kiểu dữ liệu là String, bắt buộc phải có
    name: { type: String, required: true },
    // Trường contact (liên hệ người mượn), kiểu dữ liệu là String
    contact: { type: String },   
     // Trường email (email người mượn), kiểu dữ liệu là String,bắt buộc phải có
    email: { type: String, required: true },
    // Số điện thoại của người mượn, kiểu String, bắt buộc
    phone: { type: String, required: true }
});

module.exports = mongoose.model("Borrower", borrowerSchema);
