"use client";
import styles from './TechStack.module.css';
import { Smartphone, Server, Bot, CircleCheck, Code2, Database, BrainCircuit } from 'lucide-react';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function TechStack() {
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
        <section id="arsenal" ref={sectionRef} className={styles.section}>
            <div className={styles.container}>
                <h2 className={`${styles.heading} font-heading`}>THE ARSENAL</h2>

                <div className={styles.grid}>
                    {/* Frontend & Mobile */}
                    <div ref={addToRefs} className={styles.category}>
                        <h3 className={`${styles.categoryTitle} font-heading`}>
                            <Smartphone className={styles.icon} /> FRONTEND & MOBILE
                        </h3>
                        <ul className={`${styles.list} font-body`}>
                            <li className={styles.listItem}><Code2 size={16} /> React.js</li>
                            <li className={styles.listItem}><Code2 size={16} /> Next.js</li>
                            <li className={styles.listItem}><Code2 size={16} /> TypeScript</li>
                            <li className={styles.listItem}><Code2 size={16} /> React Native</li>
                            <li className={styles.listItem}><Code2 size={16} /> Tailwind CSS</li>
                        </ul>
                    </div>

                    {/* Backend & Architecture */}
                    <div ref={addToRefs} className={styles.category}>
                        <h3 className={`${styles.categoryTitle} font-heading`}>
                            <Server className={styles.icon} /> BACKEND & ARCHITECTURE
                        </h3>
                        <ul className={`${styles.list} font-body`}>
                            <li className={styles.listItem}><Database size={16} /> Node.js</li>
                            <li className={styles.listItem}><Database size={16} /> Medusa.js</li>
                            <li className={styles.listItem}><Database size={16} /> GraphQL</li>
                            <li className={styles.listItem}><Database size={16} /> AWS (Serverless)</li>
                            <li className={styles.listItem}><Database size={16} /> PostgreSQL / Mongo</li>
                        </ul>
                    </div>

                    {/* AI & Automation */}
                    <div ref={addToRefs} className={styles.category}>
                        <h3 className={`${styles.categoryTitle} font-heading`}>
                            <Bot className={styles.icon} /> AI & AUTOMATION
                        </h3>
                        <ul className={`${styles.list} font-body`}>
                            <li className={styles.listItem}><BrainCircuit size={16} /> LLM Integration</li>
                            <li className={styles.listItem}><BrainCircuit size={16} /> AI Agents</li>
                            <li className={styles.listItem}><BrainCircuit size={16} /> n8n Workflows</li>
                            <li className={styles.listItem}><BrainCircuit size={16} /> RAG Pipelines</li>
                            <li className={styles.listItem}><BrainCircuit size={16} /> Vision Models</li>
                        </ul>
                    </div>

                </div>
            </div>
        </section>
    );
}
