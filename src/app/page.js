
import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";
import TypeWriter from "../../components/TypeWrtier/TypeWriter";
import ContactForm from "../../components/ContactForm/ContactForm";

export default function Home() {

  return (
    <>
    <Head>
      <link rel="canonical" href="https://sysjini.in" />
    </Head>
    <div className={styles.master}>
      <div className={styles.herosection}>
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'space-around', gap: '36px'}}>
            <div className={styles.titledesc}> One stop solution for <br /> <TypeWriter /></div>
            <div className={styles.desc}>At Sysjini, we’re not just a tech company—we’re your growth partners. We provide cutting-edge solutions tailored to help businesses thrive in the digital era. Whether you're a startup, an established enterprise, or an individual with a big idea, we’ve got you covered.</div>
          </div>
      </div>
      <div className={styles.main}>

          <div className={styles.sectionbg}>
              <div className={styles.sectionbgtitle}>Esteemed global <span style={{color: '#8154FF'}}>corporations</span></div>
              <div className={styles.flexwrap}>
                <div className={styles.compcard}>
                    <Image src="https://www.eazotel.com/static/media/EAZOTEL.e61658f63d96bbf572b862ff6f851084.svg" width={200} height={200} />
                </div>
              </div>
          </div>

          <div className={styles.section}>
            <div className={styles.sectiontitle}>Our Services</div>
            <div className={styles.smText}>Sysjini is a dynamic service provider offering customized solutions in web and app development, SEO, digital marketing, and designing to elevate your business in the digital landscape</div>
            <div className={styles.flexwrap}>
              <div className={styles.card}>
                <div className={styles.cardlogo}>
                  <Image src="/services/web.svg" width={50} height={50} />
                </div>
                <div className={styles.cardtitle}>Mobile Development</div>
                <div className={styles.carddesc}>Building seamless, user-friendly mobile applications using Flutter and robust backend technologies like Node.js and Spring Boot.</div>
              </div>
              <div className={styles.card}>
                <div className={styles.cardlogo}>
                  <Image src="/services/mobile.svg" width={50} height={50} />
                </div>
                <div className={styles.cardtitle}>Web Development</div>
                <div className={styles.carddesc}>Crafting responsive, fast, and scalable websites with the latest technologies like React.js, Next.js, and more.</div>
              </div>
              <div className={styles.card}>
                <div className={styles.cardlogo}>
                  <Image src="/services/seo.svg" width={50} height={50} />
                </div>
                <div className={styles.cardtitle}>SEO</div>
                <div className={styles.carddesc}>Boost your online presence with result-driven SEO strategies and data-backed digital marketing campaigns.</div>
              </div>
              <div className={styles.card}>
                <div className={styles.cardlogo}>
                  <Image src="/services/marketing.svg" width={50} height={50} />
                </div>
                <div className={styles.cardtitle}>Digital Marketing</div>
                <div className={styles.carddesc}>Delivering targeted campaigns that engage and convert, ensuring your brand reaches its full potential.</div>
              </div>
              <div className={styles.card}>
                <div className={styles.cardlogo}>
                  <Image src="/services/design.svg" width={50} height={50} />
                </div>
                <div className={styles.cardtitle}>Designing</div>
                <div className={styles.carddesc}>From UI/UX design to brand identity, we create visuals that speak your brand’s language and resonate with your audience.</div>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.sectionbgtitle}>Get started in 4 simple steps</div>
            <img src="/timeline.svg" alt="" />
          </div>


          <div className={styles.sectionbg} style={{position: 'relative', overflow: 'hidden'}}>
              <div className={styles.sectionbgtitle} style={{zIndex: 100}}>Our Technology Stack</div>
              <div className={styles.smText} style={{zIndex: 100}}>Our software engineers are among the world&apos;s best specialists in their fields. Your app will benefit from<br />unmatched development expertise from a team familiar with the latest approaches and technologies.</div>
              <div style={{zIndex: 100}}>
                <img src="/stack.svg" alt="" />
              </div>
              <div className={styles.screw}>
                <img src="/screw.svg" alt="" />
              </div>
          </div>

          <div className={`${styles.section}, ${styles.flexRes}`} style={{justifyContent: 'space-between'}}>
            <div style={{textAlign: 'justify'}}>
              <div className={styles.sectionbgtitle} style={{marginBottom: '24px'}}>Why Choose us</div>
              <ul style={{gap: '10px', display: 'grid'}}>
                <li className={styles.smText}><b>Full-Stack Expertise:</b> From front-end to back-end, we handle it all.</li>
                <li className={styles.smText}><b>Tailored Solutions:</b> We don't believe in one-size-fits-all. Your business is unique, and so are our strategies.</li>
                <li className={styles.smText}><b>Cloud-Ready:</b> Deploying robust applications with AWS, Nginx, and advanced cloud services.</li>
                <li className={styles.smText}><b>End-to-End Support:</b> We're with you from ideation to launch—and beyond.</li>
              </ul>
            </div>
            <Image src="/chooseus.svg" width={250} height={400} />

          </div>

          <ContactForm />

      </div>
      
    </div>
    </>
  );
}
