'use client';

import { Jost } from 'next/font/google';
import { useEffect, Suspense } from 'react';
import Header from '@/components/Header';
import Loading from './loading';
import { selectTheme } from '@/redux/selectors';
import { useSelector, Provider, useDispatch } from 'react-redux';
import * as themeActions from '@/redux/features/themeSlice';
import { getInitialState } from '@/redux/features/themeSlice';
import store from '@/redux/store';
import './globals.css';

// FONTS
const jost = Jost({
	subsets: ['latin'],
	display: 'swap',
});

// GIVE ACCESS TO THE REDUX STORE
export default function RootLayout({ children }) {
	return (
		<Provider store={store}>
			<App>{children}</App>
		</Provider>
	);
}

// APP
function App({ children }) {
	const theme = useSelector(selectTheme);
	// const dispatch = useDispatch();

	// useEffect(() => {
	// 	const savedTheme = localStorage.getItem('theme');
	// 	console.log(savedTheme);
	// }, []);

	// console.log(theme);

	// STRUCTURED DATA
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		image: '/profile.jpg',
		name: 'Sandra Petereau',
		jobTitle: 'Développeuse web',
		alumniOf: 'Openclassrooms',
		email: process.env.NEXT_PUBLIC_EMAIL,
	};

	return (
		<html lang='fr' className={jost.className}>
			<body suppressHydrationWarning={true}>
				<Header />
				<main className={theme === 'dark' ? 'dark_mode' : 'light_mode'}>
					<Suspense fallback={<Loading />}>{children}</Suspense>
				</main>
				<script
					type='application/ld+json'
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</body>
		</html>
	);
}
// localStorage.clear();
