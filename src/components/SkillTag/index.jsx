import styles from './index.module.css'

export default function SkillTag({text, children}) {
    return(
        <div className={styles.container}>
            <div className={styles.circle}>
                {children}
            </div>
            <p className={styles.text}>{text}</p>
        </div>
    )
}