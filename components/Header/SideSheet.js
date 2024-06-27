

import styles from './Header.module.css';
import Image from "next/image";
import { MdClose } from "react-icons/md";

export default function SideSheet({open, setOpen}) {

    

    return (
        <div className={`sidesheet ${open ? '' : 'close'}`}>
            <div className={styles.navbar}>
                <div style={{display: 'flex', alignItems: 'center'}}>
                    <Image src="/syslogo.svg" alt="" width={50} height={50} />
                    <div className={styles.title} style={{fontSize: '24px', letterSpacing: '1.5px'}}>Sysjini</div>
                </div>

                <div onClick={() => setOpen(false)}><MdClose color='#FFF' size={32} /></div>
            </div>

        <div>
            <div className={styles.navitems}>Home</div>
            <div className={styles.navitems}>Solutions</div>
            <div className={styles.navitems}>About Us</div>
            <div className={styles.navitems}>Contact Us</div>
        </div>

        </div>
    );
}