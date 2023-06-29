'use client'

import Image from 'next/image';
import Message from '../Message';
import Input from '../Input';
import { AiOutlineArrowLeft } from "react-icons/ai";
import { IoIosPaperPlane } from "react-icons/io";
import styles from './index.module.css'

export default function Conversation() {
    return(
        <div className={styles.container}>
            <div className={styles.header}>
                <AiOutlineArrowLeft className={styles.icon}/>
                <Image
                    src={'/images/profile.jpg'}
                    alt='Sandra Petereau'
                    width={55}
                    height={55}
                    className={styles.img}
                />
            </div>
            <div className={styles.window}>
                <Message author={'Sandra'} text={'Bonjour ! Je vous raconte mon parcours ?'} />
                <Message author={'visitor'} text={'Bien sûr !'} />
            </div>
            <div className={styles.footer}>
                <div className={styles.input_container}>
                    <Input type={'text'} style={'career'}/>
                    <div className={styles.btn}>
                        <IoIosPaperPlane className={styles.icon}/>
                    </div>
                </div>
            </div>
        </div>
    )
}