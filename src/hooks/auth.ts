import makeEndpoint, { Endpoints, Methods } from '../utils/endpoints';
import { useAxios } from '../utils/makeRequest';
import { useDispatch } from 'react-redux';
import { addUser, deleteUser } from '../redux/slices/userSlice';
import { useLocalStorage, userInitialLocalStorage } from './useLocalStorage';
import { useNavigate } from 'react-router-dom';

export const useLogout = () => {
	let navigate = useNavigate();
	const { clearValue } = useLocalStorage<userModel>(
		'user',
		userInitialLocalStorage
	);
	const dispatch = useDispatch();
	const logoutHandler = () => {
		clearValue();
		dispatch(deleteUser());
		navigate('/');
	};
	return logoutHandler;
};

export const useAuth = () => {
	const dispatch = useDispatch();
	const { storedValue } = useLocalStorage<userModel>(
		'user',
		userInitialLocalStorage
	);
	dispatch(addUser(storedValue.data));
	return storedValue.data.jwt !== '';
};

export const useRegister = <T, D>() => {
	const url: string = makeEndpoint(Endpoints.Register);
	const method: Methods = Methods.POST;
	const { executeRequest } = useAxios<T, D>(url, method);
	return executeRequest;
};

export const useLogin = <T, D>() => {
	const url: string = makeEndpoint(Endpoints.Login);
	const method: Methods = Methods.POST;
	const { executeRequest } = useAxios<T, D>(url, method);
	return executeRequest;
};
