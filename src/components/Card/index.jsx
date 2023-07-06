import Image from 'next/image';
import Link from 'next/link';
import ItemSummary from '../ItemSummary';
import styles from './index.module.css';

export default function Card({ srcImg, title, summary }) {
	return (
		<Link href='' className={styles.link}>
			<div className={styles.card}>
				<Image src={srcImg} alt={title} className={styles.img} width={290} height={290}/>
				<ItemSummary title={title} summary={summary} page={'home'}/>
			</div>
		</Link>
	);
}
