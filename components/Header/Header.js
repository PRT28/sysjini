import styles from './Header.module.css';
import Image from "next/image";

export default function Header() {

    
    return (
        <div className={styles.navbar}>
          <div style={{display: 'flex', alignItems: 'center'}}>
            <div className='desktop'><Image src="/syslogo.svg" alt="" width={100} height={100} /></div>
            <div className={styles.title}>Sysjini</div>
          </div>
      </div>
    );
};
