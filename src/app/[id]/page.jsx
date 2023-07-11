import Image from 'next/image';
import Tag from '@/components/Tag';
import Button from '@/components/Button';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import projects from '@/data/projects.json';
import styles from './page.module.css';

function fetchProjects(id) {
    const project = projects.find((project) => project.id === id);

    const projectIndex = projects.findIndex(project => project.id === id);
    let nextIndex = -1;
    let prevIndex= -1;

    if (projectIndex !== -1) {
        nextIndex = (projectIndex + 1) % projects.length;
        prevIndex = (projectIndex === 0) ? projects.length - 1 : projectIndex - 1;
    }

    const prevProject = projects.find((project) => project === projects[prevIndex]);
    const nextProject = projects.find((project) => project === projects[nextIndex]);

    return { project, prevProject, nextProject, projectIndex }
}

export let metadata = {
    title: `Sandra Petereau | `,
}

export default function Project({params}) {
    const { project } = fetchProjects(params.id);

    if(!project) {
        notFound()
    } else { 
        metadata.title = `Sandra Petereau | ${project.title}`;
        return (
            <div className="container">
                <div className={styles.introduction}>
                    <Image src={project.mainPicture} alt={project.title} width={350} height={350} className={styles.main_picture}/>
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
                    <Link href={project.pictures[0]} className={styles.grid_first}>
                        <Image src={project.pictures[0]} alt={`Page d'accueil ${project.title}`} width={350} height={350} className={styles.picture}/>  
                    </Link>
                    <Link href={project.pictures[1]} className={styles.scd}>
                        <Image src={project.pictures[1]} alt={`Page ${project.title}`} width={350} height={350} className={styles.picture}/>
                    </Link>
                    <Link href={project.pictures[2]} className={styles.third}>
                        <Image src={project.pictures[2]} alt={`${project.title} sur mobile`} width={350} height={350} className={styles.picture}/>
                    </Link>
                </div>
            </div>
        )
    }
}
