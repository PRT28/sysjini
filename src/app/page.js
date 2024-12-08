
import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";
import TypeWriter from "../../components/TypeWrtier/TypeWriter";

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
            <div className={styles.desc}>We have 459 rooms spread throuout Indonesia with room standards equivalent to 5 star hotels.</div>
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
            <div className={styles.smText}>Sysjini is a dynamic service provider offering customized solutions in web and app development, SEO, digital marketing, web pentesting, and designing to elevate your business in the digital landscape</div>
            <div className={styles.flexwrap}>
              <div className={styles.card}>
                <div className={styles.cardlogo}>
                  <Image src="/services/web.svg" width={50} height={50} />
                </div>
                <div className={styles.cardtitle}>Mobile Development</div>
                <div className={styles.carddesc}>Crafting responsive, user-friendly websites that captivate and convert.</div>
              </div>
              <div className={styles.card}>
                <div className={styles.cardlogo}>
                  <Image src="/services/mobile.svg" width={50} height={50} />
                </div>
                <div className={styles.cardtitle}>Web Development</div>
                <div className={styles.carddesc}>Building seamless, high-performance mobile applications that keep you connected with your audience.</div>
              </div>
              <div className={styles.card}>
                <div className={styles.cardlogo}>
                  <Image src="/services/seo.svg" width={50} height={50} />
                </div>
                <div className={styles.cardtitle}>SEO</div>
                <div className={styles.carddesc}>Boosting your online presence with strategies that drive traffic and enhance visibility.</div>
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
                <div className={styles.carddesc}>Creating visually stunning and impactful designs that resonate with your brand identity.</div>
              </div>
            </div>
          </div>

          <div className={styles.section}>
            <div className={styles.sectionbgtitle}>Get started in 4 simple steps</div>
            <img src="/timeline.svg" alt="" />
          </div>


          <div className={styles.sectionbg} style={{position: 'relative', overflow: 'hidden'}}>
              <div className={styles.sectionbgtitle} style={{zIndex: 100}}>Our Technology Stack</div>
              <div className={styles.smText} style={{zIndex: 100}}>Our software engineers are among the world's best specialists in their fields. Your app will benefit from<br />unmatched development expertise from a team familiar with the latest approaches and technologies.</div>
              <div style={{zIndex: 100}}>
                <img src="/stack.svg" alt="" />
              </div>
              <div className={styles.screw}>
                <img src="/screw.svg" alt="" />
              </div>
          </div>

      </div>
      
    </div>
    </>
  );
}
