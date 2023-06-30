import styles from './index.module.css'

export default function Modal({modalTitle, children}) {
    return(
        <div className='overlay'>
            <div className='modal'>
                <div className='container'>
                    <h1 className={styles.title}>{modalTitle}</h1>
                    {children}
                </div>
            </div>
        </div>
    )
}