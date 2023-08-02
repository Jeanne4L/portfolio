'use client';

import { VscChromeClose } from "react-icons/vsc";
import { GrMail, GrLinkedinOption, GrGithub } from "react-icons/gr";
import { useDispatch, useSelector } from 'react-redux';
import { selectMenu } from '@/redux/selectors';
import * as menuActions from '@/redux/features/menuSlice';
import Button from '../Button';
import Link from "next/link";
import styles from './index.module.css'

export default function Menu() {
    const menu = useSelector(selectMenu);
    const dispatch = useDispatch();

    return (
        <div
            tabIndex={-1}
            role='menu'
            aria-hidden={menu ? 'false' : 'true'}
            id='menu'
            className={`${styles.overlay} ${menu ? styles.display_menu : ''}`}
        >
            <div className={`container ${styles.menu_container}`}>
                <div className={styles.close}>
                    <VscChromeClose className={styles.icon} 
                        onClick={() => dispatch(menuActions.toggle())} 
                        role='button' tabIndex={menu ? 0 : -1}
                        aria-label='Fermer le menu' aria-expanded="true" aria-controls='menu'/> 
                </div>
                <nav className={styles.int_nav}>
                    <ul className={styles.text}>
                        <Link 
                            className={styles.link}
                            href={'/career'} 
                            onClick={() => dispatch(menuActions.toggle())}  
                            tabIndex={menu ? 0 : -1}
                        >
                            <li className={styles.li}>Parcours</li>
                        </Link>
                        <Link 
                            className={styles.link}
                            href={'/#skills'} 
                            onClick={() => dispatch(menuActions.toggle())}  
                            tabIndex={menu ? 0 : -1}
                        >
                            <li className={styles.li}>Compétences</li>
                        </Link>
                        <Link 
                            href={'/#projects'} 
                            className={styles.link}
                            onClick={() => dispatch(menuActions.toggle())} 
                            tabIndex={menu ? 0 : -1}
                        >
                            <li className={styles.li}>Projets</li>
                        </Link>
                    </ul>
                    <Button link={'/contact'} text={'Me contacter'} onClick={() => dispatch(menuActions.toggle())} tabIndex={menu ? 0 : -1} />
                </nav>
                <nav className={styles.social}>
                    <a className={styles.link}
                        href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} 
                        aria-label='Envoyer un email' tabIndex={menu ? 0 : -1}>
                        <GrMail className={styles.icon}/>
                    </a>
                    <a className={styles.link}
                        href="https://github.com/Jeanne4L" target="_blank" 
                        aria-label='Aller sur mon Github' tabIndex={menu ? 0 : -1}>
                        <GrGithub className={styles.icon}/>
                    </a>
                    <a className={styles.link}
                        href="https://www.linkedin.com/in/sandra-petereau/" target="_blank" 
                        aria-label='Aller sur mon LinkedIn' tabIndex={menu ? 0 : -1}
                    >
                        <GrLinkedinOption className={styles.icon}/>
                    </a>
                </nav>
            </div>
        </div>
    )
}