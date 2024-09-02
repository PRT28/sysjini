import Image from "next/image";
import styles from "./page.module.css";
import ContactForm from "../../components/ContactForm/ContactForm";
export default function Home() {
  return (
    <div className={styles.master}>
      <div className={styles.herosection}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around'}}>
            <div className={styles.titledesc}>
              Transforming Ideas into Impactful Digital Experiences, One Tailored Solution at a Time
            </div>
            <div style={{display: 'flex', alignItems: 'center', width: '100%'}}>
              <input className={styles.emailInput} type="text" placeholder="Enter email" />
              <button className={styles.emailBtn} type="button">Let's Connect</button>
            </div>
          </div>
      </div>
      <div className={styles.main}>

          <div className={styles.section}>
                <div style={{marginTop: '10%'}}>
                  <div className={styles.sectiontitle}>About us</div>
                  <div className={styles.sectionbody}>Sysjini is a dynamic service provider offering customized solutions in web and app development, SEO, digital marketing, web pentesting, and designing to elevate your business in the digital landscape.</div>
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
              <div className={styles.card} style={{background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://www.creative-tim.com/blog/content/images/size/w1140/2022/01/which-development-job-is-right-for-you.jpg)", backgroundPosition: 'center', backgroundSize: 'cover'}}>
                <div className={styles.cardTitle}>Web Development</div>
                <div className={styles.cardBody}>Crafting responsive, user-friendly websites that captivate and convert.</div>
              </div>
              <div className={styles.card} style={{background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://ezranking.s3.eu-west-2.amazonaws.com/blog/wp-content/uploads/2022/01/07063220/mobile-app-development-trends.png)", backgroundPosition: 'center', backgroundSize: 'cover'}}>
                <div className={styles.cardTitle}>Mobile App</div>
                <div className={styles.cardBody}>Building seamless, high-performance mobile applications that keep you connected with your audience.</div>
              </div>
              <div className={styles.card} style={{background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://www.cloudways.com/blog/wp-content/uploads/SEO-for-Startups.jpg)", backgroundPosition: 'center', backgroundSize: 'cover'}}>
                <div className={styles.cardTitle}>SEO</div>
                <div className={styles.cardBody}>Boosting your online presence with strategies that drive traffic and enhance visibility.</div>
              </div>
              <div className={styles.card} style={{background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://www.alpinesecurity.com/wp-content/uploads/2020/02/web+application+penetration+testing.jpg)", backgroundPosition: 'center', backgroundSize: 'cover'}}>
                <div className={styles.cardTitle}>Web Pentesting</div>
                <div className={styles.cardBody}>Securing your digital assets with rigorous testing to protect against vulnerabilities.</div>
              </div>
              <div className={styles.card} style={{background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://www.michaelpage.ae/sites/michaelpage.ae/files/styles/advice_node_desktop/public/legacy/7_digital_skills600x387.png.webp?itok=AJaywa6V", backgroundPosition: 'center', backgroundSize: 'cover'}}>
                <div className={styles.cardTitle}>Digital Marketing</div>
                <div className={styles.cardBody}>Delivering targeted campaigns that engage and convert, ensuring your brand reaches its full potential.</div>
              </div>
              <div className={styles.card} style={{background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://blogassets.leverageedu.com/blog/wp-content/uploads/2020/05/18175211/Designing-Courses.jpg)", backgroundPosition: 'center', backgroundSize: 'cover'}}>
                <div className={styles.cardTitle}>Designing</div>
                <div className={styles.cardBody}>Creating visually stunning and impactful designs that resonate with your brand identity.</div>
              </div>
              {/* <a href="/stocksense" className={styles.card}>
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
                  <div className={styles.cardBody}>Standing for custom-tailored solutions, crafting unique offerings aligned precisely with clients&apos; needs and specifications. Our approach ensures that every solution is designed to meet and exceed the specific requirements of each individual customer.</div>
                </div>
                <button className={styles.button}>Read More</button>
              </a> */}
            </div>
            <ContactForm showImage />
      </div>
      
    </div>
  );
}
