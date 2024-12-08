import styles from './Footer.module.css';
import Image from "next/image";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <img src="/screwfooter.svg" alt="" style={{position: 'absolute', left: 0, bottom: 0}} />
            <div className={styles.footercontainer} style={{paddingTop: '2.5%', paddingBottom: '2.5%', alignItems: 'flex-start'}}>
                <div className={styles.footerlogo}>
                    <Image src="/syslogo.svg" alt="" width={100} height={100} />
                    <div className={styles.title}>Sysjini</div>
                </div>

                <div className={styles.footerwrapper}>
                    <div className={styles.footerhead}>Services</div>
                    <div className={styles.footeritem}>Web Development</div>
                    <div className={styles.footeritem}>Mobile App</div>
                    <div className={styles.footeritem}>SEO</div>
                    <div className={styles.footeritem}>Web Pentesting</div>
                    <div className={styles.footeritem}>Digital Marketing</div>
                    <div className={styles.footeritem}>Designing</div>
                </div>

                <div className={styles.footerwrapper}>
                    <div className={styles.footerhead}>Contact Us</div>
                    <div className={styles.footeritem}>Phone: (+91) 7017197678</div>
                    <div className={styles.footeritem}>Email: prithvirajtiwari28@gmail.com</div>
                </div>
                
            </div>
        </div>
    )
}