import styles from './Footer.module.css';
import Image from "next/image";

export default function Footer() {
    return (
        <>
            <div className={styles.footer} style={{paddingTop: '2.5%', paddingBottom: '2.5%', alignItems: 'flex-start'}}>
                <div className={styles.footerlogo}>
                    <Image src="/syslogo.svg" alt="" width={100} height={100} />
                    <div className={styles.title}>Sysjini</div>
                </div>

                <div className={styles.footerwrapper}>
                    <div className={styles.footerhead}>Services</div>
                    <a href="/customerlink" className={styles.footeritemlink}>CustomerLink</a>
                    <a href="/stocksense" className={styles.footeritemlink}>StockSense</a>
                    <a href="/cts" className={styles.footeritemlink}>CTS</a>
                </div>

                <div className={styles.footerwrapper}>
                    <div className={styles.footerhead}>Contact Us</div>
                    <div className={styles.footeritem}>Phone: (+91) 7017197678</div>
                    <div className={styles.footeritem}>Email: prithvirajtiwari28@gmail.com</div>
                </div>
                
            </div>
            <div style={{width: '100vw', padding: '6px', background: '#d64646', color: '#FFF', paddingLeft: '10%', paddingRight: '10%'}}>
                © {new Date().getFullYear()} Sysjini. All rights reserved.
            </div>
        </>
    )
}