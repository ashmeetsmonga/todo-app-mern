const getAllTodos = async (req, res) => {
	res.send("All Todos");
};

const getTodo = async (req, res) => {
	res.send("Single Todo");
};

const createTodo = async (req, res) => {
	res.send("Create Todo");
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
