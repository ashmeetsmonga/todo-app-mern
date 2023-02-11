import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Todo from "./Todo";

const TodoList = () => {
	const [todos, setTodos] = useState([]);

	const fetchTodos = async () => {
		const { data } = await axios.get("http://localhost:5000/api/v1/");
		// console.log(data);
		setTodos(data);
	};

	useEffect(() => {
		fetchTodos();
	}, []);
	console.log(todos);
	return (
		<div className='w-full flex flex-col items-center gap-4 my-8'>
			{todos.map((todo) => {
				return <Todo id={todo._id} todo={todo} />;
			})}
		</div>
	);
};

export default TodoList;
