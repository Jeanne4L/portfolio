import styles from './index.module.css'

export default function ItemSummary({title, summary}) {
    return(
        <>
            <h3>{title}</h3>
            <p className={styles.summary}>{summary}</p>
        </>
    )
}