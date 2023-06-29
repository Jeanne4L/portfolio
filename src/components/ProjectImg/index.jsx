import Image from 'next/image';
import styles from './index.module.css'

export default function ProjectImg({src, projectTitle, width, height}) {
    return <Image
        src={src}
        alt={projectTitle}
        width={width}
        height={height}
        className={styles.img}
    />
}