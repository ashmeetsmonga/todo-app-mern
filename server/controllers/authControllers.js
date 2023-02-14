const User = require("../db/models/User");
const bcrypt = require("bcryptjs");

const login = async (req, res) => {
	res.send("Login route");
};

const register = async (req, res) => {
	const { name, email, password } = req.body;

	if (!name || !email || !password) throw new Error();

	const salt = await bcrypt.genSalt(10);
	const hashedPassword = await bcrypt.hash(password, salt);

	const user = await User.create({ name, email, password: hashedPassword });
	res.status(200).json(user);
};

module.exports = { login, register };
