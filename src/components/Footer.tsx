"use client";
import styles from './Footer.module.css';
import { Github, Linkedin, Codepen } from 'lucide-react';

export default function Footer() {
    return (
        <footer id="contact" className={styles.footer}>
            <h2 className={`${styles.heading} font-heading`}>
                READY TO BUILD SOMETHING EXTRAORDINARY?
            </h2>

            <p className={`${styles.subtext} font-body`}>
                Currently accepting contracts for Senior Frontend roles and AI Architecture projects.
            </p>

            <div className={styles.contactInfo}>
                <div className={styles.phones}>
                    <p className={`${styles.phone} font-heading`}>+971 54385 7364 (UAE)</p>
                    <p className={`${styles.phone} font-heading`}>+91 94 9806 9804 (IND)</p>
                </div>
                <a href="mailto:leninmariajoseph@gmail.com" className={`${styles.email} font-heading`}>
                    leninmariajoseph@gmail.com
                </a>
                <p className={`${styles.location} font-body`}>
                    Silicon Oasis, Dubai, UAE
                </p>
            </div>

            <div className={styles.socials}>
                <a
                    href="https://github.com/lenin55"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label="GitHub"
                >
                    <Github size={24} />
                    <span className="font-heading">GITHUB</span>
                </a>
                <a
                    href="https://www.linkedin.com/in/leninjos/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label="LinkedIn"
                >
                    <Linkedin size={24} />
                    <span className="font-heading">LINKEDIN</span>
                </a>
                <a
                    href="https://codepen.io/lenin5"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                    aria-label="CodePen"
                >
                    <Codepen size={24} />
                    <span className="font-heading">CODEPEN</span>
                </a>
            </div>

            <p className={`${styles.copyright} font-body`}>
                © 2026 Lenin Mariya Joseph. Built with Next.js & Orange Energy.
            </p>
        </footer>
    );
}
