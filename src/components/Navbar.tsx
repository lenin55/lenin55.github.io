"use client";
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <nav className={styles.navbar}>
            <div className={`${styles.logo} font-heading`}>
                LMJ
            </div>

            <div className={styles.navLinks}>
                <Link href="#work" className={styles.link}>WORK</Link>
                <Link href="#about" className={styles.link}>ABOUT</Link>
                <Link href="#services" className={styles.link}>SERVICES</Link>
                <Link href="#contact" className={styles.link}>CONTACT</Link>

                <Link
                    href="#contact"
                    className={styles.hireButton}
                >
                    HIRE ME <ArrowRight size={16} />
                </Link>
            </div>
        </nav>
    );
}
