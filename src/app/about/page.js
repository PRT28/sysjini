import Image from "next/image";
import styles from "./page.module.css";

export default function about () {
    return (
        <div className={styles.about}>
            <div className={styles.section}>
                <div className={styles.aboutwrapper}>
                    <div className={styles.sectiontitle}>Who are we?</div>
                    <div className={styles.sectionbody}>Sysjini is a SaaS-based technology company committed to delivering innovative and efficient business solutions. Our diverse range of services, including inventory management and Custom Tailored Solutions (CTS), are designed to streamline operations, enhance productivity, and drive growth for businesses of all sizes. By leveraging cutting-edge technology and a customer-centric approach, we provide our clients with the tools and support they need to succeed in a competitive marketplace.</div>
                    <div className={styles.sectionbody}>At Sysjini, we believe in the power of technology to transform businesses. Our team of experienced professionals works tirelessly to develop and implement solutions that meet the unique needs of each client. With a focus on continuous improvement and a dedication to excellence, Sysjini is your trusted partner in achieving operational efficiency and business success. Join us and experience the difference that our comprehensive solutions can make for your organization.</div>
                </div>
                <Image className={styles.aboutgero} src="/hand.svg" alt="" width={500} height={500} />
            </div>
            <Image src="/banner.png" alt="" className="desktop" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto', marginTop: '20px', borderRadius: '12px',marginBottom: '20px' }} />
        </div>
    );
}