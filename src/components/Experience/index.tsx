'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EXPERIENCE_DATA } from '@/data/experience';
import styles from './styles.module.css';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
    const sectionRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Only apply horizontal scroll on Desktop
        const mm = gsap.matchMedia();

        mm.add("(min-width: 769px)", () => {
            const section = sectionRef.current;
            const container = containerRef.current;

            if (section && container) {
                // Calculate total width to scroll
                const totalWidth = container.scrollWidth;
                const viewportWidth = window.innerWidth;

                // Pin the section and move content left
                gsap.to(container, {
                    x: () => -(totalWidth - viewportWidth + 100), // +100 for some padding
                    ease: "none",
                    scrollTrigger: {
                        trigger: section,
                        start: "top top",
                        end: () => `+=${totalWidth}`, // Scroll amount matches width
                        pin: true,
                        scrub: 1,
                        anticipatePin: 1,
                        invalidateOnRefresh: true,
                    }
                });
            }
        });

    }, { scope: sectionRef });

    return (
        <section className={styles.experienceSection} ref={sectionRef} id="experience">
            <div className={styles.intro}>
                <h2 className={`${styles.title} font-heading`}>THE<br />JOURNEY</h2>
                <p className={`${styles.subtitle} font-body`}>
                    A decade of crafting digital experiences, from Chennai to Dubai.
                </p>
            </div>

            <div className={styles.horizontalContainer} ref={containerRef}>
                {/* Visual Connector Line */}
                <div className={styles.connectorLine} />
                {EXPERIENCE_DATA.map((item, index) => (
                    <div key={item.id} className={styles.cardContainer}>


                        <div className={styles.card}>
                            <div>
                                <span className={styles.yearTag}>{item.period}</span>
                                <h3 className={styles.role}>{item.role}</h3>
                                <div className={styles.company}>{item.company}</div>
                                <span className={styles.location}>{item.location}</span>
                            </div>

                            <ul className={styles.descList}>
                                {item.description.map((desc, i) => (
                                    <li key={i}>{desc}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
