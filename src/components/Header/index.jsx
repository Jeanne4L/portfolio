'use client';

import { GrMail, GrLinkedinOption, GrGithub } from "react-icons/gr";
import { AiOutlineMenu } from 'react-icons/ai'
import dynamic from 'next/dynamic';
const Menu = dynamic(() => import('../Menu'))
import Link from 'next/link'
import Image from 'next/image'
import * as menuActions from '@/redux/features/menuSlice'
import { useDispatch } from 'react-redux';
import styles from './index.module.css'


export default function Header() {
    const dispatch = useDispatch();

    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <Link href='/' aria-label='Revenir à la page principale'>
                    <Image 
                        src='/logo--full.svg' 
                        alt="dessin vectoriel de plusieurs triangles superposés"
                        width={100}
                        height={37}
                        className={`${styles.logo} ${styles.logo_full}`}
                        priority
                    />
                </Link>
                <Link href='/' aria-label='Revenir à la page principale'>
                    <Image 
                        src='/logo--simple.svg' 
                        alt="dessin vectoriel de plusieurs triangles superposés"
                        width={37}
                        height={37}
                        className={`${styles.logo} ${styles.logo_simple}`}
                        priority
                    />
                </Link>
                <AiOutlineMenu onClick={() => dispatch(menuActions.toggle())} className={styles.menu_icon}  role='button' aria-label='Afficher le menu' aria-haspopup="true" aria-expanded="false" aria-controls='menu' tabIndex={0}/>
                <Menu/>

            </div>
            <nav className={styles.social}>
                <a href={`mailto:${process.env.NEXT_PUBLIC_EMAIL}`} aria-label='Envoyer un email'>
                    <GrMail className={styles.icon}/>
                </a>
                <a href="https://github.com/Jeanne4L" target="_blank" aria-label='Aller sur mon Github'>
                    <GrGithub className={styles.icon}/>
                </a>
                <a href="https://www.linkedin.com/in/sandra-petereau/" target="_blank" aria-label='Aller sur mon LinkedIn'>
                    <GrLinkedinOption className={styles.icon}/>
                </a>
            </nav>
        </header>
    )
}