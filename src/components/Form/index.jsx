'use client'

import styles from './index.module.css'
import Button from '../Button'
import { useState } from 'react'
import sendEmail from '@/lib/sendEmail';

export default function Form() {
    const [invalidText, setInvalidText] = useState(false);
    const [invalidEmail, setInvalidEmail] = useState(false);
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;    
    const [incompleteForm, setIncompleteForm] = useState(false);
    const [submit, setSubmit] = useState({
        success: false,
        message:''
    });
    const [value, setValue] = useState({
        name: '',
        email: '',
        message: ''
    });

    // SUBMIT THE FORM
    async function handleSubmit(e) {
        e.preventDefault();

        // CHECK IF FIELD VALUE IS EMPTY
        if(value.name === '' || value.email === '' || value.message === '' || invalidText || invalidEmail){
            setIncompleteForm(true);
        } else {
            setIncompleteForm(false);

            try {
                const req = await sendEmail(value.name, value.email, value.message)

                if(req.status === 200) {
                    setSubmit({success:true, message:'Message envoyé, je vous réponds au plus vite !'});
                    // RESET FORM
                    setValue({
                        name: '',
                        email: '',
                        message: ''
                    });
                } else {
                    setSubmit({success:false, message:`Message non envoyé, vous pouvez me contacter à ${process.env.NEXT_PUBLIC_EMAIL}!`});
                }
            } catch (error) {
                console.error(error);
                setSubmit({success:false, message:`Message non envoyé, vous pouvez me contacter à ${process.env.NEXT_PUBLIC_EMAIL}!`});
            }
        }
    }

    // CHECK INPUT VALUE
    function handleChange(e) {
        const { name, value } = e.target;

        // CHECK NAME INPUT VALUE HAS ONLY LETTERS
        if(name === 'name') {
            if(/[^A-Za-zéêèÉÊÈ\s]/.test(value)){
                setInvalidText(true);
            } else {
                setInvalidText(false);
            }
        }
        // CHECK EMAIL INPUT VALUE IS VALID EMAIL
        if(name === 'email') {
            if(!emailRegex.test(value)){
                setInvalidEmail(true);
            } else {
                setInvalidEmail(false);
            }
        }

        // REPLACE THE STATE PREV VALUE
        setValue((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    return(
        <form className={styles.form} onSubmit={handleSubmit}>
            {incompleteForm ? 
                <p className={`${styles.error} ${styles.general}`}
                    role='alert' aria-live='assertive'
                >
                    Merci de remplir tous les champs
                </p>
            : ''}

            {/* SUCCESS OR ERROR MESSAGE */}
            {submit.success ?
                <p className={`${styles.success} ${styles.general}`} 
                    role='alert' aria-live='assertive'>
                    {submit.message}
                </p>
            : <p className={`${styles.error} ${styles.general}`}
                role='alert' aria-live='assertive'
            >
                {submit.message}
            </p>}

            <div className={styles.flex_container}>
                <div className={styles.inputContainer}>
                    <label htmlFor='name' className={styles.label}>Votre nom *</label>
                    <input type='text' name='name' id='name' 
                        className={styles.input} value={value.name} 
                        onChange={handleChange} 
                        autoComplete='name' required autoFocus
                    />
                    {invalidText ? 
                        <p className={styles.error} role='alert' aria-live='assertive'>
                            Ce champ ne doit contenir que des lettres
                        </p>
                    : ''
                    }
                </div>

                <div className={styles.inputContainer}>
                    <label htmlFor='email' className={styles.label}>Votre email *</label>
                    <input type='email' name='email' id='email' 
                        className={styles.input} value={value.email} 
                        onChange={handleChange} 
                        autoComplete='email' required
                    />
                    {invalidEmail ? 
                        <p className={styles.error} role='alert' aria-live='assertive'>
                            Cet email est invalide
                        </p>
                    : ''
                    }
                </div>
            </div>

            <label htmlFor='message' className={styles.label}>Votre message *</label>
            <textarea name="message" id='message' placeholder="Je cherche justement une développeuse motivée !" className={styles.textarea} value={value.message} onChange={handleChange} required/>

            <Button text={'Envoyer'} onClick={handleSubmit} page={'contact'}/>
        </form>
    )
}