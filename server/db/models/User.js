const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const UserSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		maxlength: 12,
		minlength: 6,
	},
	email: {
		type: String,
		required: true,
		match: [
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			"Please provide a valid email",
		],
		unique: true,
	},
	password: {
		type: String,
		required: true,
	},
});

UserSchema.pre("save", async function (next) {
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
	next();
});

UserSchema.methods.createJWT = function () {
	const token = jwt.sign({ userId: this._id, name: this.name }, process.env.JWT_SECRET, {
		expiresIn: "30d",
	});
	return token;
};

UserSchema.methods.checkPassword = async function (candidatePassword) {
	const isMatch = bcrypt.compare(candidatePassword, this.password);
	return isMatch;
};

module.exports = new mongoose.model("User", UserSchema);
