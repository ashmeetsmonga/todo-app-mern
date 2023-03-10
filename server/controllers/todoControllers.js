const Todo = require("../db/models/Todo");
const { StatusCodes } = require("http-status-codes");

const getAllTodos = async (req, res) => {
	const todos = await Todo.find({ createdBy: req.user.userId });
	res.status(StatusCodes.OK).json({ todos, ...req.user });
};

const getTodo = async (req, res) => {
	const _id = req.params.id;
	const todo = await Todo.find({ _id });
	res.status(StatusCodes.OK).json(todo);
};

const createTodo = async (req, res) => {
	const todo = { ...req.body };
	todo.createdBy = req.user.userId;
	const createdTodo = await Todo.create(todo);
	res.status(201).json(createdTodo);
};

const updateTodo = async (req, res) => {
	const todo = await Todo.findOneAndUpdate({ _id: req.params.id }, req.body, {
		new: true,
		runValidators: true,
	});
	res.status(StatusCodes.OK).json(todo);
};

const deleteTodo = async (req, res) => {
	const todo = await Todo.findOneAndDelete({ _id: req.params.id });
	res.status(StatusCodes.OK).json({ msg: `Todo ${todo.name} deleted` });
};

module.exports = {
	getAllTodos,
	getTodo,
	createTodo,
	updateTodo,
	deleteTodo,
};
