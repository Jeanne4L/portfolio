import { createSlice } from '@reduxjs/toolkit';

const xpSlice = createSlice({
	name: 'xp',
	initialState: '',
	reducers: {
		select: (state, action) => {
			return action.payload;
		},
	},
});

export const { select } = xpSlice.actions;
export default xpSlice.reducer;
