import Link from "next/link"
import Image from "next/image"
import MenuIcon from "../MenuIcon"
import styles from './index.module.css'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.container}`}>
                <Link href='/'>
                    <Image 
                        src='/logo--full.svg' 
                        alt="dessin vectoriel de plusieurs triangles superposés"
                        width={87}
                        height={32}
                        className={styles.logo}
                        priority
                    />
                </Link>
                <MenuIcon/>
            </div>
        </header>
    )
}