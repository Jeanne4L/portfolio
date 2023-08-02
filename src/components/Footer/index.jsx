import { GrMail, GrLinkedinOption, GrGithub } from "react-icons/gr";
import styles from './index.module.css'

export default function Footer() {
    return (
        <footer className={styles.container}>
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
        </footer>
    )
}