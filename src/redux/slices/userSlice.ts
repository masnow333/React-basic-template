import { createSlice } from '@reduxjs/toolkit';

export const initialState: userModel = {
	id: 0,
	name: '',
	lastName: '',
	email: '',
	jwt: '',
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		addUser: (state, action) => {
			const { id, name, lastName, email, jwt } = action.payload;
			state.id = id;
			state.name = name;
			state.lastName = lastName;
			state.email = email;
			state.jwt = jwt;
		},
		changeEmail: (state, action) => {
			state.email = action.payload;
		},
		changeJWT: (state, action) => {
			state.jwt = action.payload;
		},
		deleteUser: (state) => {
			state.id = initialState.id;
            state.name = initialState.name;
            state.lastName = initialState.lastName;
            state.email = initialState.email;
            state.jwt = initialState.jwt;
        },
	},
});

export const { addUser, changeEmail, changeJWT, deleteUser } = userSlice.actions;
export default userSlice.reducer;
