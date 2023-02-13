import { useMutation, useQueryClient } from "react-query";
import { deleteTodo, updateTodo } from "../api/queries";

export const deleteMutation = () => {
	const queryClient = useQueryClient();
	return useMutation(deleteTodo, {
		onMutate: (todoId) => {
			console.log(todoId);
			const previousTodos = queryClient.getQueryData("todos");

			const updatedTodos = previousTodos.filter((todo) => todo._id !== todoId);
			queryClient.setQueryData("todos", updatedTodos);

			return { previousTodos };
		},
		onError: (error, todoId, context) => {
			console.log("error occured", error);
			queryClient.setQueryData("todos", context.previousTodos);
		},
		onSettled: async () => {
			await queryClient.invalidateQueries("todos");
			console.log("todo deleted");
		},
	});
};

export const updateMutation = () => {
	const queryClient = useQueryClient();
	return useMutation(updateTodo, {
		onMutate: async (updatedTodo) => {
			await queryClient.cancelQueries("todos");
			const previousTodos = queryClient.getQueryData("todos");
			const updatedTodos = previousTodos.map((todo) => {
				if (todo._id === updatedTodo._id) return updatedTodo;
				return todo;
			});
			queryClient.setQueryData("todos", updatedTodos);
			return { previousTodos };
		},
		onError: (error, todoId, context) => {
			queryClient.setQueryData("todos", context.previousTodos);
		},
		onSettled: (data) => {
			queryClient.invalidateQueries("todos");
			console.log(data);
		},
	});
};
