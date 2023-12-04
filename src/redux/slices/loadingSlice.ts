import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: LoadingModel = {
	isLoading: false,
};

export const loadingSlice = createSlice({
	name: 'loading',
	initialState,
	reducers: {
		changeLoading: (state, action: PayloadAction<boolean>) => {
			const isLoading = action.payload;
			state.isLoading = isLoading
		},
	},
});

export const { changeLoading } = loadingSlice.actions;
export default loadingSlice.reducer