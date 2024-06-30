import styles from './Popup.module.css';

export default function Popup({children, onBackdropClick, width}) {
    return (
        <>
            <div className={styles.backdrop} onClick={onBackdropClick} />
            <div style={{width: width ? `${width}px` : ''}} className={styles.popup}>
                {children}
            </div>
        </>
        
    )
}