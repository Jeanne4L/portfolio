import { createSlice } from '@reduxjs/toolkit';

// GET INITIAL STATE IN LOCALSTORAGE
// function initialState() {
// 	if (typeof window !== 'undefined') {
// 		const savedTheme = localStorage.getItem('theme');
// 		return savedTheme || 'light';
// 	}
// 	return 'light';
// }

// THE THEME PART OF THE STORE
const themeSlice = createSlice({
	name: 'theme',
	initialState: sessionStorage.getItem('theme'),
	reducers: {
		toggle: (state) => {
			const newTheme = state === 'light' ? 'dark' : 'light';
			sessionStorage.setItem('theme', newTheme);
			return newTheme;
		},
	},
});

export const { toggle } = themeSlice.actions;
export default themeSlice.reducer;
