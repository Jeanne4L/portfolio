'use client';

import Tag from '../Tag';
import { BsFillCloudArrowDownFill } from "react-icons/bs";
import { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import * as xpActions from '@/redux/features/xpSlice';
import styles from './index.module.css';

export default function XpPageContent({xp}) {
    const dispatch = useDispatch();

    // RESET GLOBAL STATE THAT COLORS LOGO AND XP SUMMARY ON CAREER PAGE
    useEffect(() => {
        dispatch(xpActions.reset());
    }, [dispatch]);

    return(
        <div className={`container ${styles.container}`}>
            <h1 className={styles.title}>{xp.title}</h1>
            
            <div className={`${styles.paragraph} ${xp.softSkills ? '' : styles.margin}`}>
                {xp.content.map((paragraph, index) => (
                    <p key={`${xp.id}-${index}-${Date.now()}`} className={styles.text}>
                        {paragraph}
                    </p>
                ))}
            </div>
            
            {xp.softSkills && 
                <div className={styles.tags}>
                    {xp.softSkills.map((skill, index) => (
                        <Tag text={skill} page={'career'} key={`${xp.id}--${index}-${Date.now()}`}/>
                    ))}
                </div>
            }

            <div className={styles.footer}>
                <a href='/CV_Petereau_Sandra.zip' download className={styles.download} aria-label='Télécharger le cv au format pdf'>
                    Télécharger mon cv
                    <BsFillCloudArrowDownFill className={styles.icon}/>
                </a>
            </div>
        </div>
    )
}