import Button from '@/components/Button';
import Card from '@/components/Card';
import SkillTag from '@/components/SkillTag';
import GradientTtitle from '@/components/GradientTitle';
import Footer from '@/components/Footer';
import Link from 'next/link';
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
							Anciennement dans le commerce, j&apos;ai commencé le code par curiosité
							et j&apos;ai adoré.
						</p>
						<p className={`${styles.anim} ${styles.anim5}`}>
							Aujourd&apos;hui, j&apos;apprends React et le green code chez {' '}
                            <span className={styles.hightlight}>Yetic</span>. Mais je ne compte pas m&apos;arrêter là et j&apos;ai commencé à me apprendre les concepts de {' '}
							<span className={styles.hightlight}>Python</span>.
						</p>
						<div>
							<p className={`${styles.anim} ${styles.anim6}`}>
								Si vous voulez en savoir plus sur mon évolution ou mes
								objectifs, je vous raconte tout sur la page{' '}
								<Link href={'/career'} className={styles.link}>
									Parcours
									<BsFillArrowDownCircleFill className={styles.icon} />
								</Link>
							</p>

							<p className={`${styles.anim} ${styles.anim7}`}>
								Sinon contactez-moi, nous pourrons en discuter !
							</p>
						</div>
					</div>
					<div className={`${styles.anim} ${styles.anim8} ${styles.buttons}`}>
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
					<GradientTtitle text={'Skills'} page={'home'} />
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
					<GradientTtitle text={'Projects'} page={'home'} />
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
