"use client";
import { useEffect, useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const containerRef = useRef(null);
    const titleBackRef = useRef(null);
    const titleFrontRef = useRef(null);
    const imageRef = useRef(null);
    const contentRef = useRef(null);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline();
            const titles = [titleBackRef.current, titleFrontRef.current];

            // Initial Animation
            tl.fromTo(titles,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" }
            )
                .fromTo(imageRef.current,
                    { y: 200, opacity: 0, scale: 0.9 }, // Reduced scale difference for smoother paint
                    {
                        y: 0,
                        opacity: 1,
                        scale: 1,
                        duration: 1.5, // Slightly faster/smoother
                        ease: "power3.out" // Smoother than elastic for heavy images
                    },
                    "-=1.2"
                )
                .fromTo(contentRef.current,
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
                    "-=0.8"
                );

            // Parallax Effect on Scroll
            gsap.to(titles, {
                y: -50,
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });

            gsap.to(imageRef.current, {
                y: 50, // Reduced travel distance
                ease: "none",
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: "top top",
                    end: "bottom top",
                    scrub: true
                }
            });
        }, containerRef); // Scope to container

        const handleMouseMove = (e: MouseEvent) => {
            if (!containerRef.current) return;
            const { clientX, clientY } = e;
            const xPos = (clientX / window.innerWidth - 0.5);
            const yPos = (clientY / window.innerHeight - 0.5);

            gsap.to([titleBackRef.current, titleFrontRef.current], {
                x: xPos * -20, // Reduced movement
                y: yPos * -15,
                duration: 1,
                ease: "power2.out"
            });

            gsap.to(imageRef.current, {
                x: xPos * 10,
                y: yPos * 5,
                rotateY: xPos * 2, // Reduced 3D rotation
                duration: 1,
                ease: "power2.out"
            });
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            ctx.revert(); // Cleanup GSAP
        };

    }, []);

    const renderTitle = (text: string, lineIndex: number, layer: 'front' | 'back') => {
        return text.split('').map((char, index) => {
            let isFront = false;

            if (lineIndex === 0) {
                // Mapping for "LENIN MARIYA"
                // LENIN -> N(2), N(4)
                // MARIYA -> M(6) SPLIT, A(7) FRONT
                if (index === 2 || index === 4 || index === 6 || index === 7) isFront = true;
            } else {
                // JOSEPH
                // J(0), H(5) -> Front
                if (index === 0 || index === 5) isFront = true;
            }

            // Logic:
            // If layer is 'front', we ONLY show 'isFront' chars. Others hidden.
            // If layer is 'back', we show ALL chars (isFront chars will be covered by front layer anyway).

            const isHidden = (layer === 'front' && !isFront);
            const isFrontChar = (layer === 'front' && isFront);
            const isHalfChar = (layer === 'front' && index === 6 && lineIndex === 0);
            const isSpace = char === ' ';

            return (
                <span
                    key={`${layer}-${lineIndex}-${index}`}
                    className={`${styles.char} 
                        ${isFrontChar ? styles.charFront : ''} 
                        ${isHidden ? styles.hiddenChar : ''} 
                        ${isHalfChar ? styles.halfClipRight : ''} 
                        ${isSpace ? styles.spaceChar : ''}
                        font-heading`}
                >
                    {char === ' ' ? '\u00A0' : char}
                </span>
            );
        });
    };

    return (
        <section ref={containerRef} className={styles.heroSection}>
            {/* Background Blobs */}
            <div className={`${styles.blob} ${styles.blob1}`} />
            <div className={`${styles.blob} ${styles.blob2}`} />
            <div className={`${styles.blob} ${styles.blob3}`} />

            {/* BACK LAYER */}
            <div ref={titleBackRef} className={`${styles.titleContainer} ${styles.titleBack}`}>
                <div className={styles.hugeTitleLine}>
                    {renderTitle("LENIN MARIYA", 0, 'back')}
                </div>
                <div className={styles.hugeTitleLine}>
                    {renderTitle("JOSEPH", 1, 'back')}
                </div>
            </div>

            <div className={styles.imageContainer}>
                <div ref={imageRef} className={styles.imageWrapper}>
                    <Image
                        src="/hero-person.png"
                        alt="Lenin Mariya Joseph"
                        fill
                        className={styles.heroImage}
                        priority
                    />
                </div>
            </div>

            {/* FRONT LAYER - Only renders "Front" chars */}
            <div ref={titleFrontRef} className={`${styles.titleContainer} ${styles.titleFront}`}>
                <div className={styles.hugeTitleLine}>
                    {renderTitle("LENIN MARIYA", 0, 'front')}
                </div>
                <div className={styles.hugeTitleLine}>
                    {renderTitle("JOSEPH", 1, 'front')}
                </div>
            </div>

            <div className={styles.smokeOverlay} />

            <div ref={contentRef} className={styles.contentOverlay}>
                <div className={`${styles.description} font-body`}>
                    // ARCHITECTING THE FUTURE OF WEB & AI<br />
                    BUILDING SCALABLE SAAS & AUTONOMOUS AI AGENTS
                </div>

                <a href="#work" className={styles.ctaButton}>
                    VIEW WORK <ArrowRight size={20} />
                </a>

                <div className={`${styles.techBar} font-heading uppercase`}>
                    <span className={styles.techItem}>React</span>
                    <span className={styles.techItem}>Next.js</span>
                    <span className={styles.techItem}>AI Agents</span>
                </div>
            </div>
        </section>
    );
}
