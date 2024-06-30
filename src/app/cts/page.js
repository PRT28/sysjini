import Image from "next/image";
import styles from "./page.module.css";
import ContactForm from "../../../components/ContactForm/ContactForm";

export default function about () {
    return (
        <div className={styles.cts}>
            <div className={styles.sectiontitle}>CTS (Custom Tailored Solution)</div>
            <div className={styles.section}>
                <div className={styles.aboutwrapper}>
                    <div className={styles.sectionbody}>At Sysjini, we specialize in creating Custom Tailored Solutions (CTS) according to our clients' specific requirements. Our customer-centric approach and experienced team ensure that each solution is uniquely designed to address the distinct challenges and goals of your business. By leveraging cutting-edge technology, we develop and implement strategies that enhance productivity, streamline operations, and drive growth.</div>
                    <div className={styles.sectionbody}>We utilize a modern tech stack, including MongoDB, React, Next.js, Node.js, Spring, SQL, and Flutter, to deliver innovative and efficient tools. This allows us to provide robust, scalable, and high-performance solutions that meet the dynamic needs of today's businesses.</div>
                    <div className={styles.sectionbody}>Through close collaboration with our clients, we provide innovative and efficient tools that support operational efficiency and business success. Partner with Sysjini to experience the transformative power of bespoke solutions tailored to meet your unique needs.</div>
                </div>
                <Image src="/cts.svg" alt="" width={400} height={500} />
            </div>
            <ContactForm showImage={false} fullSize selected="CTS" />
        </div>
    );
}