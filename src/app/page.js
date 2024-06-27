import Image from "next/image";
import styles from "./page.module.css";
export default function Home() {
  return (
    <div>
      <div className={styles.navbar}>
        <div style={{display: 'flex', alignItems: 'center'}}>
          <Image src="/syslogo.svg" alt="" width={100} height={100} />
          <div className={styles.title}>Sysjini</div>
        </div>

        <div style={{display: 'flex', alignItems: 'center'}}>
          <div className={styles.navitems}>Home</div>
          <div className={styles.navitems}>Solutions</div>
          <div className={styles.navitems}>About Us</div>
          <div className={styles.navitems}>Contact Us</div>
        </div>
        
      </div>
      <div className={styles.herosection}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around'}}>
            <div className={styles.titledesc}>
              Streamline Your Business Operations with us
            </div>
            <div className={styles.desc}>Sysjini is a SaaS-based technology company offering a diverse range of business solutions, including inventory management, project management, and CRM services.</div>
          </div>
      </div>
      <div className={styles.main}>

          <div className={styles.section}>
                <div style={{marginTop: '10%'}}>
                  <div className={styles.sectiontitle}>About us</div>
                  <div className={styles.sectionbody}>Sysjini is a SaaS-based technology company offering solutions in inventory management, project management, and CRM services. We focus on enhancing productivity and driving growth for businesses through innovative and efficient tools. Our customer-centric approach and experienced team ensure tailored solutions for each client. Partner with Sysjini for operational efficiency and business success.</div>
                  <button type="button" className={styles.button}>Read More</button>
                </div>
                <Image style={{borderRadius: '12px'}} src="/hero.png" alt="" width={450} height={450} />
          </div>
            <div className={styles.sectionhead}>Our Services</div>
            <div className={styles.sectionwrapper}>
              <div className={styles.card}>
                <div>
                  <Image style={{borderRadius: '12px'}} src="/crm.webp" alt="" width={250} height={250} />
                  <div className={styles.cardTitle}>CustomerLink</div>
                  <hr />
                  <div className={styles.cardBody}>CustomerLink is a robust CRM system meticulously crafted to streamline interactions, enhance customer relationships, and optimize business processes. With its intuitive tools and comprehensive analytics, it empowers organizations to make informed decisions and achieve sustainable growth by leveraging actionable insights and efficient management capabilities.</div>
                </div>
                <button className={styles.button}>Read More</button>
              </div>
              <div className={styles.card}>
                <div>
                  <Image style={{borderRadius: '12px'}} src="/inventormanage.webp" alt="" width={250} height={250} />
                  <div className={styles.cardTitle}>StockSense</div>
                  <hr />
                  <div className={styles.cardBody}>StockSense is a sophisticated inventory management system meticulously crafted to optimize stock levels, streamline operations, and enhance decision-making processes. It empowers businesses with insightful analytics and intuitive controls that provide real-time visibility into inventory status, ensuring efficient stock management from procurement to distribution.</div>
                </div>
                <button className={styles.button}>Read More</button>
              </div>
            </div>
          <div className={styles.sectionhead}>Get in touch</div>
          <div className={styles.section}>
            <div style={{width: '50%'}}>
              <div style={{marginBottom: '18px'}}>
                <label className={styles.label}>Name</label>
                <input className={styles.input} type="text" />
              </div>

              <div style={{marginBottom: '18px'}}>
                <label className={styles.label}>Phone</label>
                <input className={styles.input} type="text" />
              </div>

              <div style={{marginBottom: '18px'}}>
                <label className={styles.label}>Email</label>
                <input className={styles.input} type="email" />
              </div>

              <div style={{marginBottom: '18px'}}>
                <label className={styles.label}>Services</label>
                <select className={styles.input}>
                  <option>Customer Link</option>
                  <option>Stock Sense</option>
                </select>
              </div>

              <div style={{marginBottom: '18px'}}>
                <label className={styles.label}>Message</label>
                <input className={styles.input} type="text" style={{height: '150px'}} />
              </div>

              <button className={styles.button}>Read More</button>
              
            </div>
            <div class='planet-container'>
                <div class='night'></div>
                <div class='day'></div>
                <div class='clouds'></div>
                <div class='inner-shadow'></div>
            </div>
          </div>
      </div>
      <div className={styles.navbar} style={{paddingTop: '2.5%', paddingBottom: '2.5%', alignItems: 'flex-start'}}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <Image src="/syslogo.svg" alt="" width={100} height={100} />
          <div className={styles.title}>Sysjini</div>
        </div>

        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
          <div className={styles.footerhead}>Services</div>
          <div className={styles.footeritemlink}>CustomerLink</div>
          <div className={styles.footeritemlink}>StockSense</div>
        </div>

        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
          <div className={styles.footerhead}>Contact Us</div>
          <div className={styles.footeritem}>Phone: (+91) 7017197678</div>
          <div className={styles.footeritem}>Email: prithvirajtiwari28@gmail.com</div>
        </div>
        
      </div>
      <div style={{width: '100vw', padding: '6px', background: '#d64646', color: '#FFF', paddingLeft: '10%', paddingRight: '10%'}}>
        © 2023 Sysjini. All rights reserved.
      </div>
    </div>
  );
}
