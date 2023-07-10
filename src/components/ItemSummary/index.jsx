'use client'

import styles from './index.module.css'

export default function ItemSummary({title, summary, page, selected, onClick}) {

    return(
        <div 
            className={`${styles.container} ${page === 'career' ? styles.career_container : ''}`} 
            onClick={onClick}
        >
            <h3 className={`${styles.title} ${page === 'home' ? styles.white_c : ''} ${selected && page === 'career' ? styles.active : ''}`}>
                {title}
            </h3>
            <p className={`${styles.summary} ${page === 'home' ? styles.white_c : ''} ${selected && page === 'career' ? styles.active : ''}`}>
                {summary}
            </p>
        </div>
    )
};