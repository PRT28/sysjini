"use client"

import { useState } from 'react';

import styles from './Header.module.css';
import Image from "next/image";
import SideSheet from './SideSheet';
import { IoMdMenu } from "react-icons/io";
import Popup from '../Popup/Popup';

export default function Header() {

  const [open, setOpen] = useState(false);
  const [popup, setPopup] = useState(false);
    
    return (
        <div className={styles.navbar}>
          <SideSheet open={open} setOpen={setOpen} />
          <div style={{display: 'flex', alignItems: 'center'}}>
            <div className='desktop'><Image src="/syslogo.svg" alt="" width={100} height={100} /></div>
            <div className={styles.title}>Sysjini</div>
          </div>

        <div className='desktop' style={{display: 'flex', alignItems: 'center'}}>
          <a className={styles.navitems} href="/">Home</a>
          <a className={styles.navitems} href="/about">About Us</a>
          <a className={styles.navitems} href="/contact">Contact Us</a>
        </div>

        <div className='mobile' onClick={() => setOpen(true)}>
          <IoMdMenu size={32} color="#FFF" />
        </div>
        
      </div>
    );
};
