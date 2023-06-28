'use client' 

import styles from './index.module.css'

export default function Input({label, type, name, id, value}) {
    return (
        <>
            {label && 
                <label htmlFor={id} className={styles.label}>{label}</label>
            }
            <input type={type} name={name} id={id} value={value} className={styles.input}/>
        </>
    )
}