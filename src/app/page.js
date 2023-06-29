import styles from './page.module.css';
import Image from 'next/image';

export default function Home() {
	return (
		<main className={styles.main}>
			<Image
				src={'/images/booki/booki_main.jpg'}
				alt='Booki'
				width={250}
				height={350}
			/>
		</main>
	);
}
