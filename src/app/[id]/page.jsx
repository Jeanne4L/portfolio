import Image from 'next/image';
import Tag from '@/components/Tag';
import Button from '@/components/Button';
import Link from 'next/link';
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import projects from '@/data/projects.json';
import styles from './page.module.css';

export default function Project({params}) {
    const projectIndex = projects.findIndex(project => project.id === params.id);
    let nextIndex = -1;
    let prevIndex= -1;

    if (projectIndex !== -1) {
        nextIndex = (projectIndex + 1) % projects.length;
        prevIndex = (projectIndex === 0) ? projects.length - 1 : projectIndex - 1;
    }
    
    const project = projects.filter((project) => project.id === params.id);
    const prevProject = projects.find((project) => project === projects[prevIndex]);
    const nextProject = projects.find((project) => project === projects[nextIndex]);

    if(project) {
        return (
            <div className="container">
                {project.map((project) => (
                    <section key={`${project.id}-container`}>
                        <div className="introduction">
                            <Image src={project.mainPicture} alt={project.title} width={350} height={350} className={styles.main_picture}/>
                            <div>
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
                            <Link href={project.pictures[0]}>
                                <Image src={project.pictures[0]} alt={`Page d'accueil ${project.title}`} width={350} height={350} className={styles.picture}/>  
                            </Link>
                            <Link href={project.pictures[1]}>
                                <Image src={project.pictures[1]} alt={`Page ${project.title}`} width={350} height={350} className={styles.picture}/>
                            </Link>
                            <Link href={project.pictures[2]}>
                                <Image src={project.pictures[2]} alt={`${project.title} sur mobile`} width={350} height={350} className={styles.picture}/>
                            </Link>
                        </div>
                        <nav className={styles.nav}>
                            <Link href={`/${prevProject.id}`} className={styles.link}>
                                <FiArrowLeft className={`${styles.arrow_icon} ${styles.left_arrow}`} />
                                <Image className={styles.other_project} src={prevProject.mainPicture} alt={prevProject.title} width={80} height={80}/>
                            </Link>
                            <div className={styles.current_project}>
                                <Image src={project.mainPicture} alt={project.title} width={80} height={80} className={styles.other_project}/>
                                <div className={styles.overlay}></div>
                                <div className={styles.nb}>
                                    {projectIndex +1}
                                    <div className={styles.line}></div>
                                    {projects.length}
                                </div>
                            </div>
                            <Link href={`/${nextProject.id}`} className={styles.link}>
                                <Image className={styles.other_project} src={nextProject.mainPicture} alt={nextProject.title} width={80} height={80}/>
                                <FiArrowRight className={`${styles.arrow_icon} ${styles.right_arrow}`}/>
                            </Link>
                        </nav>
                    </section>
                ))}
            </div>
        )
    }
}