const User = require("../db/models/User");

const login = async (req, res) => {
	res.send("Login route");
};

const register = async (req, res) => {
	const { name, email, password } = req.body;

	if (!name || !email || !password) throw new Error();

	const user = await User.create({ name, email, password });
	res.status(200).json(user);
};

module.exports = { login, register };
