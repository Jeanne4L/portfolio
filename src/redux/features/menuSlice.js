import { createSlice } from '@reduxjs/toolkit';

const menuSlice = createSlice({
	name: 'menu',
	initialState: false,
	reducers: {
		toggle: (state) => {
			return state === false ? true : false;
		},
	},
});

export const { toggle } = menuSlice.actions;
export default menuSlice.reducer;
