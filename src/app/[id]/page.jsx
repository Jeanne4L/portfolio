import Image from 'next/image';
import Tag from '@/components/Tag';
import Button from '@/components/Button';
import Link from 'next/link';
import ProjectImgTitle from '@/components/ProjectImgTitle';
import {notFound} from 'next/navigation';
import projects from '@/data/projects.json';
import styles from './page.module.css';

// METADATA
export let metadata = {
    title: `Sandra Petereau | `,
    description: '',
    robots: {
		index: true,
		follow: false,
		nocache: false,
	},
}

export default function Project({params}) {
    // FIND PROJECT CORRESPONDING TO PARAMS ID
    const project = projects.find((project) => project.id === params.id);

    if(!project) {
        notFound()
    } else { 
        metadata.title = `Sandra Petereau | ${project.title}`;
        metadata.description = `Voici le projet ${project.title} réalisé lors de ma formation chez Openclassrooms. J'y ai appris: ${project.hardSkills.map((skill) => skill)}`;

        return (
            <div className="container">
                <div className={styles.introduction}>
                    <Image src={project.mainImg} alt={project.title} width={350} height={350} className={styles.main_img} priority/>
                    <div className={styles.presentation}>
                        <h1 className={styles.title}>{project.title}</h1>
                        <div className="tags">
                            {project.hardSkills.map((skill, index) => (
                                <Tag text={skill} key={`${index}-skill`}/>
                            ))}
                        </div>
                        <div className={styles.description}>
                            {project.description.map((p, index) => (
                                <p key={`${index}-description`} className={styles.text}>{p}</p>
                            ))}
                        </div>
                        <Button externLink={project.website ? project.website : project.repository} text={project.website ? 'Voir le site' : 'Voir le code'}/>
                    </div>
                </div>
                <div className={styles.pictures}>
                    <div className={styles.img_container}>
                        <ProjectImgTitle title={'Home'}/>
                        <Link href={project.pictures[0]} className={styles.link} aria-label="Afficher l'image de la page principale" >
                            <Image 
                                src={project.pictures[0]} alt={`Page d'accueil ${project.title}`} 
                                fill sizes='(max-width: 500px) 100vw, 600px' quality={100}
                                className={styles.img} priority
                            />  
                        </Link>
                    </div>
                    <div className={styles.img_container}>
                        <ProjectImgTitle title={'Desktop'}/>
                        <Link href={project.pictures[1]} className={styles.link} aria-label="Afficher l'image du site sur ordinateur">
                            <Image 
                                src={project.pictures[1]} alt={`Page ${project.title}`} 
                                fill sizes='(max-width: 500px) 100vw, 600px' quality={100}
                                className={styles.img} priority
                            />
                        </Link>
                    </div>
                    <div className={styles.img_container}>
                        <ProjectImgTitle title={'Mobile'}/>
                        <Link href={project.pictures[2]} className={styles.link} aria-label="Afficher l'image du site sur mobile">
                            <Image 
                                src={project.pictures[2]} alt={`${project.title} sur mobile`} 
                                fill sizes='(max-width: 500px) 100vw, 500px' quality={100}
                                className={styles.img} priority
                            />
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
