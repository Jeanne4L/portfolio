import { VscColorMode, VscChromeClose } from "react-icons/vsc";
import { GrMail, GrLinkedinOption, GrGithub } from "react-icons/gr";
import { useDispatch } from 'react-redux';
import * as menuActions from '@/redux/features/menuSlice';
import * as themeActions from '@/redux/features/themeSlice';
import { useSelector } from 'react-redux';
import { selectTheme } from '@/redux/selectors';
import Link from "next/link";
import styles from './index.module.css'

export default function Menu() {
    const dispatch = useDispatch();
    const theme = useSelector(selectTheme);
    return (
        <div className={`${styles.overlay} ${theme === 'dark' ? styles.dark_mode : ''}`}>
            <div className={styles.icons}>
                <VscColorMode className={styles.icon} onClick={() => dispatch(themeActions.toggle())}/>
                <VscChromeClose className={styles.icon} onClick={() => dispatch(menuActions.toggle())}/> 
            </div>
            <nav className={styles.int_nav}>
                <ul className={styles.text}>
                    <Link href={'/#projects'} onClick={() => dispatch(menuActions.toggle())}>
                        <li className={`${styles.li}`}>Projets</li>
                    </Link>
                    <Link href={'/contact'} onClick={() => dispatch(menuActions.toggle())}>
                        <li className={`${styles.li}`}>Contact</li>
                    </Link>
                    <Link href={'/career'} onClick={() => dispatch(menuActions.toggle())}>
                        <li className={`${styles.li}`}>Parcours</li>
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