'use client'

import Image from 'next/image';
import Link from 'next/link';
import ItemSummary from '../ItemSummary';
import Tag from '../Tag';
import { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import styles from './index.module.css';

// PROJECT PREVIEW
export default function Card({ srcImg, title, summary, id, hardSkills }) {
    const [imgDisplayed, setImgDisplayed] = useState(false);

    const [ref, inView] = useInView({
        triggerOnce: true,
    });

    useEffect(() => {
        setImgDisplayed(inView);
    }, [inView]);

    useEffect(() => {
        return () => {
            setImgDisplayed(false);
        };
    }, []);

	return (
		<Link href={`/${id}`} className={styles.link}>
			<div className={styles.card}>
                <div className={`${styles.img_container} ${imgDisplayed ? styles.display_container : ''}`} ref={ref}>
				    <Image src={srcImg} alt={title} className={styles.img} fill sizes='(max-width: 500px) 100vw, 700px' quality={100} priority/>
                </div>
				<ItemSummary title={title} summary={summary} page={'home'}/>
                <div className={styles.tags}>
                    {hardSkills.map((skill, index) => (
                        <Tag text={skill} page={'home'} key={`skill-${index}-${Date.now()}`}/>
                    ))}
                </div>
			</div>
		</Link>
	);
}
