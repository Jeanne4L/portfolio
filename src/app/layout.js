'use client';

import { Jost } from 'next/font/google';
import { Suspense } from 'react';
import Header from '@/components/Header';
import Loading from './loading';
import { selectTheme } from '@/redux/selectors';
import { useSelector, Provider } from 'react-redux';
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
			<body>
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
