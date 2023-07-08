'use client'

import Lottie from 'lottie-react';
import spinner from '@/data/spinner.json';
import Image from 'next/image';
import styles from './index.module.css'

export default function SpinnerAnimation() {
    return (
        <div className={styles.container}>
            <Lottie animationData={spinner} />;
            <Image src={'/spinner_name.svg'} alt='Sandra Petereau' width={195} height={86}/>
        </div>
    )
}