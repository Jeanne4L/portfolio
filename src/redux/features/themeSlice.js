import { createSlice } from '@reduxjs/toolkit';

// THE THEME PART OF THE STORE
const themeSlice = createSlice({
	name: 'theme',
	initialState: localStorage.getItem('theme') || 'light',
	reducers: {
		toggle: (state) => {
			const newTheme = state === 'light' ? 'dark' : 'light';
			localStorage.setItem('theme', newTheme);
			return newTheme;
		},
	},
});

export const { toggle } = themeSlice.actions;
export default themeSlice.reducer;
