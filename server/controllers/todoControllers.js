const Todo = require("../db/models/Todo");

const getAllTodos = async (req, res) => {
	const todos = await Todo.find({});
	res.status(200).json({ todos, ...req.user });
};

const getTodo = async (req, res) => {
	const _id = req.params.id;
	const todo = await Todo.find({ _id });
	res.status(200).json(todo);
};

const createTodo = async (req, res) => {
	const todo = await Todo.create(req.body);
	res.status(201).json(todo);
};

const updateTodo = async (req, res) => {
	const todo = await Todo.findOneAndUpdate({ _id: req.params.id }, req.body, {
		new: true,
		runValidators: true,
	});
	res.status(200).json(todo);
};

const deleteTodo = async (req, res) => {
	const todo = await Todo.findOneAndDelete({ _id: req.params.id });
	res.status(200).json({ msg: `Todo ${todo.name} deleted` });
};

module.exports = {
	getAllTodos,
	getTodo,
	createTodo,
	updateTodo,
	deleteTodo,
};
