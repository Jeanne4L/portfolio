'use client';

import Tag from '../Tag';
import { BsFillCloudArrowDownFill } from "react-icons/bs";
import { selectTheme } from '@/redux/selectors';
import { useDispatch, useSelector } from 'react-redux';
import * as xpActions from '@/redux/features/xpSlice';
import styles from './index.module.css';
import { useEffect } from 'react'

export default function XpPageContent({xp}) {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(xpActions.reset());
      }, [dispatch]);

    const theme = useSelector(selectTheme);

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

            <div className={`${styles.footer} ${theme === 'dark' ? styles.footer_dark : ''}`}>
                <a href='' download className={styles.download}>
                    Télécharger mon cv
                    <BsFillCloudArrowDownFill className={styles.icon}/>
                </a>
            </div>
        </div>
    )
}