import Form from '@/components/Form';
import styles from './page.module.css';

export default function Contact() {
    return(
        <div className='container'>
            <h1 className={styles.title}>Besoin d'une développeuse web ?</h1>
            <Form/>
        </div>
    )
}