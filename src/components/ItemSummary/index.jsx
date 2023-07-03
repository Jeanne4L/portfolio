import { forwardRef } from 'react'
import styles from './index.module.css'

// export default function ItemSummary({title, summary, page, id}) {
//     return(
//         <div className={`${styles.container} ${page === 'career' ? styles.career_container : ''}`} id={id}>
//             <h3 className={styles.title}>{title}</h3>
//             <p className={styles.summary}>{summary}</p>
//         </div>
//     )
// }

// eslint-disable-next-line react/display-name
const ItemSummary = forwardRef(({title, summary, page, id}, ref) => {
    return(
        <div className={`${styles.container} ${page === 'career' ? styles.career_container : ''}`} id={id} ref={ref}>
            <h3 className={styles.title}>{title}</h3>
            <p className={styles.summary}>{summary}</p>
        </div>
    )
});


export default ItemSummary;