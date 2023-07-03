import styles from './index.module.css'

export default function ItemSummary({title, summary, page, id}) {
    return(
        <div className={`${styles.container} ${page === 'career' ? styles.career_container : ''}`} id={id}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.summary}>{summary}</p>
        </div>
    )
}