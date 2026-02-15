"use client";
import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code2, Building2, Users, Calendar, Terminal, Zap } from 'lucide-react';
import styles from './About.module.css';

gsap.registerPlugin(ScrollTrigger);

const STATS = [
    { icon: Calendar, value: 10, suffix: '+', label: 'Years' },
    { icon: Building2, value: 5, suffix: '', label: 'At Zoho' },
    { icon: Code2, value: 50, suffix: '+', label: 'Projects' },
    { icon: Users, value: 100, suffix: 'M+', label: 'Users' },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLSpanElement>(null);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        const trigger = ScrollTrigger.create({
            trigger: el,
            start: "top 85%",
            onEnter: () => {
                gsap.to({ val: 0 }, {
                    val: value,
                    duration: 2,
                    ease: "power2.out",
                    onUpdate: function () {
                        setCount(Math.floor(this.targets()[0].val));
                    }
                });
            },
            once: true
        });

        return () => trigger.kill();
    }, [value]);

    return <span ref={ref}>{count}{suffix}</span>;
}

export default function About() {
    const sectionRef = useRef<HTMLElement>(null);
    const leftRef = useRef<HTMLDivElement>(null);
    const rightRef = useRef<HTMLDivElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);
    const linesRef = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Left side - terminal animation
            gsap.fromTo(leftRef.current,
                { opacity: 0, x: -50 },
                {
                    opacity: 1, x: 0,
                    duration: 1,
                    ease: "power3.out",
                    scrollTrigger: { trigger: sectionRef.current, start: "top 75%" }
                }
            );

            // Right side - content animation
            gsap.fromTo(rightRef.current,
                { opacity: 0, x: 50 },
                {
                    opacity: 1, x: 0,
                    duration: 1,
                    delay: 0.2,
                    ease: "power3.out",
                    scrollTrigger: { trigger: sectionRef.current, start: "top 75%" }
                }
            );

            // Code lines stagger
            gsap.fromTo(linesRef.current,
                { opacity: 0, x: -20 },
                {
                    opacity: 1, x: 0,
                    duration: 0.4,
                    stagger: 0.08,
                    ease: "power2.out",
                    scrollTrigger: { trigger: leftRef.current, start: "top 70%" }
                }
            );

            // Stats animation
            gsap.fromTo(statsRef.current?.children || [],
                { opacity: 0, y: 30, scale: 0.9 },
                {
                    opacity: 1, y: 0, scale: 1,
                    duration: 0.5,
                    stagger: 0.1,
                    ease: "back.out(1.7)",
                    scrollTrigger: { trigger: statsRef.current, start: "top 85%" }
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const addToLinesRef = (el: HTMLDivElement | null, index: number) => {
        if (el) linesRef.current[index] = el;
    };

    return (
        <section id="about" ref={sectionRef} className={styles.section}>
            <div className={styles.container}>
                {/* Section Header */}
                <div className={styles.sectionHeader}>
                    <Terminal className={styles.headerIcon} size={20} />
                    <span className={styles.headerTag}>ABOUT</span>
                </div>
                <h2 className={`${styles.heading} font-heading`}>BEHIND THE CODE</h2>

                {/* Split Layout */}
                <div className={styles.splitLayout}>
                    {/* Left - Code Terminal (70%) */}
                    <div ref={leftRef} className={styles.leftColumn}>
                        <div className={styles.terminal}>
                            <div className={styles.terminalHeader}>
                                <div className={styles.terminalDots}>
                                    <span className={styles.dot} />
                                    <span className={styles.dot} />
                                    <span className={styles.dot} />
                                </div>
                                <span className={styles.terminalTitle}>developer.config.ts</span>
                            </div>
                            <div className={styles.terminalBody}>
                                <div ref={(el) => addToLinesRef(el, 0)} className={styles.codeLine}>
                                    <span className={styles.lineNum}>1</span>
                                    <span className={styles.keyword}>export const</span>
                                    <span className={styles.variable}> developer</span> = {`{`}
                                </div>
                                <div ref={(el) => addToLinesRef(el, 1)} className={`${styles.codeLine} ${styles.indent}`}>
                                    <span className={styles.lineNum}>2</span>
                                    <span className={styles.prop}>name</span>:
                                    <span className={styles.string}> &quot;Lenin Mariya Joseph&quot;</span>,
                                </div>
                                <div ref={(el) => addToLinesRef(el, 2)} className={`${styles.codeLine} ${styles.indent}`}>
                                    <span className={styles.lineNum}>3</span>
                                    <span className={styles.prop}>role</span>:
                                    <span className={styles.string}> &quot;Senior Web Developer&quot;</span>,
                                </div>
                                <div ref={(el) => addToLinesRef(el, 3)} className={`${styles.codeLine} ${styles.indent}`}>
                                    <span className={styles.lineNum}>4</span>
                                    <span className={styles.prop}>location</span>:
                                    <span className={styles.string}> &quot;Dubai, UAE&quot;</span>,
                                </div>
                                <div ref={(el) => addToLinesRef(el, 4)} className={`${styles.codeLine} ${styles.indent}`}>
                                    <span className={styles.lineNum}>5</span>
                                    <span className={styles.prop}>experience</span>:
                                    <span className={styles.number}> 10</span>,
                                    <span className={styles.comment}> {/* // years */}</span>
                                </div>
                                <div ref={(el) => addToLinesRef(el, 5)} className={`${styles.codeLine} ${styles.indent}`}>
                                    <span className={styles.lineNum}>6</span>
                                    <span className={styles.prop}>company</span>:
                                    <span className={styles.highlight}> &quot;Zoho Corp&quot;</span>,
                                    <span className={styles.comment}> {/* // 100M+ users */}</span>
                                </div>
                                <div ref={(el) => addToLinesRef(el, 6)} className={`${styles.codeLine} ${styles.indent}`}>
                                    <span className={styles.lineNum}>7</span>
                                    <span className={styles.prop}>stack</span>: [
                                    <span className={styles.string}>&quot;React&quot;</span>,
                                    <span className={styles.string}>&quot;Next.js&quot;</span>,
                                    <span className={styles.string}>&quot;TS&quot;</span>],
                                </div>
                                <div ref={(el) => addToLinesRef(el, 7)} className={`${styles.codeLine} ${styles.indent}`}>
                                    <span className={styles.lineNum}>8</span>
                                    <span className={styles.prop}>superpower</span>:
                                    <span className={styles.string}> &quot;Vanilla JS from scratch&quot;</span>
                                </div>
                                <div ref={(el) => addToLinesRef(el, 8)} className={styles.codeLine}>
                                    <span className={styles.lineNum}>9</span>
                                    {`}`};
                                </div>
                            </div>
                        </div>

                        {/* Stats Row */}
                        <div ref={statsRef} className={styles.statsRow}>
                            {STATS.map((stat, i) => {
                                const IconComponent = stat.icon;
                                return (
                                    <div key={i} className={styles.statItem}>
                                        <IconComponent className={styles.statIcon} size={18} />
                                        <span className={styles.statValue}>
                                            <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                                        </span>
                                        <span className={styles.statLabel}>{stat.label}</span>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right - Text Content (30%) */}
                    <div ref={rightRef} className={styles.rightColumn}>
                        <div className={styles.textContent}>
                            <div className={styles.badge}>
                                <Zap size={14} />
                                <span>EX-ZOHO</span>
                            </div>

                            <h3 className={`${styles.subHeading} font-heading`}>
                                Building the web<br />since 2015
                            </h3>

                            <p className={`${styles.paragraph} font-body`}>
                                I&apos;m a <strong>Senior Web Developer</strong> with over a decade
                                of experience crafting digital products that are as beautiful as they are functional.
                            </p>

                            <p className={`${styles.paragraph} font-body`}>
                                For <strong>5 years at Zoho Corp</strong>, one of the world&apos;s largest
                                SaaS companies, I led the frontend development of <strong>Zoho Flow</strong> –
                                building the entire UI from scratch with pure vanilla JavaScript.
                            </p>

                            <p className={`${styles.paragraph} font-body`}>
                                My specialty? <strong>No frameworks, just clean code.</strong> Whether it&apos;s
                                React, Next.js, or custom component systems – I bring enterprise-grade
                                thinking to every project.
                            </p>

                            <div className={styles.skillTags}>
                                <span className={styles.skillTag}>React</span>
                                <span className={styles.skillTag}>Next.js</span>
                                <span className={styles.skillTag}>TypeScript</span>
                                <span className={styles.skillTag}>Node.js</span>
                                <span className={styles.skillTag}>React Native</span>
                                <span className={styles.skillTag}>GSAP</span>
                                <span className={styles.skillTag}>Tailwind</span>
                                <span className={styles.skillTag}>Git</span>
                                <span className={styles.skillTag}>CSS/SCSS</span>
                                <span className={styles.skillTag}>Vue.js</span>
                                <span className={styles.skillTag}>Flutter</span>
                                <span className={styles.skillTag}>Figma</span>
                                <span className={styles.skillTag}>WordPress</span>
                                <span className={styles.skillTag}>MongoDB</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
