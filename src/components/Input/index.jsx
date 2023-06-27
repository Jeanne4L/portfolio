'use client' 

import styles from './index.module.css'
import btnStyles from '../Button/index.module.css'

export default function Input({label, type, name, id, value}) {
    return (
        <>
            {label && 
                <label htmlFor={id} className={styles.label}>{label}</label>
            }
            {type === 'submit' ?
                <input type={type} name={name} id={id} value={value} className={`${btnStyles.button} ${styles.button}`}/>
                :
                <input type={type} name={name} id={id} value={value} className={styles.input}/>
            }

        </>
    )
}