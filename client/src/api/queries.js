import axios from "axios";

export const addTodo = async (todoName) => {
	const { data } = await axios.post("http://localhost:5000/api/v1/", {
		name: todoName,
	});

	return data;
};

export const fetchTodos = async () => {
	const { data } = await axios.get("http://localhost:5000/api/v1/todos/", {
		headers: {
			Authorization: `Bearer ${localStorage.getItem("token")}`,
		},
	});
	console.log(data);
	return data.todos;
};

export const deleteTodo = async (_id) => {
	const { data } = await axios.delete(`http://localhost:5000/api/v1/todos/${_id}`);
	return data;
};

export const updateTodo = async (todo) => {
	const { data } = await axios.patch(`http://localhost:5000/api/v1/todos/${todo._id}`, todo);
	return data;
};
