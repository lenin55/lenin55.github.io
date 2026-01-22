"use client";
import styles from './FeaturedProjects.module.css';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function FeaturedProjects() {
    const sectionRef = useRef(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        gsap.fromTo(cardsRef.current,
            { y: 100, opacity: 0, rotateX: -10 },
            {
                y: 0,
                opacity: 1,
                rotateX: 0,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
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
        <section id="projects" ref={sectionRef} className={styles.section}>
            <div className={styles.container}>
                <h2 className={`${styles.heading} font-heading`}>SELECTED WORK</h2>

                <div className={styles.grid}>
                    {/* Project 1 */}
                    <div ref={addToRefs} className={styles.card}>
                        <div className={styles.imageContainer}>
                            {/* Placeholder for Image */}
                            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center text-white/20 font-heading text-2xl">
                                KURUIER PREVIEW
                            </div>
                        </div>
                        <div className={styles.content}>
                            <h3 className={`${styles.title} font-heading`}>KURUIER</h3>
                            <p className={`${styles.subtext} font-body`}>Peer-to-Peer Logistics Platform.</p>
                            <div className={styles.tags}>
                                <span className={styles.tag}>React Native</span>
                                <span className={styles.tag}>Node.js</span>
                            </div>
                        </div>
                    </div>

                    {/* Project 2 */}
                    <div ref={addToRefs} className={styles.card}>
                        <div className={styles.imageContainer}>
                            {/* Placeholder for Image */}
                            <div className="w-full h-full bg-gradient-to-br from-blue-900 to-slate-900 flex items-center justify-center text-white/20 font-heading text-2xl">
                                ZOHO FLOW PREVIEW
                            </div>
                        </div>
                        <div className={styles.content}>
                            <h3 className={`${styles.title} font-heading`}>ZOHO FLOW</h3>
                            <p className={`${styles.subtext} font-body`}>No-code Integration SaaS.</p>
                            <div className={styles.tags}>
                                <span className={styles.tag}>Core Front-End</span>
                                <span className={styles.tag}>SaaS</span>
                            </div>
                        </div>
                    </div>

                    {/* Project 3 */}
                    <div ref={addToRefs} className={styles.card}>
                        <div className={styles.imageContainer}>
                            {/* Placeholder for Image */}
                            <div className="w-full h-full bg-gradient-to-br from-purple-900 to-indigo-900 flex items-center justify-center text-white/20 font-heading text-2xl">
                                COMMERCE PREVIEW
                            </div>
                        </div>
                        <div className={styles.content}>
                            <h3 className={`${styles.title} font-heading`}>MULTI-TENANT E-COMMERCE</h3>
                            <p className={`${styles.subtext} font-body`}>White-label SaaS Solution.</p>
                            <div className={styles.tags}>
                                <span className={styles.tag}>Medusa.js</span>
                                <span className={styles.tag}>Next.js</span>
                            </div>
                        </div>
                    </div>
                </div>

                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className={`${styles.link} font-body`}>
                    See more on GitHub <ArrowUpRight size={14} className="inline mb-1" />
                </a>
            </div>
        </section>
    );
}
