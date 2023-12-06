import { useState } from 'react';
import { initialState } from '../redux/slices/userSlice';

export const userInitialLocalStorage: localStorageModel<userModel> = {
	expirationTime: Date.now(),
	data: initialState,
};

export const useLocalStorage = <T>(
	keyName: string,
	defaultValue: localStorageModel<T>
) => {

	const validateDate = (date: number) => {
		const currentDate = Date.now();
		return currentDate >= date;
	};

	const validateStored = (): localStorageModel<T> => {
		let valueToReturn = defaultValue;
		try {
			const value = window.localStorage.getItem(keyName);

			if (value) {
				let parsedValue: localStorageModel<T> = JSON.parse(value);
				if (validateDate(parsedValue.expirationTime)) {
					clearValue();
					parsedValue = defaultValue;
				}
				valueToReturn = parsedValue;
			} else {
				window.localStorage.setItem(keyName, JSON.stringify(defaultValue));
				valueToReturn = defaultValue;
			}
		} catch (err) {
			valueToReturn = defaultValue;
		}
		return valueToReturn;
	};

	const [storedValue, setStoredValue] = useState<localStorageModel<T>>(
		validateStored()
	);

	const setValue = (newValue: localStorageModel<T>) => {
		try {
			window.localStorage.setItem(keyName, JSON.stringify(newValue));
		} catch (err) {}
		const validatedData = validateStored();
		setStoredValue(validatedData);
	};

	const clearValue = () => {
		try {
			window.localStorage.removeItem(keyName);
		} catch (err) {}
		setStoredValue(defaultValue);
	};

	// return [storedValue, setValue, clearValue];
	return { storedValue, setValue, clearValue };
};
