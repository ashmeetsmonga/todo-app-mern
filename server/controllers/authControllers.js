const User = require("../db/models/User");

const login = async (req, res) => {
	res.send("Login route");
};

const register = async (req, res) => {
	const user = await User.create(req.body);
	res.status(200).json(user);
};

module.exports = { login, register };
