import styles from './page.module.css';
import Conversation from '@/components/Conversation';
import Message from '@/components/Message';

export default function Home() {
	return (
		<main className={styles.main}>
			<Conversation />
		</main>
	);
}
