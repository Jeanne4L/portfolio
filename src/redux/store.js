import { configureStore } from '@reduxjs/toolkit';
import menuReducer from './features/menuSlice';
import xpReducer from './features/xpSlice';

export default configureStore({
	reducer: {
		menu: menuReducer,
		xp: xpReducer,
		// theme: themeReducer,
	},
});
