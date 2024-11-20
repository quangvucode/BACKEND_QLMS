const User = require("../models/user.model");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        // Kiểm tra email đã tồn tại
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "Email đã tồn tại!" });
        }
        // Tạo người dùng mới
        const user = new User({ name, email, password });
        await user.save();
        res.status(201).json({ message: "Đăng ký thành công!" });
    } catch (error) {
        console.error("Error during registration:", error);
        res.status(500).json({ message: "Lỗi hệ thống!" });
    }
};

exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;
        // Tìm người dùng qua email
        const user = await User.findOne({ email });
        if (!user || !(await user.comparePassword(password))) {
            return res.status(401).json({ message: "Sai email hoặc mật khẩu!" });
        }
        // Tạo token
        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET || "your_jwt_secret", { expiresIn: "1d" });
        res.json({ token, message: "Đăng nhập thành công!" });
    } catch (error) {
        console.error("Error during login:", error);
        res.status(500).json({ message: "Lỗi hệ thống!" });
    }
};
