import React, { useState } from "react";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

const addTodo = async (todoName) => {
	const { data } = await axios.post("http://localhost:5000/api/v1/", {
		name: todoName,
	});

	return data;
};

const CreateTodo = () => {
	const [todo, setTodo] = useState("");

	const queryClient = useQueryClient();
	const mutation = useMutation(addTodo, {
		onSuccess: () => {
			setTodo("");
			queryClient.invalidateQueries("todos");
		},
	});

	return (
		<div className='w-full flex justify-center items-center'>
			<div className='w-3/5 flex bg-gray-600 rounded-2xl pr-4'>
				<input
					className='w-full p-4  outline-none bg-transparent text-white text-xl'
					type='text'
					value={todo}
					onChange={(e) => setTodo(e.target.value)}
				/>
				<button className='text-4xl text-white' onClick={() => mutation.mutate(todo)}>
					+
				</button>
			</div>
		</div>
	);
};

export default CreateTodo;