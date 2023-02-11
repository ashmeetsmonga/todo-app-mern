import { useState } from "react";
import "./App.css";
import CreateTodo from "./components/CreateTodo";
import Header from "./components/Header";

function App() {
	return (
		<div className='w-screen h-screen bg-gray-800 flex justify-center'>
			<div className='w-1/2 flex flex-col items-center'>
				<Header />
				<CreateTodo />
			</div>
		</div>
	);
}

export default App;
