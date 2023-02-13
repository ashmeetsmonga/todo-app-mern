import React, { useState } from "react";
import axios from "axios";
import { useMutation, useQueryClient } from "react-query";
import { addTodo } from "../api/queries";
import { createMutation } from "./todoMutations";

const CreateTodo = () => {
	const [todo, setTodo] = useState("");

	const { mutate: createMutate } = createMutation();

	return (
		<div className='w-full flex justify-center items-center'>
			<div className='w-3/5 flex bg-gray-600 shadow-3xl rounded-2xl pr-4'>
				<input
					className='w-full p-4 rounded-2xl tracking-widest outline-none bg-transparent text-white text-2xl'
					type='text'
					value={todo}
					onChange={(e) => setTodo(e.target.value)}
				/>
				<button
					className='text-4xl text-white'
					onClick={() => {
						createMutate(todo);
						setTodo("");
					}}
				>
					+
				</button>
			</div>
		</div>
	);
};

export default CreateTodo;
