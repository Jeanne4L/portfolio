'use client'

import styles from './index.module.css'

export default function ItemSummary({title, summary, page, selected, hovered, id, onClick}) {
    let className;

    if(id === 'commerce') {
        className = styles.commerce;
    } else if(id === 'prep') {
        className = styles.prep;
    } else if(id === 'training') {
        className = styles.training;
    } else if (id === 'goals') {
        className = styles.goals
    }
    return(
        <div 
            className={`${styles.container} ${page === 'career' ? styles.career_container : styles.home_container} ${className} ${hovered ? styles.hover : ''}`} 
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