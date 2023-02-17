import React, { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
	const [email, setEmail] = useState("");
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const register = async () => {
		try {
			const { data } = await axios.post("http://localhost:5000/api/v1/auth/register", {
				name,
				email,
				password,
			});
			localStorage.setItem("name", data.name);
			localStorage.setItem("token", data.token);
			navigate("/todos");
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className='mt-[15rem] flex flex-col w-full items-center'>
			<div className='w-full uppercase font-bold text-white text-6xl py-14 text-center tracking-[1rem]'>
				Register
			</div>
			<div className='w-full text-center flex flex-col gap-4 items-center'>
				<input
					className='w-3/5 p-4 rounded-2xl tracking-widest outline-none bg-gray-700 text-white text-2xl'
					type='text'
					placeholder='Name (min 6 chars)'
					value={name}
					onChange={(e) => setName(e.target.value)}
				/>
				<input
					className='w-3/5 p-4 rounded-2xl tracking-widest outline-none bg-gray-700 text-white text-2xl'
					type='text'
					placeholder='Email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					className='w-3/5 p-4 rounded-2xl tracking-widest outline-none bg-gray-700 text-white text-2xl'
					type='text'
					placeholder='Password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>

				<button
					className='w-2/5 bg-gray-700 text-3xl text-white p-3 rounded-2xl mt-4 font-bold tracking-widest'
					onClick={register}
				>
					Register
				</button>
			</div>
		</div>
	);
};

export default Register;
