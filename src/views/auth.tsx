'use client';

import React, { useState } from 'react';
import { useErrorBoundary } from 'react-error-boundary';
import { useDispatch } from 'react-redux';
import { changeLoading } from '../redux/slices/loadingSlice';
import { useLogin, useRegister } from '../hooks/auth';
import { addUser } from '../redux/slices/userSlice';
import { useNavigate } from 'react-router-dom';
import {
	useLocalStorage,
	userInitialLocalStorage,
} from '../hooks/useLocalStorage';

const LoginRegisterView = () => {
	const { showBoundary } = useErrorBoundary();
	const dispatch = useDispatch();

	const [isLogin, setIsLogin] = useState(true);
	const [name, setName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	const registerUseCase = useRegister<
		registerModel,
		authInterface<userModel>
	>();
	const loginUseCase = useLogin<loginModel, authInterface<userModel>>();
	const { setValue } = useLocalStorage<userModel>(
		'user',
		userInitialLocalStorage
	);

	let navigate = useNavigate();

	const handleSubmit = async (event: React.SyntheticEvent) => {
		event.preventDefault();
		dispatch(changeLoading(true));
		try {
			let data: authInterface<userModel>;
			if (isLogin) {
				data = await loginUseCase({
					user: email,
					password: password,
				});
			} else {
				data = await registerUseCase({
					userName: email,
					password: password,
					name: name,
					lastName: lastName,
				});
			}

			if ('error' in data) {
				throw new Error(data.message);
			}
			if (isLogin) {
				setValue({
					expirationTime:
						Date.now() +
						parseInt(process.env.REACT_APP_EXPIRATION_TIME_MINUTES ?? '10') *
							1000 *
							60,
					data: data.data,
				});
				navigate('/');
			} else {
				setPassword('');
				setIsLogin(true);
			}
			dispatch(addUser(data.data));
		} catch (error) {
			showBoundary(error);
		}
		dispatch(changeLoading(false));
	};

	return (
		<div className='text-center d-flex flex-column align-items-center mt-5'>
			<form className='form-signin w-50' onSubmit={handleSubmit}>
				<h1 className='h3 mb-3 fw-normal'>
					Please {isLogin ? 'login' : 'sign'} in
				</h1>

				<div className='form-floating' hidden={isLogin}>
					<input
						type='text'
						className='form-control'
						id='floatingName'
						placeholder='Name'
						value={name}
						onChange={(event) => setName(event.target.value)}
						hidden={isLogin}
					/>
					<label htmlFor='floatingLastName'>Name</label>
				</div>

				<div className='form-floating' hidden={isLogin}>
					<input
						type='text'
						className='form-control'
						id='floatingLastName'
						placeholder='lastName'
						value={lastName}
						onChange={(event) => setLastName(event.target.value)}
					/>
					<label htmlFor='floatingLastName'>Last Name</label>
				</div>

				<div className='form-floating'>
					<input
						type='email'
						className='form-control'
						id='floatingEmail'
						placeholder='Email'
						value={email}
						onChange={(event) => setEmail(event.target.value)}
					/>
					<label htmlFor='floatingEmail'>Email address</label>
				</div>
				<div className='form-floating'>
					<input
						type='password'
						className='form-control'
						id='floatingPassword'
						placeholder='Password'
						value={password}
						onChange={(event) => setPassword(event.target.value)}
					/>
					<label htmlFor='floatingPassword'>Password</label>
				</div>

				{/* <div className='form-check text-start my-3'>
					<input
						className='form-check-input'
						type='checkbox'
						value='remember-me'
						id='flexCheckDefault'
					/>
					<label className='form-check-label' htmlFor='flexCheckDefault'>
						Remember me
					</label>
				</div> */}
				<button className='btn btn-primary w-100 py-2 mt-5' type='submit'>
					{isLogin ? 'Login' : 'Register'}
				</button>
				<p className='mt-5 mb-3 text-body-secondary'>© 2017–2023</p>
			</form>

			<button onClick={() => setIsLogin((current) => !current)}>
				{!isLogin ? 'Login' : 'Register'} here
			</button>
		</div>
	);
};

export default LoginRegisterView;
