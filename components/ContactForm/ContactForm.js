"use client"

import styles from './ContactForm.module.css';

export default function ContactForm({showImage, fullSize=false, label="Get in touch", selected=""}) {
    return (
        <>
            <div className={styles.sectionhead}>{label}</div>
          <div className={styles.section}>
            <div style={{width: fullSize ? '100%' : ''}} className={styles.contactform}>
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
                <select disabled={selected !== ''} className={styles.input} value={selected}>
                  {/* <option>Customer Link</option> */}
                  <option>StockSense</option>
                  <option>CTS</option>
                </select>
              </div>

              <div style={{marginBottom: '18px'}}>
                <label className={styles.label}>Message</label>
                <input className={styles.input} type="text" style={{height: '150px'}} />
              </div>

              <button className={styles.button} onClick={() => console.log('abccc')}>Read More</button>
              
            </div>
           {showImage && <div className='planet-container'>
                <div className='night'></div>
                <div className='day'></div>
                <div className='clouds'></div>
                <div className='inner-shadow'></div>
            </div>}
          </div>
        </>
    );
}