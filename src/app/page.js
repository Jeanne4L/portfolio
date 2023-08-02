import Button from '@/components/Button';
import Card from '@/components/Card';
import SkillTag from '@/components/SkillTag';
import GradientTtitle from '@/components/GradientTitle';
import Footer from '@/components/Footer';
import projects from '@/data/projects';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import {
	FaHtml5,
	FaCss3Alt,
	FaJs,
	FaSass,
	FaReact,
	FaNodeJs,
} from 'react-icons/fa';
import { SiNextdotjs, SiExpress } from 'react-icons/si';
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
			<div className='container'>
				<div className={styles.introduction}>
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
							<BsFillArrowDownCircleFill className={styles.icon} />
						</a>
					</div>
				</div>

				<section id='skills' className={styles.skills}>
					<GradientTtitle text={'Skills'} />
					<div className={styles.skills_container}>
						<SkillTag text={'HTML'}>
							<FaHtml5 className={styles.skill_icon} />
						</SkillTag>
						<SkillTag text={'CSS'}>
							<FaCss3Alt className={styles.skill_icon} />
						</SkillTag>
						<SkillTag text={'JavaScript'}>
							<FaJs className={styles.skill_icon} />
						</SkillTag>
						<SkillTag text={'Sass'}>
							<FaSass className={styles.skill_icon} />
						</SkillTag>
						<SkillTag text={'React'}>
							<FaReact className={styles.skill_icon} />
						</SkillTag>
						<SkillTag text={'Next.js'}>
							<SiNextdotjs className={styles.skill_icon} />
						</SkillTag>
						<SkillTag text={'Node.js'}>
							<FaNodeJs className={styles.skill_icon} />
						</SkillTag>
						<SkillTag text={'Express'}>
							<SiExpress className={styles.skill_icon} />
						</SkillTag>
					</div>
				</section>

				<section id='projects'>
					<GradientTtitle text={'Projects'} />
					<div className={styles.projects_container}>
						{projects.map((project) => (
							<Card
								srcImg={project.pictures[0]}
								title={project.title}
								summary={project.summary}
								hardSkills={project.hardSkills}
								id={project.id}
								key={`${project.id}+${project.title}`}
							/>
						))}
					</div>
				</section>
				<Footer />
			</div>
		</>
	);
}
