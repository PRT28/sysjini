
import { useState } from 'react';
import styles from './Header.module.css';
import Image from "next/image";
import { MdClose } from "react-icons/md";

export default function SideSheet({open, setOpen}) {

    const [popup, setPopup] = useState(false);

    return (
        <div className={`sidesheet ${open ? '' : 'close'}`}>
            <div className={styles.navbar}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <Image src="/syslogo.svg" alt="" width={50} height={50} />
                    <div className={styles.title} style={{fontSize: '24px', letterSpacing: '1.5px'}}>Sysjini</div>
                </div>

                <div onClick={() => setOpen(false)}><MdClose color='#FFF' size={32} /></div>
            </div>

        <div style={{display: 'flex', flexDirection: 'column'}}>
            <a style={{color: window.location.pathname === '/' ? '#d64646' : ''}} className={styles.navitems} href="/">Home</a>
            <div className={styles.navitems} style={{color:(window.location.pathname === '/stocksense' || window.location.pathname === '/cts') ? '#d64646' : ''}} onClick={() => setPopup(!popup)}>Solutions</div>
            <div style={{ 
                marginTop: popup ? '10px' : '',
                marginBottom:  popup ? '10px' : '', 
                marginLeft: '60px', 
                display: 'flex', 
                flexDirection: 'column', 
                height: popup ? '50px' : '0px',
                justifyContent: 'space-between',
                transition: 'all 0.25s ease-in-out',
                overflow: 'hidden'
            }}>
                <a style={{color: window.location.pathname === '/stocksense' ? '#d64646' : ''}} className={styles.navsubitems} href="/stocksense">• StockSense</a>
                <a style={{color: window.location.pathname === '/cts' ? '#d64646' : ''}} className={styles.navsubitems} href="/cts">• CTS</a>
            </div>
            <a style={{color: window.location.pathname === '/about' ? '#d64646' : ''}} className={styles.navitems} href="/about">About Us</a>
            <a style={{color: window.location.pathname === '/contact' ? '#d64646' : ''}} className={styles.navitems} href="/contact">Contact Us</a>
        </div>

        </div>
    );
}