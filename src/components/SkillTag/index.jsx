'use client'

import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './index.module.css'

export default function SkillTag({text, children}) {
    const [isDisplayed, setIsDisplayed] = useState(false);

    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.5
    });

    useEffect(() => {
        if(inView) {
            setIsDisplayed(true);
        }
    }, [inView, isDisplayed]);

    useEffect(() => {
        return () => {
            setIsDisplayed(false);
        };
    }, []);

    return(
        <div className={styles.container}>
            <div className={`${styles.circle} ${isDisplayed ? styles.anim : ''}`} ref={ref}>
                {children}
            </div>
            <p className={`${styles.text} ${isDisplayed ? styles.text_anim : ''}`}>{text}</p>
        </div>
    )
}