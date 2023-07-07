'use client'

import Link from "next/link"
import { FiArrowUpRight } from "react-icons/fi";
import styles from './index.module.css'

export default function Button({ link, externLink, text, id, onClick }) {
    if(link) {
        return(
            <Link href={link} className={styles.button}>
                {text}
                <FiArrowUpRight className={styles.btn_icon}/>
            </Link> 
        )
    } else if (externLink) {
        return(
            <a href={externLink} className={styles.button}>
                {text}
                <FiArrowUpRight className={styles.btn_icon}/>
            </a>     
        )
    } else {
        return(
            <div className={styles.button} id={id ? id : ''} onClick={onClick}>
                {text}
                <FiArrowUpRight className={styles.btn_icon}/>
            </div>
        )
    }
}