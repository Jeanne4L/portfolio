'use client'

import { useSelector } from 'react-redux';
import { selectTheme } from '@/redux/selectors';
import styles from './index.module.css'

export default function ItemSummary({title, summary, page, selected, hovered, id, onClick, onFocus, onMouseOver, onMouseOut}) {
    const theme = useSelector(selectTheme)
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
        <section 
            className={`${styles.container} ${page === 'career' ? styles.career_container : styles.home_container} ${className} ${hovered ? styles.hover : ''}`} 
            onClick={onClick} onFocus={onFocus} onMouseOver={onMouseOver} onMouseOut={onMouseOut}
            tabIndex={0}
        >
            <h3 className={`${styles.title} ${page === 'home' ? styles.white_c : ''} ${selected && page === 'career' ? styles.active : ''} ${selected && page === 'career' && theme === 'dark' ? styles.dark_mode_active : ''}`}>
                {title}
            </h3>
            <h4 className={`${styles.summary} ${page === 'home' ? styles.white_c : ''} ${selected && page === 'career' ? styles.active : ''} ${selected && page === 'career' && theme === 'dark' ? styles.dark_mode_active : ''}`}>
                {summary}
            </h4>
        </section>
    )
};