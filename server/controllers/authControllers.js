const login = async (req, res) => {
	res.send("Login route");
};

const register = async (req, res) => {
	res.send("Register route");
};

module.exports = { login, register };
