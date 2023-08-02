import styles from './index.module.css'

export default function GradientTtitle({text}) {
    return(
        <h2 className={styles.title}>{text}</h2>
    )
}