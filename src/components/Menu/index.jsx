import { VscColorMode, VscChromeClose } from "react-icons/vsc";
import { GrMail, GrLinkedinOption, GrGithub } from "react-icons/gr";
import { useDispatch } from 'react-redux';
import * as menuActions from '@/redux/features/menuSlice'
import Link from "next/link";
import styles from './index.module.css'

export default function Menu() {
    const dispatch = useDispatch()
    return (
        <div className={styles.overlay}>
            <div className={styles.icons}>
                <VscColorMode className={styles.icon}/>
                <VscChromeClose className={styles.icon} onClick={() => dispatch(menuActions.toggle())}/> 
            </div>
            <nav className={styles.int_nav}>
                <ul className={styles.text}>
                    <Link href={'/#projects'} onClick={() => dispatch(menuActions.toggle())}>
                        <li className={`white-c ${styles.li}`}>Projets</li>
                    </Link>
                    <Link href={'/contact'} onClick={() => dispatch(menuActions.toggle())}>
                        <li className={`white-c ${styles.li}`}>Contact</li>
                    </Link>
                    <Link href={'/career'} onClick={() => dispatch(menuActions.toggle())}>
                        <li className={`white-c ${styles.li}`}>Parcours</li>
                    </Link>
                </ul>
            </nav>
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
        </div>
    )
}