"use client"

import {useState} from 'react';
import styles from './ContactForm.module.css';
import axios from 'axios';
import { useToast } from '@chakra-ui/react'
import Image from 'next/image';

export default function ContactForm({fullSize=false}) {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const toast = useToast();

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
        <div className={styles.section}>
          <div className={styles.cflogoWrapper}>
            <Image src="/cf2.svg" alt="" height={100} width={100} className={styles.img2} />
            <Image src="/cf1.svg" alt="" height={150} width={150} className={styles.img1} />
          </div>
          <div>
            <div className={styles.cftitle}>Still have questions?</div>
            <div className={styles.cfdesc}>Book a call with our team to learn how Sysjini<br />can help you change the way you manage your e-<br />commerce business—forever.</div>
          </div>
            
            <div className={styles.formContainer}>
                <input className={styles.input} type="text" placeholder='Name' value={name} onChange={e => setName(e.target.value)} />
                <input className={styles.input} type="text" placeholder='Phone Number' value={phone} onChange={e => setPhone(e.target.value)} />
                <input className={styles.input} type="email" placeholder='Email' value={email} onChange={e => setEmail(e.target.value)} />
                <input className={styles.input} type="text" placeholder='Tell us more about your requirement' value={message} onChange={e => setMessage(e.target.value)} />
                <button className={styles.button} onClick={() => handleSubmit()}>Submit</button>
            </div>
        </div>
    );
}