import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './features/menuSlice';

export default configureStore({
	reducer: {
		menu: menuReducer,
		// xp: xpReducer,
		// theme: themeReducer,
	},
});
