import styles from './page.module.css'
import SpinnerIcon from '@/components/SpinnerIcon'

export default function Home() {
    return (
        <main className={styles.main}>
            <h1>Home</h1>
            <SpinnerIcon/>
        </main>
    )
}
