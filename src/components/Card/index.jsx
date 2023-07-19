import Image from 'next/image';
import Link from 'next/link';
import ItemSummary from '../ItemSummary';
import styles from './index.module.css';

// PROJECT PREVIEW
export default function Card({ srcImg, title, summary, id }) {
	return (
		<Link href={`/${id}`} className={styles.link}>
			<div className={styles.card}>
                <div className={styles.img_container}>
				    <Image src={srcImg} alt={title} className={styles.img} width={290} height={290} priority/>
                </div>
				<ItemSummary title={title} summary={summary} page={'home'}/>
			</div>
		</Link>
	);
}
