"use client"

import { useState } from 'react';

import styles from './Header.module.css';
import Image from "next/image";

export default function Header() {

  const [open, setOpen] = useState(false);
    
    return (
        <div className={`navbar ${open ? 'navopen' : ''}`}>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <div className='desktop'><Image src="/syslogo.svg" alt="" width={100} height={100} /></div>
            <div className={styles.title}>Sysjini</div>
          </div>

        {/* <div onClick={() => setOpen(!open)} style={{display: 'flex', flexDirection: 'column', gap: '10px'}}>
          <div className={styles.whiteline} />
          <div className={styles.whiteline} />
        </div> */}
        
      </div>
    );
};
