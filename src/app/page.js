import Image from "next/image";
import styles from "./page.module.css";
import ContactForm from "../../components/ContactForm/ContactForm";
export default function Home() {
  return (
    <div>
      <div className={styles.herosection}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around'}}>
            <div className={styles.titledesc}>
              Streamline Your Business Operations with us
            </div>
            <div className={styles.desc}>Sysjini is a SaaS-based technology company offering a diverse range of business solutions, including Inventory management and Custom solution services.</div>
          </div>
      </div>
      <div className={styles.main}>

          <div className={styles.section}>
                <div style={{marginTop: '10%'}}>
                  <div className={styles.sectiontitle}>About us</div>
                  <div className={styles.sectionbody}>Sysjini is a SaaS-based technology company offering solutions in inventory management (StockSense), and Custom Tailored Solutions (CTS). We focus on enhancing productivity and driving growth for businesses through innovative and efficient tools. Our customer-centric approach and experienced team ensure tailored solutions for each client. Partner with Sysjini for operational efficiency and business success.</div>
                  <a href="/about" className={styles.button}>Read More</a>
                </div>
                <Image style={{borderRadius: '12px'}} src="/hero.png" alt="" width={450} height={450} />
          </div>
            <div className={styles.sectionhead}>What we offer</div>
            <div className={styles.sectionwrapper}>
              {/* <a href="/customerlink" className={styles.card}>
                <div>
                  <Image style={{borderRadius: '12px'}} src="/projectmanage.webp" alt="" width={250} height={250} />
                  <div className={styles.cardTitle}>CustomerLink</div>
                  <hr />
                  <div className={styles.cardBody}>CustomerLink is a robust CRM system meticulously crafted to streamline interactions, enhance customer relationships, and optimize business processes. With its intuitive tools and comprehensive analytics, it empowers organizations to make informed decisions and achieve sustainable growth by leveraging actionable insights and efficient management capabilities.</div>
                </div>
                <button className={styles.button}>Read More</button>
              </a> */}
              <a href="/stocksense" className={styles.card}>
                <div>
                  <Image style={{borderRadius: '12px'}} src="/inventormanage.webp" alt="" width={250} height={250} />
                  <div className={styles.cardTitle}>StockSense</div>
                  <hr />
                  <div className={styles.cardBody}>StockSense is a sophisticated inventory management system meticulously crafted to optimize stock levels, streamline operations, and enhance decision-making processes. It empowers businesses with insightful analytics and intuitive controls that provide real-time visibility into inventory status, ensuring efficient stock management from procurement to distribution.</div>
                </div>
                <button className={styles.button}>Read More</button>
              </a>
              <a href="/cts" className={styles.card}>
                <div>
                  <Image style={{borderRadius: '12px'}} src="/crm.webp" alt="" width={250} height={250} />
                  <div className={styles.cardTitle}>CTS</div>
                  <hr />
                  <div className={styles.cardBody}>Standing for custom-tailored solutions, crafting unique offerings aligned precisely with clients' needs and specifications. Our approach ensures that every solution is designed to meet and exceed the specific requirements of each individual customer.</div>
                </div>
                <button className={styles.button}>Read More</button>
              </a>
            </div>
            <ContactForm showImage />
      </div>
      
    </div>
  );
}
