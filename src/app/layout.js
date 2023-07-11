'use client';

import { Jost } from 'next/font/google';
import { Suspense } from 'react';
import Header from '@/components/Header';
import Loading from './loading';
import { selectTheme } from '@/redux/selectors';
import { useSelector, Provider } from 'react-redux';
import store from '@/redux/store';
import './globals.css';

const jost = Jost({
	subsets: ['latin'],
	display: 'swap',
});

export default function RootLayout({ children }) {
	return (
		<Provider store={store}>
			<App>{children}</App>
		</Provider>
	);
}

function App({ children }) {
	const theme = useSelector(selectTheme);

	return (
		<html lang='fr' className={jost.className}>
			<body>
				<Header />
				<main className={theme === 'dark' ? 'dark_mode' : 'light_mode'}>
					<Suspense fallback={<Loading />}>{children}</Suspense>
				</main>
			</body>
		</html>
	);
}
