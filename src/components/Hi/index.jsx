'use client'

import { useSelector } from 'react-redux';
import { selectTheme } from '@/redux/selectors';
import styles from './index.module.css'

export default function Hi() {
	const theme = useSelector(selectTheme);

	return (
        <p className={`${styles.p} ${theme === 'dark' ? styles.dark_p : ''}`}>
            Bonjour, je suis
        </p>
    )
}