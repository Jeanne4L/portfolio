'use client'

import { useSelector } from 'react-redux'
import { selectTheme } from '@/redux/selectors'
import styles from './index.module.css'


export default function ProjectImgTitle({title}) {
    const theme = useSelector(selectTheme)
    return (
        <h2 className={`${styles.title} ${theme === 'dark' ? styles.dark_mode : ''}`}>
            {title}
        </h2>
    )
}