import Button from '@/components/Button';
import Card from '@/components/Card';
import projects from '@/data/projects';
import { BsFillCloudArrowDownFill } from 'react-icons/bs';
import styles from './page.module.css';

// METADATA
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
		url: process.env.NEXT_PUBLIC_URL,
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
				<p className={`${styles.hi_p} ${styles.anim} ${styles.anim1}`}>
					Bonjour, je suis
				</p>
				<p className={`${styles.name_p} ${styles.anim} ${styles.anim2}`}>
					Sandra Petereau
				</p>
				<h1 className={`${styles.h1} ${styles.anim} ${styles.anim3}`}>
					Développeuse web junior
				</h1>

				<div className={styles.presentation}>
					<p className={`${styles.anim} ${styles.anim4}`}>
						J’ai commencé à coder sur mon temps libre et j’ai adoré.
					</p>
					<p className={`${styles.anim} ${styles.anim5}`}>
						Maintenant, j’ai hâte d’en apprendre plus !
					</p>
					<div>
						<p className={`${styles.anim} ${styles.anim6}`}>
							Je vous raconte tout sur la page Mon parcours. Allez y jeter un
							œil
							<Button link={'/career'} />
						</p>

						<p className={`${styles.anim} ${styles.anim7}`}>
							Sinon contactez-moi, nous pourrons en discuter !
						</p>
					</div>
				</div>
				<div className={`${styles.anim} ${styles.anim8}`}>
					<Button link={'/contact'} text={'Envoyer un message'} />
					<a
						href='/CV_Petereau_Sandra.pdf'
						download
						className={styles.download}
						aria-label='Télécharger le cv au format pdf'
					>
						Télécharger mon cv
						<BsFillCloudArrowDownFill className={styles.icon} />
					</a>
				</div>
			</div>

			<div className={styles.darkblue_bgc} id='projects'>
				<div className={styles.banner}>
					<div className={styles.scroll_banner}>
						<ul>
							<li>HTML</li>
							<li>CSS</li>
							<li>Sass</li>
							<li>JavaScript</li>
							<li>React</li>
							<li>Node.js</li>
							<li>Express</li>
							<li>Next.js</li>
						</ul>
						<ul>
							<li>HTML</li>
							<li>CSS</li>
							<li>Sass</li>
							<li>JavaScript</li>
							<li>React</li>
							<li>Node.js</li>
							<li>Express</li>
							<li>Next.js</li>
						</ul>
						<ul>
							<li>HTML</li>
							<li>CSS</li>
							<li>Sass</li>
							<li>JavaScript</li>
							<li>React</li>
							<li>Node.js</li>
							<li>Express</li>
							<li>Next.js</li>
						</ul>
						<ul>
							<li>HTML</li>
							<li>CSS</li>
							<li>Sass</li>
							<li>JavaScript</li>
							<li>React</li>
							<li>Node.js</li>
							<li>Express</li>
							<li>Next.js</li>
						</ul>
					</div>
				</div>
				<div className='container'>
					<h2 className={styles.h2}>Mes projets</h2>
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
