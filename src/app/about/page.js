import Image from "next/image";
import styles from "./page.module.css";

export default function about () {
    return (
        <div className={styles.about}>
            <div className={styles.section}>
                <div className={styles.aboutwrapper}>
                    <div className={styles.sectiontitle}>Who are we?</div>
                    <div className={styles.sectionbody}>Welcome to Sysjini, your trusted partner in the digital world. We are a dynamic service provider company, dedicated to empowering businesses through a comprehensive suite of solutions that cater to all your digital needs.</div>
                    <div className={styles.sectionbody}>Our team of experts is dedicated to providing customized solutions tailored to your unique requirements. Whether you're a startup looking to establish your online presence or an established business aiming to expand your digital footprint, Sysjini is here to support your journey.</div>
                    <div className={styles.sectionbody}>We believe in innovation, quality, and client satisfaction, striving to deliver results that not only meet but exceed expectations. Let's collaborate and take your business to new heights in the digital landscape.</div>
                </div>
                <Image className={styles.aboutgero} src="/hand.svg" alt="" width={500} height={500} />
            </div>
            <Image src="/banner.png" alt="" className="desktop" width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto', marginTop: '20px', borderRadius: '12px',marginBottom: '20px' }} />
        </div>
    );
}