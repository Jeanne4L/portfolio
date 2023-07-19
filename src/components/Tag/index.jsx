import styles from './index.module.css'

export default function Tag({text, page}) {
    return (
        <div className={`${styles.tag} ${page === 'career' ? styles.career_tags : styles.project_tags}`}>
            {text}
        </div>
    )
}