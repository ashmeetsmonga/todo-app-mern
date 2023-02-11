import { useState } from "react";
import "./App.css";
import CreateTodo from "./components/CreateTodo";
import Header from "./components/Header";
import Todo from "./components/Todo";
import TodoList from "./components/TodoList";

const todo = {
	name: "Todo 1",
	completed: false,
};

function App() {
	return (
		<div className='w-screen min-h-screen bg-gray-800 flex justify-center'>
			<div className='w-1/2 flex flex-col items-center'>
				<Header />
				<CreateTodo />
				<TodoList />
			</div>
		</div>
	);
}

export default App;
