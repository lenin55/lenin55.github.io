"use client";
import styles from './Services.module.css';
import { Code2, Smartphone, Layers, Wrench, Bot, Palette } from 'lucide-react';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SERVICES = [
    {
        icon: Code2,
        title: "WEB DEVELOPMENT",
        description: "Custom websites & web apps from scratch. React, Next.js, Vue, or vanilla JS – pixel-perfect, responsive, blazing fast."
    },
    {
        icon: Smartphone,
        title: "MOBILE APPS",
        description: "Cross-platform mobile apps with React Native. iOS & Android from a single codebase with native performance."
    },
    {
        icon: Layers,
        title: "SAAS PRODUCTS",
        description: "End-to-end SaaS development from MVP to scale. Authentication, billing, dashboards – the full stack."
    },
    {
        icon: Wrench,
        title: "CUSTOM DEVELOPMENT",
        description: "Tailored solutions for unique business needs. WordPress, e-commerce, portals, internal tools."
    },
    {
        icon: Bot,
        title: "AI & LLM AUTOMATION",
        description: "AI agents, LLM integrations, RAG pipelines, n8n/Zapier workflows. Make your operations smarter."
    },
    {
        icon: Palette,
        title: "UI/UX DESIGN",
        description: "Modern interface design with Figma. Design systems, prototypes, and pixel-perfect developer handoff."
    }
];

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
                stagger: 0.15,
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
                    {SERVICES.map((service, index) => {
                        const IconComponent = service.icon;
                        return (
                            <div key={index} ref={addToRefs} className={styles.card}>
                                <div className={styles.iconWrapper}>
                                    <IconComponent size={32} />
                                </div>
                                <h3 className={`${styles.cardTitle} font-heading`}>{service.title}</h3>
                                <p className={`${styles.cardText} font-body`}>
                                    {service.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
