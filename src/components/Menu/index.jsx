import { VscColorMode, VscChromeClose } from "react-icons/vsc";
import { GrMail, GrLinkedinOption } from "react-icons/gr";
import { TbBrandGithubFilled } from "react-icons/tb";
import Link from "next/link";
import styles from './index.module.css'

export default function Menu() {
    return (
        <div className={styles.overlay}>
            <div className={styles.icons}>
                <VscColorMode className={styles.icon}/>
                <VscChromeClose className={styles.icon}/> 
            </div>
            <nav className={styles.int_nav}>
                <ul className={styles.text}>
                    <Link href={'/#projects'}>
                        <li className={styles.li}>Projets</li>
                    </Link>
                    <Link href={'/contact'}>
                        <li className={styles.li}>Contact</li>
                    </Link>
                    <Link href={'/career'}>
                        <li className={styles.li}>Parcours</li>
                    </Link>
                </ul>
            </nav>
            <nav className={styles.social}>
                <a href="mailto:sandra.petereau@outlook.fr">
                    <GrMail className={styles.icon}/>
                </a>
                <a href="https://github.com/Jeanne4L" target="_blank">
                    <TbBrandGithubFilled className={styles.icon}/>
                </a>
                <a href="https://www.linkedin.com/in/sandra-petereau/" target="_blank">
                    <GrLinkedinOption className={styles.icon}/>
                </a>
            </nav>
        </div>
    )
}