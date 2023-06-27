'use client'

import Link from "next/link"
import styles from './index.module.css'

export default function Button({link, externLink, text}) {
    if(link || externLink) {
        return(
            <div className={styles.button}>
                {link ? (
                    <Link href={link} className={styles.text}>
                        {text}
                    </Link>
                ) :
                (
                    <a href={externLink} className={styles.text}>
                        {text}
                    </a>
                )}
            </div>
        )
    } else {
        return(
            <button className={styles.button}>
                {text}
            </button>
        )
    }
}