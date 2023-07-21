'use client'

import styles from './index.module.css'
import { useMemo } from 'react';

export default function ItemSummary({title, summary, page, selected, hovered, id, onClick, onFocus, onMouseOver, onMouseOut}) {

    // CLASSNAME WITH ID 
    const classMap = useMemo(() => ({
        'commerce': styles.commerce,
        'prep': styles.prep,
        'training': styles.training,
        'goals': styles.goals
    }), [])
    const className = classMap[id];

    const containerClass = `${styles.container} 
                            ${page === 'career' ? styles.career_container : styles.home_container} 
                            ${className} ${hovered ? styles.hover : ''}`;
    const titleClass = `${styles.title} ${page === 'home' ? styles.white_c : ''} 
                        ${selected && page === 'career' ? styles.active : ''} `;
    const summaryClass = `${styles.summary} ${page === 'home' ? styles.white_c : ''} 
                        ${selected && page === 'career' ? styles.active : ''} `

    return(
        <section 
            className={containerClass} 
            onClick={onClick} onFocus={onFocus} onMouseOver={onMouseOver} onMouseOut={onMouseOut}
            tabIndex={0}
        >
            <h3 className={titleClass}>{title}</h3>
            <h4 className={summaryClass}>{summary}</h4>
        </section>
    )
};