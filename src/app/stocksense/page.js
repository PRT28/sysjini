import Image from "next/image";
import styles from "./page.module.css";
import ContactForm from "../../../components/ContactForm/ContactForm";

export default function about () {
    return (
        <div className={styles.stocksense}>
            <div className={styles.sectiontitle}>StockSense</div>
            <div className={styles.section}>
                <div className={styles.aboutwrapper}>
                    <div className={styles.sectionbody}>StockSense represents the pinnacle of inventory management systems, designed with meticulous attention to detail to revolutionize how businesses handle their stock. Its advanced features are tailored to optimize stock levels, ensuring that businesses always have the right amount of inventory on hand without overstocking or running out. By streamlining operations, StockSense enhances efficiency across the board, from procurement through to distribution.</div>
                    <div className={styles.sectionbody}>At the heart of StockSense lies its powerful analytics capabilities, providing businesses with deep insights into their inventory status in real-time. This real-time visibility enables proactive decision-making, allowing businesses to respond swiftly to changes in demand or supply. With intuitive controls, StockSense empowers users to make informed decisions effortlessly, leveraging data-driven strategies to maximize profitability and operational effectiveness. Whether tracking stock levels, managing orders, or forecasting future needs, StockSense is the indispensable tool that drives smarter, more efficient stock management strategies.</div>
                </div>
                <Image src="/stocksense.svg" alt="" width={500} height={500} />
            </div>
            <ContactForm showImage={false} fullSize selected="StockSense" />
        </div>
    );
}