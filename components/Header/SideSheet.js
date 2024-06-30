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
            <a className={styles.navitems} href="/">Home</a>
            <div className={styles.navitems} onClick={() => setPopup(!popup)}>Solutions</div>
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
                <a className={styles.navsubitems} href="/stocksense">• StockSense</a>
                <a className={styles.navsubitems} href="/cts">• CTS</a>
            </div>
            <a className={styles.navitems} href="/about">About Us</a>
            <a className={styles.navitems} href="/contact">Contact Us</a>
        </div>

        </div>
    );
}