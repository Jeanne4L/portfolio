'use client'

import Image from 'next/image';
import Tag from '../Tag';
import Button from '../Button';
import GradientTtitle from '../GradientTitle';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer'
import styles from './index.module.css'

export default function ProjectPageContent({project}) {
    const [isOpenedImg, setIsOpenedImg] = useState(false)
    const [openedImgSrc, setOpenedImgSrc] = useState('')
    const [openedImgAlt, setOpenedImgAlt] = useState('')

    const [imgDisplayed, setImgDisplayed] = useState([false, false, false]);

    const [ref1, inView1] = useInView({
        triggerOnce: true,
    });
    const [ref2, inView2] = useInView({
        triggerOnce: true,
    });
    const [ref3, inView3] = useInView({
        triggerOnce: true,
    });

    useEffect(() => {
        setImgDisplayed([inView1, inView2, inView3]);
    }, [inView1, inView2, inView3]);

    useEffect(() => {
        return () => {
            setImgDisplayed([false, false, false]);
        };
    }, []);

    return (
        isOpenedImg ? 
            <div className={styles.overlay} onClick={() => setIsOpenedImg(false)}>
                <Image src={openedImgSrc} alt={openedImgAlt} className={styles.full_img} fill priority/>
            </div>
        : <div className="container">
            <div className={styles.introduction}>
                <Image src={project.mainImg} alt={project.title} width={350} height={350} className={styles.main_img} priority/>
                <div className={styles.presentation}>
                    <h1 className={styles.h1}>{project.title}</h1>
                    <div className={styles.tags}>
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
                <div className={styles.picture_container}>
                    <GradientTtitle text={'Home'}/>
                    <div href={project.pictures[0]} className={`${styles.img_container} ${imgDisplayed[0] ? styles.display_container : ''}`} ref={ref1} aria-label="Afficher l'image de la page principale" >
                        <Image 
                            src={project.pictures[0]} alt={`Page d'accueil ${project.title}`} 
                            fill sizes='(max-width: 500px) 100vw, 600px' quality={100}
                            className={`${styles.img} ${imgDisplayed[0] ? styles.display_img : ''}`} priority
                            onClick={() => {
                                setIsOpenedImg(true)
                                setOpenedImgSrc(project.pictures[0])
                                setOpenedImgAlt(`Page d'accueil ${project.title}`)
                            }}
                        />  
                    </div>
                </div>
                <div className={styles.picture_container}>
                    <GradientTtitle text={'Desktop'}/>
                    <div href={project.pictures[1]} className={`${styles.img_container} ${imgDisplayed[1] ? styles.display_container : ''}`} ref={ref2} aria-label="Afficher l'image du site sur ordinateur">
                        <Image 
                            src={project.pictures[1]} alt={`Page ${project.title}`} 
                            fill sizes='(max-width: 500px) 100vw, 600px' quality={100}
                            className={`${styles.img} ${imgDisplayed[1] ? styles.display_img : ''}`} priority
                            onClick={() => {
                                setIsOpenedImg(true)
                                setOpenedImgSrc(project.pictures[1])
                                setOpenedImgAlt(`Page ${project.title}`)
                            }}
                        />
                    </div>
                </div>
                <div className={styles.picture_container}>
                    <GradientTtitle text={'Mobile'}/>
                    <div href={project.pictures[2]} className={`${styles.img_container} ${imgDisplayed[2] ? styles.display_container : ''}`} ref={ref3} aria-label="Afficher l'image du site sur mobile">
                        <Image 
                            src={project.pictures[2]} alt={`${project.title} sur mobile`} 
                            fill sizes='(max-width: 500px) 100vw, 500px' quality={100}
                            className={`${styles.img} ${imgDisplayed[2] ? styles.display_img : ''}`} priority
                            onClick={() => {
                                setIsOpenedImg(true)
                                setOpenedImgSrc(project.pictures[2])
                                setOpenedImgAlt(`${project.title} sur mobile`)
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}