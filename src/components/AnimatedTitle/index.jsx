'use client'

import { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './index.module.css'

export default function AnimatedTitle({h1Text, pText, h2Text, style}) {
    const [h1Display, setH1Display] = useState(false)
    const [h2Display, setH2Display] = useState(false)
    const [pDisplay, setPDisplay] = useState(false)

    const [h1Ref, inViewH1] = useInView({triggerOnce: true})
    const [h2Ref, inViewH2] = useInView({triggerOnce: true})
    const [pRef, inViewP] = useInView({triggerOnce: true})

    useEffect(() => {
        if(inViewH1) {
            setH1Display(true)
        }
        return() => {
            setH1Display(false)
        }
    }, [inViewH1])

    useEffect(() => {
        if(inViewH2) {
            setH1Display(true)
        }
        return() => {
            setH2Display(false)
        }
    }, [inViewH2])

    useEffect(() => {
        if(inViewP) {
            setPDisplay(true)
        }
        return() => {
            setPDisplay(false)
        }
    }, [inViewP])

    if(h1Text && pText) {
        return (
            <div className={`${styles.container} ${style === 'bold' ? styles.bold_container : ''}`}>
                <div className={`${styles.text_container} ${h1Display ? styles.display_text_container : ''}`} ref={h1Ref}>
                    <h1 className={`${styles.h1} ${style === 'bold' ? styles.bold_h1 : ''} ${style === 'center' ? styles.center_h1 : ''}`}>
                        {h1Text}
                    </h1>
                </div>
                <div className={`${styles.text_container} ${h1Display ? styles.display_text_container : ''}`} ref={pRef}>
                    <p className={`${styles.h1} ${styles.span} ${style === 'bold' ? styles.bold_h1 : ''} ${style === 'center' ? styles.center_h1 : ''}`}>
                        {pText}
                    </p>
                </div>
            </div>
        )
    } 
    if(h1Text) {
        return (
            <div className={`${styles.text_container} ${h1Display ? styles.display_text_container : ''}`} ref={h1Ref}>
                <h1 className={`${styles.h1} ${style === 'center' ? styles.center_h1 : ''}`}>
                    {h1Text}
                </h1>
            </div>
        )
    }
    if(h2Text) {
        return (
            <div className={`${styles.text_container} ${h1Display ? styles.display_text_container : ''}`} ref={h2Ref}>
                <h2 className={styles.h2}>
                    {h2Text}
                </h2>
            </div>
        )
    }
}