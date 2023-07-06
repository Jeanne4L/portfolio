import Tag from '@/components/Tag';
import experiences from '@/data/career.json';
import { BsFillCloudArrowDownFill } from "react-icons/bs";
import styles from './page.module.css'

export default function CareerXP({ params }) {
    const xp = experiences.filter((xp) => xp.id === params.id);

    if(xp) {
        return(
            xp.map((xp) => (
                <div className='container' key={`xp${xp.id}-${Date.now()}`}>
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
                        <a href='' download className={styles.download}>
                            Télécharger mon cv
                            <BsFillCloudArrowDownFill className={styles.icon}/>
                        </a>
                    </div>
                </div>
            ))
        )
    }
}