import Button from '@/components/Button';
import Card from '@/components/Card';
import Hi from '@/components/Hi';
import projects from '@/data/projects';
import styles from './page.module.css';

export let metadata = {
	title: 'Sandra Petereau | Développeuse web',
	description:
		"Développeuse web junior depuis peu, ma soif d'apprendre m'incite à explorer React, Next.js 💻 ou encore Java ou Kotlin 📱. Si vous recherchez une alternante curieuse et motivée, contactez-moi!",
	twitter: {
		card: 'summary_large_image',
		title: 'Sandra Petereau | Développeuse web',
		description:
			"Développeuse web junior depuis peu, ma soif d'apprendre m'incite à explorer React, Next.js 💻 ou encore Java ou Kotlin 📱. Si vous recherchez une alternante curieuse et motivée, contactez-moi!",
		images: ['/profile.jpg'],
	},
	openGraph: {
		title: 'Sandra Petereau | Développeuse web',
		description:
			"Développeuse web junior depuis peu, ma soif d'apprendre m'incite à explorer React, Next.js 💻 ou encore Java ou Kotlin 📱. Si vous recherchez une alternante curieuse et motivée, contactez-moi!",
		url: '',
		images: [{ url: '/profile.jpg' }],
		locale: 'fr_FR',
		type: 'website',
	},
	themeColor: [
		{ media: '(prefers-color-scheme: light)', color: 'white' },
		{ media: '(prefers-color-scheme: dark)', color: '#074b61' },
	],
	robots: {
		index: true,
		follow: true,
		nocache: false,
	},
};

export default function Home() {
	return (
		<>
			<div className={`container ${styles.introduction}`}>
				<Hi />
				<p className={styles.name_p}>Sandra Petereau</p>
				<h1 className={styles.title}>Développeuse web junior</h1>

				<div className={styles.presentation}>
					<p>J’ai commencé à coder sur mon temps libre et j’ai adoré.</p>
					<p>Maintenant, j’ai hâte d’en apprendre plus !</p>
					<div>
						<p>
							Je vous raconte tout sur la page Mon parcours. Allez-y jeter un
							œil
							<Button link={'/career'} />
						</p>

						<p>Sinon contactez-moi, nous pourrons en discuter !</p>
					</div>
				</div>
				<Button link={'/contact'} text={'Envoyer un message'} />
			</div>

			<div className={styles.darkblue_bgc} id='projects'>
				<div className='container'>
					<h2 className={`white-c ${styles.h2}`}>Mes projets</h2>
					<div className={styles.projects_container}>
						{projects.map((project) => (
							<Card
								srcImg={project.mainImg}
								title={project.title}
								summary={project.summary}
								id={project.id}
								key={`${project.id}+${project.title}`}
							/>
						))}
					</div>
				</div>
			</div>
		</>
	);
}
