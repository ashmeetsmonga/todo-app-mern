const Todo = require("../db/models/todo");

const getAllTodos = async (req, res) => {
	res.send("All Todos");
};

const getTodo = async (req, res) => {
	res.send("Single Todo");
};

const createTodo = async (req, res) => {
	try {
		const todo = await Todo.create(req.body);
		res.status(200).json(todo);
	} catch (err) {
		console.log(err);
	}
};

const updateTodo = async (req, res) => {
	res.send("Update Todo");
};

const deleteTodo = async (req, res) => {
	res.send("Delete Todo");
};

module.exports = {
	getAllTodos,
	getTodo,
	createTodo,
	updateTodo,
	deleteTodo,
};
