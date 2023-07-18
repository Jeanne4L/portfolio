import Form from '@/components/Form';
import styles from './page.module.css';

export const metadata = {
	title: 'Sandra Petereau | Contact',
    desciption: 'À la recherche d\'une développeuse web junior ? Contactez-moi!',
    robots: {
        index: false,
        follow: false,
        nocache: true
    }
};

export default function Contact() {
    return(
        <div className='container'>
            <h1 className={styles.title}>Besoin d'une développeuse web ?</h1>
            <Form/>
        </div>
    )
}