import React from "react";

const Todo = ({ todo }) => {
	return (
		<div
			className={`bg-gray-600 ${
				todo.completed ? "line-through text-gray-300" : "text-white"
			} py-3 px-4 w-3/5 rounded-2xl text-white text-2xl tracking-widest`}
		>
			{todo.name}
		</div>
	);
};

export default Todo;
