import MessageHour from '../MessageHour'
import styles from './index.module.css'

export default function Message({text, author}) {
    return (
        <div className={`${styles.container} ${author === 'Sandra' ? styles.left : styles.right}`}>
            <div className={`${styles.message} ${author === 'Sandra' ? styles.s_message : styles.v_message}`}>
                {text}
            </div>
            <MessageHour/>
        </div>
    )
}
