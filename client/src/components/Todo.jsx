import React from "react";
import { AiFillDelete, AiOutlineCheckCircle } from "react-icons/ai";
import { MdDoneAll } from "react-icons/md";
import { BsCircle } from "react-icons/bs";
import { useMutation, useQueryClient } from "react-query";
import { deleteTodo, updateTodo } from "../api/queries";

const Todo = ({ todo }) => {
	const queryClient = useQueryClient();
	const deleteMutation = useMutation(deleteTodo, {
		onSuccess: () => {
			queryClient.invalidateQueries("todos");
		},
	});

	const updateMutation = useMutation(updateTodo, {
		onSuccess: () => {
			queryClient.invalidateQueries("todos");
		},
	});

	return (
		<div
			className={`bg-gray-600 flex justify-between items-center py-3 px-4 w-3/5 rounded-2xl text-2xl tracking-widest cursor-pointer`}
			onClick={() => {
				updateMutation.mutate({ ...todo, completed: !todo.completed });
			}}
		>
			<div
				className={`flex gap-4 items-center ${
					todo.completed ? "line-through text-gray-300" : "text-white"
				}`}
			>
				{todo.completed ? <MdDoneAll className='text-green-400' /> : <BsCircle />}
				{todo.name}
			</div>
			<div className='flex gap-2'>
				<button onClick={() => deleteMutation.mutate(todo._id)}>
					<AiFillDelete className='text-red-400' />
				</button>
			</div>
		</div>
	);
};

export default Todo;
