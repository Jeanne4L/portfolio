'use client'

import Link from "next/link"
import { FiArrowUpRight } from "react-icons/fi";
import styles from './index.module.css'

export default function Button({ link, externLink, text, onClick, page }) {
    // BUTTON WITH LINK INSIDE THE SITE
    if(link && text) {
        return(
            <Link href={link} className={styles.btn}>
                {text}
                <FiArrowUpRight className={styles.icon}/>
            </Link> 
        )
    // BUTTON WITH LINK OUTSIDE THE SITE
    } else if (externLink) {
        return(
            <a href={externLink} className={styles.btn} target='_blank'>
                {text}
                <FiArrowUpRight className={styles.icon}/>
            </a>     
        )
    // BUTTON WITH JUST ICON
    } else if(!text) {
        return (
            <Link href={link} className={styles.arrow_btn} aria-label='Aller sur la page Parcours'>
                <FiArrowUpRight className={styles.icon} />
            </Link>
        )
    // SUBMIT BUTTON
    } else {
        return(
            <div className={`${styles.btn} ${page === 'contact' ? styles.large_btn : ''}`} 
                onClick={onClick} role='button' tabIndex={0}>
                {text}
                <FiArrowUpRight className={styles.icon}/>
            </div>
        )
    }
}