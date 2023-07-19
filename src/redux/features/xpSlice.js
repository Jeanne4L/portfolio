import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	clicked: '',
	hovered: '',
};

// THE EXPERIENCE PART OF THE STORE
const xpSlice = createSlice({
	name: 'xp',
	initialState,
	reducers: {
		clic: (state, action) => {
			state.clicked = action.payload;
		},
		hover: (state, action) => {
			state.hovered = action.payload;
		},
		reset: (state) => {
			state.clicked = initialState.clicked;
			state.hovered = initialState.hovered;
		},
	},
});

export const { clic, hover, reset } = xpSlice.actions;
export default xpSlice.reducer;
