'use client';

import Tag from '@/components/Tag';
import experiences from '@/data/career.json';
import { notFound } from 'next/navigation';
import { BsFillCloudArrowDownFill } from "react-icons/bs";
import { selectTheme } from '@/redux/selectors';
import { useSelector } from 'react-redux';
import styles from './page.module.css'

function fetchXP(id) {
    const xp = experiences.find((xp) => xp.id === id);
    return xp
}
export default function CareerXP({ params }) {
    const theme = useSelector(selectTheme);
    const xp = fetchXP(params.id);

    if(!xp) {
        notFound();
    } else {
        return(
            <div className='container'>
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
}