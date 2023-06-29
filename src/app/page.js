import styles from './page.module.css';
import Tag from '@/components/Tag';

export default function Home() {
	return (
		<main className={styles.main}>
			<Tag text={'HTML'} />
		</main>
	);
}
