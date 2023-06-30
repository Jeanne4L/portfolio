import Image from 'next/image';
import Link from 'next/link';
import ItemSummary from '../ItemSummary';
import styles from './index.module.css';

export default function Card({ srcImg, title, summary }) {
	return (
		<Link href='' className={styles.card}>
			<div>
				<Image src={srcImg} alt={title} className={styles.img} width={320} height={320}/>
				<ItemSummary title={title} summary={summary} />
			</div>
		</Link>
	);
}
