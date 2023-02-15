import React, { useState } from "react";
import axios from "axios";

const Login = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	return (
		<div className='mt-[15rem] flex flex-col w-full items-center'>
			<div className='w-full uppercase font-bold text-white text-6xl py-14 text-center tracking-[1rem]'>
				Login
			</div>
			<div className='w-full text-center flex flex-col gap-4 items-center'>
				<input
					className='w-3/5 p-4 rounded-2xl tracking-widest outline-none bg-gray-700 text-white text-2xl'
					type='text'
					placeholder='email'
					value={email}
					onChange={(e) => setEmail(e.target.value)}
				/>
				<input
					className='w-3/5 p-4 rounded-2xl tracking-widest outline-none bg-gray-700 text-white text-2xl'
					type='text'
					placeholder='password'
					value={password}
					onChange={(e) => setPassword(e.target.value)}
				/>
				<button className='w-2/5 bg-gray-700 text-3xl text-white p-3 rounded-2xl mt-4 font-bold tracking-widest'>
					Login
				</button>
			</div>
		</div>
	);
};

export default Login;
