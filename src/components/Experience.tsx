"use client";
import styles from './Experience.module.css';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
    const itemsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        itemsRef.current.forEach((el, index) => {
            gsap.fromTo(el,
                { x: -50, opacity: 0 },
                {
                    x: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: el,
                        start: "top 85%",
                    }
                }
            );
        });
    }, []);

    const addToRefs = (el: HTMLDivElement | null) => {
        if (el && !itemsRef.current.includes(el)) {
            itemsRef.current.push(el);
        }
    };

    return (
        <section id="experience" className={styles.section}>
            <div className={styles.container}>
                <h2 className={`${styles.heading} font-heading`}>THE JOURNEY</h2>

                <div className={styles.timeline}>
                    {/* Item 1 */}
                    <div ref={addToRefs} className={styles.timelineItem}>
                        <div className={styles.node}></div>
                        <div className={`${styles.period} font-heading`}>2024 – PRESENT</div>
                        <h3 className={`${styles.role} font-heading`}>SENIOR WEB DEVELOPER & AI ARCHITECT</h3>
                        <p className={`${styles.description} font-body`}>
                            Dubai, UAE. Specializing in AI-driven web apps, high-frequency trading agents, and n8n workflow automation.
                        </p>
                    </div>

                    {/* Item 2 */}
                    <div ref={addToRefs} className={styles.timelineItem}>
                        <div className={styles.node}></div>
                        <div className={`${styles.period} font-heading`}>FOUNDER & LEAD DEVELOPER</div>
                        <h3 className={`${styles.role} font-heading`}>MARSEL TECH LABS</h3>
                        <p className={`${styles.description} font-body`}>
                            Chennai. Built and launched Kuruier, a peer-to-peer courier mobile app ecosystem.
                        </p>
                    </div>

                    {/* Item 3 */}
                    <div ref={addToRefs} className={styles.timelineItem}>
                        <div className={styles.node}></div>
                        <div className={`${styles.period} font-heading`}>SENIOR WEB DEVELOPER</div>
                        <h3 className={`${styles.role} font-heading`}>ZOHO CORPORATION</h3>
                        <p className={`${styles.description} font-body`}>
                            Core developer for Zoho Flow. Mastered scalable, multi-tenant systems.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
