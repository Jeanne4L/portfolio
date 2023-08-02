import styles from './index.module.css'

export default function GradientTtitle({text, page}) {
    return(
        <h2 className={`${styles.title} ${page === 'home' ? styles.home_title : ''}`}>{text}</h2>
    )
}