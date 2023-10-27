import React, {useEffect, useState} from "react";
import makeRequest from "../utils/makeRequest";
import axios from "axios";

const LoginRegisterView = () => {
	const [isLogin, setIsLogin] = useState(true)
	const [name, setName] = useState("");
	const [lastName, setLastName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (error) {
		return <div>Error: {error.message}</div>;
	}

	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			setIsLoading(isLoading)
			const dataToSend =  {
				user: email,
				password: password,
				name: name,
				lastName: lastName
			}
			const data = await makeRequest("http://localhost:8000/register", "post", dataToSend);
			console.log(data)

		} catch (error) {
			setError(isLoading)
		}
		setIsLoading(isLoading)

	};

	return (
		<div>
			<h1>{isLogin ? "Login" : "Register"}</h1>
			<form onSubmit={handleSubmit}>
				<input
					type="name"
					placeholder="name"
					value={name}
					onChange={(event) => setName(event.target.value)}
					hidden={isLogin}
				/>

				<input
					type="lastName"
					placeholder="lastName"
					value={lastName}
					onChange={(event) => setLastName(event.target.value)}
					hidden={isLogin}
				/>

                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                />

				<input
					type="password"
					placeholder="Password"
					value={password}
					onChange={(event) => setPassword(event.target.value)}
				/>
				<button type="submit">{isLogin ? "Login" : "Register"}</button>
			</form>
			<button onClick={ () => setIsLogin(current => !current) }>{!isLogin ? "Login" : "Register"} here</button>
		</div>
	);
};

export default LoginRegisterView;
