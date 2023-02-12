import React from "react";
import { AiFillDelete } from "react-icons/ai";
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
			<div className={`${todo.completed ? "line-through text-gray-300" : "text-white"}`}>
				{todo.name}
			</div>
			<div className='flex gap-2'>
				<button className='text-red-400' onClick={() => deleteMutation.mutate(todo._id)}>
					<AiFillDelete />
				</button>
			</div>
		</div>
	);
};

export default Todo;
