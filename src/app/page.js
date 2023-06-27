import styles from './page.module.css'
import Card from '@/components/Card'
import Button from '@/components/Button'
import projectImg from '@/images/booki/booki_1.png'

export default function Home() {
    return (
        <main className={styles.main}>
            <h1>Home</h1>
            <h2>Test</h2>
            <Card srcMainImg={projectImg} title={'Booki test'} summary={'This is a Card test'}/>
            <Button text={'button'}/>
        </main>
    )
}
