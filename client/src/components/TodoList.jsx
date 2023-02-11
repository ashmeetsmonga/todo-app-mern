import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import Todo from "./Todo";
import { useQuery } from "react-query";

const fetchTodos = async () => {
	const { data } = await axios.get("http://localhost:5000/api/v1/");
	return data;
};

const TodoList = () => {
	const { isLoading, isError, data, error } = useQuery("todos", fetchTodos);
	return (
		<div className='w-full flex flex-col items-center gap-4 my-8'>
			{data?.map((todo) => {
				return <Todo key={todo._id} todo={todo} />;
			})}
		</div>
	);
};

export default TodoList;
