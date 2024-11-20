const express = require("express");
const cors = require("cors"); // Import thư viện cors
const connectDB = require("./app/utils/mongodb.util");
const path = require("path");


const bookRoutes = require("./app/routes/book.route");
const borrowerRoutes = require("./app/routes/borrower.route");
const loanRoutes = require("./app/routes/loan.route");
const userRoutes = require("./app/routes/user.route");

const app = express();
connectDB();

// Cấu hình CORS để cho phép các yêu cầu từ frontend
app.use(cors({
  origin: 'http://localhost:3001', // Đảm bảo URL này trùng với URL frontend của bạn
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));


// Middleware để parse JSON
app.use(express.json());

// Định tuyến cho các tài nguyên API
app.use("/api/books", bookRoutes);
app.use("/api/borrowers", borrowerRoutes);
app.use("/api/loans", loanRoutes);
app.use("/api/users", userRoutes);

module.exports = app;
