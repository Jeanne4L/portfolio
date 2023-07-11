'use client'

import styles from './index.module.css'
import Button from '../Button'
import { useState } from 'react'

export default function Form() {
    const [invalidText, setInvalidText] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    const [incompleteForm, setIncompleteForm] = useState(false);
    const [submit, setSubmit] = useState(false);
    const [fieldValue, setFieldValue] = useState({
        name: '',
        email: '',
        message: ''
    });

    function handleSubmit(e) {
        e.preventDefault();

        if(fieldValue.name.trim() === '' || fieldValue.email.trim() === '' || fieldValue.message.trim() === '' || invalidText || invalidEmail){
            setIncompleteForm(true);
        } else {
            setIncompleteForm(false);
            setSubmit(true);
            setFieldValue({
                name: '',
                email: '',
                message: ''
            });
        }
    }
    function handleChange(e) {
        const { name, value } = e.target;

        if(name === 'name') {
            if(/[^A-Za-zéêèÉÊÈ\s]/.test(value)){
                setInvalidText(true);
            } else {
                setInvalidText(false);
            }
        }
        if(name === 'email') {
            if(!emailRegex.test(value)){
                setInvalidEmail(true);
            } else {
                setInvalidEmail(false);
            }
        }

        setFieldValue((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            {incompleteForm ? 
                <p className={`${styles.error} ${styles.general}`}>Merci de remplir tous les champs</p>
            : ''}

            {submit ?
                <p className={`${styles.success} ${styles.general}`}>Message envoyé, je vous réponds au plus vite !</p>
            : ''}

            <div className={styles.flex_container}>
                <div className={styles.inputContainer}>
                    <label htmlFor='name' className={styles.label}>Votre nom *</label>
                    <input type='text' name='name' id='name' className={styles.input} value={fieldValue.name} onChange={handleChange} required/>
                    {invalidText ? 
                        <p className={styles.error}>Ce champ ne doit contenir que des lettres</p>
                    : ''
                    }
                </div>

                <div className={styles.inputContainer}>
                    <label htmlFor='email' className={styles.label}>Votre email *</label>
                    <input type='text' name='email' id='email' className={styles.input} value={fieldValue.email} onChange={handleChange} required/>
                    {invalidEmail ? 
                        <p className={styles.error}>Cet email est invalide</p>
                    : ''
                    }
                </div>
            </div>

            <label htmlFor='message' className={styles.label}>Votre message *</label>
            <textarea name="message" placeholder="Je cherche justement une développeuse motivée !" className={styles.textarea} value={fieldValue.message} onChange={handleChange} required/>

            <Button text={'Envoyer'} onClick={handleSubmit} page={'contact'}/>
        </form>
    )
}