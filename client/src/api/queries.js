export const addTodo = async (todoName) => {
	const { data } = await axios.post("http://localhost:5000/api/v1/", {
		name: todoName,
	});

	return data;
};

export const fetchTodos = async () => {
	const { data } = await axios.get("http://localhost:5000/api/v1/");
	return data;
};
