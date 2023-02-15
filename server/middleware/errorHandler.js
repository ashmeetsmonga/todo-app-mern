const CustomError = require("../errors/CustomError");

const errorHandler = async (err, req, res, next) => {
	if (err instanceof CustomError) {
		return res.status(err.statusCode).json({ msg: err.message });
	}
	console.log(err);
	return res.status(500).json({ msg: "Something went wrong, please try again", err });
};

module.exports = errorHandler;
