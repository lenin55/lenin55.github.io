"use client";
import styles from './Footer.module.css';

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
                <a href="mailto:leninmariajoseph@gmail.com" className={`${styles.email} font-heading`}>
                    leninmariajoseph@gmail.com
                </a>
                <p className={`${styles.location} font-body`}>
                    Dubai, United Arab Emirates
                </p>
            </div>

            <div className={styles.socials}>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className={`${styles.socialLink} font-heading`}>LINKEDIN</a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={`${styles.socialLink} font-heading`}>GITHUB</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className={`${styles.socialLink} font-heading`}>X (TWITTER)</a>
            </div>

            <p className={`${styles.copyright} font-body`}>
                © 2026 Lenin Mariya Joseph. Built with Next.js & Orange Energy.
            </p>
        </footer>
    );
}
