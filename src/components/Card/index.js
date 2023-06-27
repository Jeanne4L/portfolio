import Image from "next/image"
import Link from "next/link"
import styles from './index.module.css'

export default function Card({srcMainImg, title, summary}) {
    return(
        <Link href='' className={styles.card}>
            <div>
                <Image 
                    src={srcMainImg} 
                    alt={title}
                    className={styles.img}
                />
                <h3>{title}</h3>
                <p>{summary}</p>
            </div>
        </Link>
    )
}