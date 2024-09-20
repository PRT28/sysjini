"use client"

import {useState} from 'react';
import styles from './ContactForm.module.css';
import axios from 'axios';

export default function ContactForm({showImage, fullSize=false, label="Get in touch", selected=""}) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async () => {
      await axios.post('/api/email', {
        name,
        email,
        message,
        phone
      });
        setName('');
        setPhone('');
        setEmail('');
        setMessage('');
        toast({
          title: 'Request Raised',
          description: "Our representative will reach you shortly",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
    }
    
    return (
        <>
            <div className={styles.sectionhead}>{label}</div>
          <div className={styles.section}>
            <div style={{width: fullSize ? '100%' : ''}} className={styles.contactform}>
              <div style={{marginBottom: '18px'}}>
                <label className={styles.label}>Name</label>
                <input className={styles.input} type="text" value={name} onChange={e => setName(e.target.value)} />
              </div>

              <div style={{marginBottom: '18px'}}>
                <label className={styles.label}>Phone</label>
                <input className={styles.input} type="text" value={phone} onChange={e => setPhone(e.target.value)} />
              </div>

              <div style={{marginBottom: '18px'}}>
                <label className={styles.label}>Email</label>
                <input className={styles.input} type="email" value={email} onChange={e => setEmail(e.target.value)} />
              </div>

              <div style={{marginBottom: '18px'}}>
                <label className={styles.label}>Message</label>
                <textarea className={styles.input} type="text" cols={15} rows={5} style={{height: '150px', resize: 'none'}} value={message} onChange={e => setMessage(e.target.value)} />
              </div>

              <button className={styles.button} onClick={() => handleSubmit()}>Submit</button>
              
            </div>
           {showImage && <div className='planet-container'>
                <div className='night'></div>
                <div className='day'></div>
                <div className='clouds'></div>
                <div className='inner-shadow'></div>
            </div>}
          </div>
        </>
    );
}