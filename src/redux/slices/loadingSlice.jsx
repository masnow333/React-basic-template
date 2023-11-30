import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	isLoading: false,
};

export const loadingSlice = createSlice({
	name: 'loading',
	initialState,
	reducers: {
		changeLoading: (state, action) => {
			const isLoading = action.payload;
			state.isLoading = isLoading
		},
	},
});

export const { changeLoading } = loadingSlice.actions;
export default loadingSlice.reducer