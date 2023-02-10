const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, "Todo Name is required"],
	},
	completed: {
		type: Boolean,
		default: false,
	},
	createdAt: {
		type: Date,
		default: Date.now(),
	},
});

module.exports = new mongoose.model("Todos", todoSchema);
