'use client';
import styles from '../styles.module.css'

export default function Success() {
    return (
        <>
            <p className={styles.successText}>Vielen Dank für Ihre Anmeldung. Wir werden uns in Kürze bei Ihnen melden.</p>
            <button className={styles.submit} onClick={() => window.location.href = '/'}>Weitere Anmeldung</button>
        </>
    )
}