import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
	const name = localStorage.getItem("name");
	const token = localStorage.getItem("token");
	const navigate = useNavigate();
	console.log(name, token);
	useEffect(() => {
		if (!name || !token) navigate("/");
	}, []);

	return <>{children}</>;
};

export default RequireAuth;
