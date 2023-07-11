'use client';

import { GrMail, GrLinkedinOption, GrGithub } from "react-icons/gr";
import { AiOutlineMenu } from 'react-icons/ai'
import Link from "next/link"
import Image from "next/image"
import Menu from '../Menu'
import styles from './index.module.css'
import * as menuActions from '@/redux/features/menuSlice'
import { useDispatch, useSelector } from 'react-redux';
import { selectMenu } from '@/redux/selectors';

export default function Header() {
    const menu = useSelector(selectMenu);
    const dispatch = useDispatch();

    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <Link href='/'>
                    <Image 
                        src='/logo--full.svg' 
                        alt="dessin vectoriel de plusieurs triangles superposés"
                        width={100}
                        height={37}
                        className={`${styles.logo} ${styles.logo_full}`}
                        priority
                    />
                </Link>
                <Link href='/'>
                    <Image 
                        src='/logo--simple.svg' 
                        alt="dessin vectoriel de plusieurs triangles superposés"
                        width={37}
                        height={37}
                        className={`${styles.logo} ${styles.logo_simple}`}
                        priority
                    />
                </Link>
                <AiOutlineMenu onClick={() => dispatch(menuActions.toggle())} className={styles.menu_icon}/>
                {menu && 
                    <Menu/>
                }
            </div>
            <nav className={styles.social}>
                <a href="mailto:sandra.petereau@outlook.fr">
                    <GrMail className={styles.icon}/>
                </a>
                <a href="https://github.com/Jeanne4L" target="_blank">
                    <GrGithub className={styles.icon}/>
                </a>
                <a href="https://www.linkedin.com/in/sandra-petereau/" target="_blank">
                    <GrLinkedinOption className={styles.icon}/>
                </a>
            </nav>
        </header>
    )
}