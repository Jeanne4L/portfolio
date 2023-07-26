'use client';

import { Jost } from 'next/font/google';
import { Suspense } from 'react';
import Header from '@/components/Header';
import Loading from './loading';
import { Provider } from 'react-redux';
import store from '@/redux/store';
import { ThemeProvider } from 'next-themes';
import projects from '@/data/projects';
import './globals.css';

// FONTS
const jost = Jost({
	subsets: ['latin'],
	display: 'swap',
});

const jsonLdProjects = projects.map((project, index) => ({
	'@type': 'ListItem',
	position: index + 1,
	item: {
		'@type': 'CreativeWork',
		name: project.title,
		description: project.summary,
	},
}));
console.log(jsonLdProjects);

export default function RootLayout({ children }) {
	// STRUCTURED DATA
	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		image: '/profile.jpg',
		name: 'Sandra Petereau',
		jobTitle: 'Développeuse web',
		email: process.env.NEXT_PUBLIC_EMAIL,
		hasOccupation: {
			'@type': 'Occupation',
			name: 'Développeuse web',
			inLanguage: 'français',
		},
		knowsAbout: [
			{
				'@type': 'Text',
				name: 'HTML',
			},
			{
				'@type': 'Text',
				name: 'CSS',
			},
			{
				'@type': 'Text',
				name: 'JavaScript',
			},
			{
				'@type': 'Text',
				name: 'React',
			},
			{
				'@type': 'Text',
				name: 'Node.js',
			},
			{
				'@type': 'Text',
				name: 'Express.js',
			},
			{
				'@type': 'Text',
				name: 'Next.js',
			},
		],
		alumniOf: {
			'@type': 'EducationalOrganization',
			name: 'Openclassrooms',
		},
		hasPart: {
			'@type': 'ItemList',
			itemListElement: jsonLdProjects,
		},
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
