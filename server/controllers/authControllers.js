const User = require("../db/models/User");
const { StatusCodes } = require("http-status-codes");
const UnAuthorizedError = require("../errors/unAuthorizedError");

const login = async (req, res) => {
	const { email, password } = req.body;
	if (!email || !password) throw new Error();

	const user = await User.findOne({ email });
	if (!user) throw new UnAuthorizedError("Invalid Credentials 1");

	const isPasswordCorrect = await user.checkPassword(password);
	if (!isPasswordCorrect) throw new UnAuthorizedError("Invalid credentials 2");

	const token = user.createJWT();
	res.status(StatusCodes.OK).json({ name: user.name, token });
};

const register = async (req, res) => {
	const { name, email, password } = req.body;

	if (!name || !email || !password) throw new Error("Enter name, email and password");

	const user = await User.create({ name, email, password });

	const token = user.createJWT();
	res.status(StatusCodes.CREATED).json({ name: user.name, token });
};

module.exports = { login, register };
