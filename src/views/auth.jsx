'use client';

import React, { useState } from 'react';
import makeRequest from '../utils/makeRequest';
import { useErrorBoundary } from 'react-error-boundary';
import { useDispatch } from 'react-redux';
import { changeLoading } from '../redux/slices/loadingSlice';
import sleep from '../utils/sleep';

const LoginRegisterView = () => {
	const { showBoundary } = useErrorBoundary();
	const dispatch = useDispatch();

	const [isLogin, setIsLogin] = useState(true);
	const [name, setName] = useState('asd');
	const [lastName, setLastName] = useState('asd');
	const [email, setEmail] = useState('asd@asd.asd');
	const [password, setPassword] = useState('1234');

	const handleSubmit = async (event) => {
		event.preventDefault();
		dispatch(changeLoading(true));
		try {
			const dataToSend = {
				user: email,
				password: password,
				name: name,
				lastName: lastName,
			};
			const data = await makeRequest(
				'http://localhost:8000/register',
				'post',
				dataToSend
			);
			if (data.error !== null) {
				throw new Error(data.message);
			}
			console.log(data);
			
		} catch (error) {
			debugger;
			showBoundary(error);
		}
		dispatch(changeLoading(false));
		
	};

	return (
		<div>
			<h1>{isLogin ? 'Login' : 'Register'}</h1>
			<form onSubmit={handleSubmit}>
				<input
					type='name'
					placeholder='name'
					value={name}
					onChange={(event) => setName(event.target.value)}
					hidden={isLogin}
				/>

				<input
					type='lastName'
					placeholder='lastName'
					value={lastName}
					onChange={(event) => setLastName(event.target.value)}
					hidden={isLogin}
				/>

				<input
					type='email'
					placeholder='Email'
					value={email}
					onChange={(event) => setEmail(event.target.value)}
				/>

				<input
					type='password'
					placeholder='Password'
					value={password}
					onChange={(event) => setPassword(event.target.value)}
				/>
				<button type='submit'>{isLogin ? 'Login' : 'Register'}</button>
			</form>
			<button onClick={() => setIsLogin((current) => !current)}>
				{!isLogin ? 'Login' : 'Register'} here
			</button>
		</div>
	);
};

export default LoginRegisterView;
