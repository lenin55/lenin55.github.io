"use client";
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import styles from './About.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
    const sectionRef = useRef(null);
    const textRef = useRef(null);

    useEffect(() => {
        const el = sectionRef.current;

        gsap.fromTo(textRef.current,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: el,
                    start: "top 80%",
                }
            }
        );
    }, []);

    return (
        <section id="about" ref={sectionRef} className={styles.section}>
            <div className={styles.container}>
                <h2 className={`${styles.heading} font-heading`}>BEHIND THE CODE</h2>

                <div ref={textRef} className={`${styles.content} font-body`}>
                    <p>
                        I’m a <span className={styles.highlight}>Senior Web Developer and Tech Founder based in Dubai</span>.
                        For over a decade, I’ve been obsessed with building digital products that work as beautifully as they look.
                        From engineering complex front-end architectures at <span className={styles.highlight}>Zoho</span> to founding
                        Marsel Tech Labs and building the <span className={styles.highlight}>Kuruier</span> logistics platform,
                        I bridge the gap between complex design and scalable engineering.
                    </p>
                    <p>
                        Lately, I’ve pivoted deep into <span className={styles.highlight}>AI Agents and Workflow Automation</span>.
                        Whether it’s pixel-perfect UI or a complex RAG pipeline, I bring a 'Founder Mindset' to every commit.
                    </p>
                </div>
            </div>
        </section>
    );
}
