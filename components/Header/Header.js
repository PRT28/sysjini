"use client"

import { useState } from 'react';

import styles from './Header.module.css';
import Image from "next/image";
import SideSheet from './SideSheet';
import { IoMdMenu } from "react-icons/io";

export default function Header() {

  const [open, setOpen] = useState(false);
    
    return (
        <div className={styles.navbar}>
          <SideSheet open={open} setOpen={setOpen} />
          <div style={{display: 'flex', alignItems: 'center'}}>
            <div className='desktop'><Image src="/syslogo.svg" alt="" width={100} height={100} /></div>
            <div className={styles.title}>Sysjini</div>
          </div>

        <div className='desktop' style={{display: 'flex', alignItems: 'center'}}>
          <div className={styles.navitems}>Home</div>
          <div className={styles.navitems}>Solutions</div>
          <div className={styles.navitems}>About Us</div>
          <div className={styles.navitems}>Contact Us</div>
        </div>

        <div className='mobile' onClick={() => setOpen(true)}>
          <IoMdMenu size={32} color="#FFF" />
        </div>
        
      </div>
    );
};
