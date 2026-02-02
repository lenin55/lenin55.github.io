"use client";
import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import styles from './Navbar.module.css';
import ContactModal from './ContactModal';

export default function Navbar() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
            <nav className={styles.navbar}>
                <div className={`${styles.logo} font-heading`}>
                    LMJ
                </div>

                <div className={styles.navLinks}>
                    <Link href="#work" className={styles.link}>WORK</Link>
                    <Link href="#about" className={styles.link}>ABOUT</Link>
                    <Link href="#services" className={styles.link}>SERVICES</Link>
                    <Link href="#contact" className={styles.link}>CONTACT</Link>

                    <button
                        onClick={() => setIsModalOpen(true)}
                        className={styles.hireButton}
                    >
                        HIRE ME <ArrowRight size={16} />
                    </button>
                </div>
            </nav>

            <ContactModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
            />
        </>
    );
}
