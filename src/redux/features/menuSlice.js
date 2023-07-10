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

const { actions, reducer } = menuSlice;
export const { toggle } = actions;
export default reducer;
