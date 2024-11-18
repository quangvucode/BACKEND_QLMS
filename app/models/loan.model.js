const mongoose = require("mongoose");

// Định nghĩa schema (cấu trúc) cho đối tượng Loan (Giao Dịch Mượn Sách)
const loanSchema = new mongoose.Schema({
    // Trường bookId tham chiếu đến ObjectId của một tài liệu trong mô hình Book
    // - ref: "Book": Tham chiếu đến mô hình "Book" để xác định sách được mượn
    bookId: { type: mongoose.Schema.Types.ObjectId, ref: "Book", required: true },
    
    // Trường borrowerId tham chiếu đến ObjectId của một tài liệu trong mô hình Borrower
    // - ref: "Borrower": Tham chiếu đến mô hình "Borrower" để xác định người mượn
    borrowerId: { type: mongoose.Schema.Types.ObjectId, ref: "Borrower", required: true },
    
    // Trường loanDate lưu ngày mượn sách
    // - default: Date.now: Giá trị mặc định là ngày giờ hiện tại khi tạo mới
    loanDate: { type: Date, default: Date.now },
    
    // Trường returnDate lưu ngày trả sách
    // - Không có required, vì ngày trả có thể được bổ sung sau khi sách được trả
    returnDate: { type: Date },
    
    // Trường returned xác định tình trạng trả sách
    // - type: Boolean: Định nghĩa kiểu dữ liệu là Boolean (true/false)
    // - default: false: Giá trị mặc định là false (chưa trả)
    returned: { type: Boolean, default: false }
});

module.exports = mongoose.model("Loan", loanSchema);

