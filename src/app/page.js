import Link from 'next/link';
import Button from '@/components/Button';
import Card from '@/components/Card';
import { FiArrowUpRight } from 'react-icons/fi';
import styles from './page.module.css';

import projects from '@/data/projects';

export default function Home() {
	return (
		<>
			<div className={`container ${styles.introduction}`}>
				<p className={`bright-c ${styles.hi_p}`}>Bonjour, je suis</p>
				<p className={styles.name_p}>Sandra Petereau</p>
				<h1 className={styles.title}>Développeuse web junior</h1>

				<div className={styles.presentation}>
					<p>
						J’ai commencé à coder sur mon temps libre et j’ai adoré. Maintenant,
						j’ai hâte d’en apprendre plus !
					</p>
					<div>
						<p>
							Je vous raconte tout sur la page Mon parcours ! Allez-y jeter un
							œil
							<Link href='/career' className={styles.arrow_btn_link}>
								<FiArrowUpRight className={`bright-c ${styles.arrow_btn}`} />
							</Link>
						</p>

						<p>Sinon contactez-moi, nous pourrons en discuter !</p>
					</div>
				</div>
				<Button link={'/contact'} text={'Envoyer un message'} />
			</div>

			<div className={styles.darkblue_bgc}>
				<div className='container'>
					<h2 className={`white-c ${styles.h2}`}>Mes projets</h2>
					{/* prettier-ignore */}
					{projects.map((project) => (
						<Card
							srcImg={project.mainPicture}
							title={project.title}
							summary={project.summary}
							key={`${project.id}+${project.title}`}
						/>
					))}
				</div>
			</div>
		</>
	);
}
