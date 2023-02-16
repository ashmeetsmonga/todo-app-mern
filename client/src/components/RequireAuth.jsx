import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RequireAuth = ({ children }) => {
	const [name, setName] = useState(localStorage.getItem("name"));
	const [token, setToken] = useState(localStorage.getItem("token"));
	const navigate = useNavigate();
	console.log(name, token);
	useEffect(() => {
		if (!name || !token) navigate("/");
	}, [name, token]);

	return <>{children}</>;
};

export default RequireAuth;
