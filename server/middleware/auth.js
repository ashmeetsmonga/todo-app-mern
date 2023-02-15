const jwt = require("jsonwebtoken");
const UnAuthorizedError = require("../errors/unAuthorizedError");

const authorizationMiddleware = async (req, res, next) => {
	const authHeader = req.headers.authorization;
	if (!authHeader || !authHeader.startsWith("Bearer "))
		throw new UnAuthorizedError("Authorization Error 1");

	const token = authHeader.split(" ")[1];

	try {
		const decoded = jwt.decode(token, process.env.JWT_SECRET);
		req.user = { userId: decoded.userId, name: decoded.name };
		next();
	} catch (error) {
		console.log(error);
		throw new UnAuthorizedError("Authorization Error 2");
	}
};

module.exports = authorizationMiddleware;
