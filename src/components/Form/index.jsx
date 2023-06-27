'use client'

import styles from './index.module.css'
import Input from "../Input"

export default function Form() {
    return(
        <form className={styles.form}>
            <Input label={'Votre nom'} type={'text'} name={'name'} id={'name'}/>
            <Input label={'Votre email'} type={'email'} name={'email'} id={'email'}/>
            <label htmlFor='message'>Votre message</label>
            <textarea name="message" placeholder="Je cherche justement une développeuse motivée !" className={styles.textarea}/>
            <Input type={'submit'} value={'Envoyer'} />
        </form>
    )
}