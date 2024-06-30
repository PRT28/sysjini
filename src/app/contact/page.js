import ContactForm from "../../../components/ContactForm/ContactForm";
import styles from './page.module.css';

export default function Contact() {
    return (
        <div className={styles.contact}>
            <div className={styles.details}>
                <div className={styles.sectiontitle}>Get in touch</div>
                <div style={{fontSize: '18px', marginBottom: '18px'}}>Phone: (+91) 7017197678</div>
                <div style={{fontSize: '18px', marginBottom: '18px'}}>Email: prithvirajtiwari28@gmail.com</div>
            </div>
            <div className={styles.form}>
                <ContactForm fullSize showImage={false} label="Send us a message" />
            </div>
        </div>
    );
}