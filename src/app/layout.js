'use client';

import { Jost } from 'next/font/google';
import { Suspense } from 'react';
import Header from '@/components/Header';
import Loading from './loading';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import { ThemeProvider } from 'next-themes';
import './globals.css';

// FONTS
const jost = Jost({
	subsets: ['latin'],
	display: 'swap',
});

// GIVE ACCESS TO THE REDUX STORE
export default function RootLayout({ children }) {
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
		<html lang='fr' className={jost.className} suppressHydrationWarning={true}>
			<body>
				<Provider store={store}>
					<ThemeProvider>
						<Header />
						<main>
							<Suspense fallback={<Loading />}>{children}</Suspense>
						</main>
						<script
							type='application/ld+json'
							dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
						/>
					</ThemeProvider>
				</Provider>
			</body>
		</html>
	);
}
