import "./App.css";
import CreateTodo from "./components/CreateTodo";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { Routes, Route, Link, useNavigate, useLocation, Navigate, Outlet } from "react-router-dom";
import Login from "./components/Login";

function App() {
	return (
		<div className='w-screen min-h-screen bg-gray-800 flex justify-center relative'>
			<div className='absolute w-full h-[15.5rem] bg-gradient-to-r from-purple-900 to-black opacity-80'>
				<img className='w-full h-full object-cover opacity-50' src='./images/bg.jpg' alt='' />
			</div>
			<div className='w-1/2 flex flex-col items-center z-10'>
				{/*<Header />
				<CreateTodo />
				<TodoList /> */}
				<Routes>
					<Route path='/' element={<Login />} />
				</Routes>
			</div>
		</div>
	);
}

export default App;
