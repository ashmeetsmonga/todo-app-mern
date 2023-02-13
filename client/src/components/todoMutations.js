import { useMutation, useQueryClient } from "react-query";
import { addTodo, deleteTodo, updateTodo } from "../api/queries";

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

export const createMutation = () => {
	const queryClient = useQueryClient();
	return useMutation(addTodo, {
		onMutate: (todoName) => {
			const newTodo = { _id: Math.floor(Math.random() * 1000), name: todoName, completed: false };
			const previousTodos = queryClient.getQueryData("todos");
			queryClient.setQueryData("todos", [...previousTodos, newTodo]);
			return { previousTodos };
		},
		onError: (error, todoId, context) => {
			console.log("error occured", error);
			queryClient.setQueryData("todos", context.previousTodos);
		},
		onSettled: async () => {
			await queryClient.invalidateQueries("todos");
			console.log("todo created");
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
