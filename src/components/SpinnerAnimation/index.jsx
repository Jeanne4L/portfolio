'use client'

import Lottie from 'lottie-react';
import spinner from '@/data/spinner.json';
import styles from './index.module.css'

export default function SpinnerAnimation() {
    return (
        <div className={styles.overlay}>
            <div className={styles.container}>
                <Lottie animationData={spinner} className={styles.svg}/>
            </div>
        </div>
    )
}