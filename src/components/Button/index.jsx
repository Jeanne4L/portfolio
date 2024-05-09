'use client'

import Link from "next/link"
import styles from './index.module.css'

export default function Button({ link, externLink, text, onClick }) {
    // BUTTON WITH LINK INSIDE THE SITE
    if(link && text) {
        return(
            <Link href={link} className={styles.btn} onClick={onClick}>
                {text}
            </Link> 
        )
    // BUTTON WITH LINK OUTSIDE THE SITE
    } else if (externLink && text) {
        return(
            <a href={externLink} className={styles.btn} target='_blank'>
                {text}
            </a>     
        )
    } 
}