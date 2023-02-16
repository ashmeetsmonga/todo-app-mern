import "./App.css";
import CreateTodo from "./components/CreateTodo";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import { Routes, Route, Link, useNavigate, useLocation, Navigate, Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/Login";
import RequireAuth from "./components/RequireAuth";
import Register from "./components/Register";

function App() {
	const navigate = useNavigate();
	const signout = () => {
		localStorage.setItem("name", "");
		localStorage.setItem("token", "");
		navigate("/");
	};

	return (
		<div className='w-screen min-h-screen bg-gray-800 flex justify-center relative'>
			<button
				className='absolute right-5 bottom-5 bg-gray-700 text-lg text-white p-3 rounded-2xl tracking-widest'
				onClick={signout}
			>
				Sign Out
			</button>
			<div className='absolute w-full h-[15.5rem] bg-gradient-to-r from-purple-900 to-black opacity-80'>
				<img className='w-full h-full object-cover opacity-50' src='./images/bg.jpg' alt='' />
			</div>
			<div className='w-1/2 flex flex-col items-center z-10'>
				<Routes>
					<Route path='/' element={<Login />} />
					<Route path='/register' element={<Register />} />
					<Route
						path='/todos'
						element={
							<RequireAuth>
								<Header />
								<CreateTodo />
								<TodoList />
							</RequireAuth>
						}
					/>
				</Routes>
			</div>
			<ToastContainer position='top-center' autoClose={3000} />
		</div>
	);
}

export default App;
