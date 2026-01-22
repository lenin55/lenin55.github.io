"use client";
import styles from './Services.module.css';
import { Settings, Bot, Gauge } from 'lucide-react';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
    const sectionRef = useRef(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        gsap.fromTo(cardsRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.8,
                stagger: 0.2,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 75%",
                }
            }
        );
    }, []);

    const addToRefs = (el: HTMLDivElement | null) => {
        if (el && !cardsRef.current.includes(el)) {
            cardsRef.current.push(el);
        }
    };

    return (
        <section id="services" ref={sectionRef} className={styles.section}>
            <div className={styles.container}>
                <h2 className={`${styles.heading} font-heading`}>WHAT I OFFER</h2>

                <div className={styles.grid}>
                    {/* Service 1 */}
                    <div ref={addToRefs} className={styles.card}>
                        <div className={styles.iconWrapper}>
                            <Settings size={32} />
                        </div>
                        <h3 className={`${styles.cardTitle} font-heading`}>SAAS ENGINEERING</h3>
                        <p className={`${styles.cardText} font-body`}>
                            Full-cycle development of scalable web applications using MERN stack & Next.js.
                        </p>
                    </div>

                    {/* Service 2 */}
                    <div ref={addToRefs} className={styles.card}>
                        <div className={styles.iconWrapper}>
                            <Bot size={32} />
                        </div>
                        <h3 className={`${styles.cardTitle} font-heading`}>AI & AUTOMATION</h3>
                        <p className={`${styles.cardText} font-body`}>
                            Building custom AI agents, RAG pipelines, and n8n workflows for business ops.
                        </p>
                    </div>

                    {/* Service 3 */}
                    <div ref={addToRefs} className={styles.card}>
                        <div className={styles.iconWrapper}>
                            <Gauge size={32} />
                        </div>
                        <h3 className={`${styles.cardTitle} font-heading`}>PERFORMANCE OPTIMIZATION</h3>
                        <p className={`${styles.cardText} font-body`}>
                            Auditing and refactoring legacy React codebases for speed, SEO, and scale.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
