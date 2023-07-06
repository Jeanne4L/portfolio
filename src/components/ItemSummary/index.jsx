import styles from './index.module.css'

export default function ItemSummary({title, summary, page, id, activeId, clickedElt}) {
    return(
        <div 
            className={`${styles.container} 
                ${activeId !== null && page === 'career' ? styles.active : ''} 
                ${page === 'career' ? styles.career_container : ''}`} 
            id={id}
            onClick={clickedElt}
        >
            <h3 className={`${styles.title} ${page === 'home' ? styles.white_c : ''}`}>
                {title}
            </h3>
            <p className={`${styles.summary} ${page === 'home' ? styles.white_c : ''}`}>
                {summary}
            </p>
        </div>
    )
};