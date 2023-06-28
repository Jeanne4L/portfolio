'use client'

import styles from './index.module.css'
import inputStyles from '../Input/index.module.css'
import Input from "../Input"
import Button from '../Button'

export default function Form() {
    return(
        <form className={styles.form}>
            <Input label={'Votre nom'} type={'text'} name={'name'} id={'name'}/>
            <Input label={'Votre email'} type={'email'} name={'email'} id={'email'}/>
            <label htmlFor='message' className={inputStyles.label}>Votre message</label>
            <textarea name="message" placeholder="Je cherche justement une développeuse motivée !" className={styles.textarea}/>
            <Button text={'Envoyer'} id='submit'/>
        </form>
    )
}