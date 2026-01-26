"use client";
import styles from './TechStack.module.css';
import { useRef } from 'react';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SKILL_GALAXY = [
    { category: "Languages", skills: ["HTML5", "CSS3", "JavaScript", "jQuery"] },
    { category: "Frameworks", skills: ["React", "Ember.js", "Next.js"] },
    { category: "Mobile", skills: ["React Native", "Flutter"] },
    { category: "Styling", skills: ["SASS/SCSS", "LESS", "Tailwind CSS", "SVG Animation"] },
    { category: "Design", skills: ["Figma", "Photoshop", "UI/UX"] },
    { category: "Tools", skills: ["Git", "Visual Studio", "Medusa.js"] },
    { category: "Platforms", skills: ["WordPress", "Shopify", "Zoho Creator"] },
    { category: "Core", skills: ["SEO Strategy", "Web Performance", "API Integration", "Cross-Browser"] }
];

export default function TechStack() {
    const sectionRef = useRef<HTMLElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    useGSAP(() => {
        // Target the WRAPPER for position animations
        const wrappers = gsap.utils.toArray<HTMLElement>(`.${styles.skillWrapper}`);

        // Initial state
        gsap.set(wrappers, { opacity: 0, scale: 0, y: 50 });

        // Master Timeline
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: sectionRef.current,
                start: "top 80%",
            }
        });

        // 1. Entrance Animation
        tl.to(wrappers, {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.05,
            ease: "back.out(1.2)"
        })
            // 2. Start Floating
            .add(() => {
                wrappers.forEach((wrapper) => {
                    gsap.to(wrapper, {
                        y: "random(-10, 10)",
                        x: "random(-5, 5)",
                        rotation: "random(-3, 3)",
                        duration: "random(2, 4)",
                        repeat: -1,
                        yoyo: true,
                        ease: "sine.inOut",
                        delay: "random(0, 2)"
                    });
                });
            });

    }, { scope: sectionRef });

    return (
        <section id="skills" ref={sectionRef} className={styles.section}>
            <div className={styles.container} ref={containerRef}>
                <h2 className={`${styles.heading} font-heading`}>THE SKILL GALAXY</h2>
                <p className={`${styles.subheading} font-body`}>
                    A vast universe of tools and technologies I've mastered over a decade.
                </p>

                <div className={styles.galaxyWrapper}>
                    {SKILL_GALAXY.map((group, i) => (
                        <div key={i} className={styles.orbitGroup}>
                            {/* Optional: Add a subtle orbit line or label if needed, keeping it clean for now */}
                            {group.skills.map((skill, j) => (
                                <div key={j} className={styles.skillWrapper}>
                                    <span className={`${styles.skillTag} ${styles[group.category.toLowerCase()] || ''}`}>
                                        {skill}
                                    </span>
                                </div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
