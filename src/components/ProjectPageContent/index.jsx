'use client'

import Image from 'next/image';
import Tag from '../Tag';
import Button from '../Button';
import AnimatedTitle from '../AnimatedTitle';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer'
import styles from './index.module.css'

export default function ProjectPageContent({project}) {
    const [isOpenedImg, setIsOpenedImg] = useState(false)
    const [openedImgSrc, setOpenedImgSrc] = useState('')
    const [openedImgAlt, setOpenedImgAlt] = useState('')

    const [imgDisplayed1, setImgDisplayed1] = useState(false)
    const [imgDisplayed2, setImgDisplayed2] = useState(false)
    const [imgDisplayed3, setImgDisplayed3] = useState(false)

    const [ref1, inView1] = useInView({
        triggerOnce:true
    });
    const [ref2, inView2] = useInView({
        triggerOnce:true
    });
    const [ref3, inView3] = useInView({
        triggerOnce:true
    });

    useEffect(() => {
        if(inView1) {
            setImgDisplayed1(true)
        }
        return () => {
            setImgDisplayed1(false)
        }
    },[inView1])
    useEffect(() => {
        if(inView2) {
            setImgDisplayed2(true)
        }
        return () => {
            setImgDisplayed2(false)
        }
    },[inView2])
    useEffect(() => {
        if(inView3) {
            setImgDisplayed3(true)
        }
        return () => {
            setImgDisplayed3(false)
        }
    }, [inView3])



    return (
        isOpenedImg ? 
            <div className={styles.overlay} onClick={() => setIsOpenedImg(false)}>
                <Image src={openedImgSrc} alt={openedImgAlt} className={styles.full_img} fill priority/>
            </div>
        : <div className="container">
            <div className={styles.introduction}>
                <Image src={project.mainImg} alt={project.title} width={350} height={350} className={styles.main_img} priority/>
                <div className={styles.presentation}>
                    <AnimatedTitle h1Text={project.title}/>
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
                <h2 className={styles.img_title}>Home</h2>
                    <div href={project.pictures[0]} className={`${styles.img_container} ${imgDisplayed1 ? styles.display_container : ''}`} ref={ref1} aria-label="Afficher l'image de la page principale" >
                        <Image 
                            src={project.pictures[0]} alt={`Page d'accueil ${project.title}`} 
                            fill sizes='(max-width: 500px) 100vw, 600px' quality={100}
                            className={`${styles.img} ${imgDisplayed1 ? styles.display_img : ''}`} priority
                            onClick={() => {
                                setIsOpenedImg(true)
                                setOpenedImgSrc(project.pictures[0])
                                setOpenedImgAlt(`Page d'accueil ${project.title}`)
                            }}
                        />  
                    </div>
                </div>
                <div className={styles.picture_container}>
                    <h2 className={styles.img_title}>Desktop</h2>
                    <div href={project.pictures[1]} className={`${styles.img_container} ${imgDisplayed2 ? styles.display_container : ''}`} ref={ref2} aria-label="Afficher l'image du site sur ordinateur">
                        <Image 
                            src={project.pictures[1]} alt={`Page ${project.title}`} 
                            fill sizes='(max-width: 500px) 100vw, 600px' quality={100}
                            className={`${styles.img} ${imgDisplayed2 ? styles.display_img : ''}`} priority
                            onClick={() => {
                                setIsOpenedImg(true)
                                setOpenedImgSrc(project.pictures[1])
                                setOpenedImgAlt(`Page ${project.title}`)
                            }}
                        />
                    </div>
                </div>
                <div className={styles.picture_container}>
                    <h2 className={styles.img_title}>Mobile</h2>
                    <div href={project.pictures[2]} className={`${styles.img_container} ${imgDisplayed3 ? styles.display_container : ''}`} ref={ref3} aria-label="Afficher l'image du site sur mobile">
                        <Image 
                            src={project.pictures[2]} alt={`${project.title} sur mobile`} 
                            fill sizes='(max-width: 500px) 100vw, 500px' quality={100}
                            className={`${styles.img} ${imgDisplayed3? styles.display_img : ''}`} priority
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