const express = require("express");
const connectDB = require("./app/utils/mongodb.util");

const bookRoutes = require("./app/routes/book.route");
const borrowerRoutes = require("./app/routes/borrower.route");
const loanRoutes = require("./app/routes/loan.route");

const app = express();
connectDB();

app.use(express.json());

app.use("/api/books", bookRoutes);
app.use("/api/borrowers", borrowerRoutes);
app.use("/api/loans", loanRoutes);

module.exports = app;
