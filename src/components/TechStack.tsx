"use client";
import styles from './TechStack.module.css';
import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
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

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Floating animation for all tags with random delays
            const tags = gsap.utils.toArray<HTMLElement>(`.${styles.skillTag}`);
            tags.forEach((tag) => {
                gsap.to(tag, {
                    y: "random(-20, 20)",
                    x: "random(-10, 10)",
                    rotation: "random(-5, 5)",
                    duration: "random(2, 4)",
                    repeat: -1,
                    yoyo: true,
                    ease: "sine.inOut",
                    delay: "random(0, 4)"
                });
            });

            // Entrance animation
            gsap.from(tags, {
                opacity: 0,
                scale: 0,
                y: 100,
                duration: 1,
                stagger: 0.05,
                ease: "back.out(1.7)",
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top 80%",
                }
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

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
                                <span key={j} className={`${styles.skillTag} ${styles[group.category.toLowerCase()] || ''}`}>
                                    {skill}
                                </span>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
