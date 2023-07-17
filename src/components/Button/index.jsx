'use client'

import Link from "next/link"
import { FiArrowUpRight } from "react-icons/fi";
import { useSelector } from 'react-redux';
import { selectTheme } from '@/redux/selectors';
import styles from './index.module.css'

export default function Button({ link, externLink, text, onClick, page }) {
    const theme = useSelector(selectTheme);
    let className;
    if(theme === 'dark' || page === '404') {
        className= styles.dark_mode_btn
    } else {
        className= ''
    }

    if(link && text) {
        return(
            <Link href={link} className={`${styles.btn} ${className}`}>
                {text}
                <FiArrowUpRight className={styles.icon}/>
            </Link> 
        )
    } else if (externLink) {
        return(
            <a href={externLink} className={`${styles.btn} ${className}`} target='_blank'>
                {text}
                <FiArrowUpRight className={styles.icon}/>
            </a>     
        )
    } else if(!text) {
        return (
            <Link href={link} className={styles.arrow_btn} aria-label='Aller sur la page Parcours'>
                <FiArrowUpRight className={`${styles.icon} ${theme === 'dark' ? styles.dark_mode_icon : ''}`} />
            </Link>
        )
    } else {
        return(
            <div className={`${styles.btn} ${page === 'contact' ? styles.large_btn : ''} ${className}`} 
                onClick={onClick} role='button' tabIndex={0}>
                {text}
                <FiArrowUpRight className={styles.icon}/>
            </div>
        )
    }
}