"use client";
import styles from './FeaturedProjects.module.css';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowUpRight, ExternalLink } from 'lucide-react';
import Image from 'next/image';
import { PROJECTS_DATA } from '@/data/projects';

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
                stagger: 0.15,
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
                    {PROJECTS_DATA.map((project) => (
                        <div key={project.id} ref={addToRefs} className={styles.card}>
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.cardLink}
                            >
                                <div className={styles.imageContainer}>
                                    <Image
                                        src={project.image}
                                        alt={project.title}
                                        fill
                                        className={styles.image}
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                    <div className={styles.imageOverlay}>
                                        <ExternalLink size={32} />
                                        <span>View Project</span>
                                    </div>
                                </div>
                                <div className={styles.content}>
                                    <h3 className={`${styles.title} font-heading`}>
                                        {project.title}
                                        <ArrowUpRight size={18} className={styles.arrow} />
                                    </h3>
                                    <p className={`${styles.subtext} font-body`}>{project.description}</p>
                                    <div className={styles.tags}>
                                        {project.tags.map((tag, i) => (
                                            <span key={i} className={styles.tag}>{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </a>
                        </div>
                    ))}
                </div>

                <a
                    href="https://github.com/lenin55"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${styles.link} font-body`}
                >
                    See more on GitHub <ArrowUpRight size={14} className="inline mb-1" />
                </a>
            </div>
        </section>
    );
}
