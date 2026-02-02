"use client";
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Rocket, ExternalLink } from 'lucide-react';
import styles from './TechFounder.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function TechFounder() {
    const sectionRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
        gsap.fromTo(contentRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            }
        );
    }, []);

    return (
        <section ref={sectionRef} className={styles.section}>
            <div ref={contentRef} className={styles.container}>
                <div className={styles.badge}>
                    <Rocket size={18} />
                    <span className="font-heading">TECH FOUNDER</span>
                </div>

                <h2 className={`${styles.heading} font-heading`}>
                    MARSEL TECH LABS
                </h2>

                <p className={`${styles.text} font-body`}>
                    Beyond client work, I build my own products. From <strong>Kuruier</strong> –
                    a peer-to-peer logistics platform with 12K+ users – to AI automation tools
                    and SaaS experiments. Always shipping, always learning.
                </p>

                <div className={styles.links}>
                    <a
                        href="https://kuruier.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.link}
                    >
                        <span className="font-heading">KURUIER</span>
                        <ExternalLink size={14} />
                    </a>
                </div>
            </div>
        </section>
    );
}
