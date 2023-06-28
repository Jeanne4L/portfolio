'use client'

import Image from "next/image"
import styles from './index.module.css'

export default function SpinnerIcon() {
    return (
        <div className={styles.container}>
            <Image src={'/spinner.svg'} alt="dessin vectoriel abstrait" width={95} height={95}/>
        </div>
    )
}