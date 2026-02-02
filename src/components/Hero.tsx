"use client";
import { useRef, useLayoutEffect } from 'react';
import Image from 'next/image';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';
import styles from './Hero.module.css';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
    const containerRef = useRef<HTMLElement>(null);
    const titleBackRef = useRef<HTMLDivElement>(null);
    const titleFrontRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLDivElement>(null);
    const contentRef = useRef<HTMLDivElement>(null);

    // Store mouse offsets separately
    const mouseOffset = useRef({ titleX: 0, titleY: 0, imageX: 0, imageY: 0, imageRotate: 0 });

    useLayoutEffect(() => {
        const container = containerRef.current;
        const titles = [titleBackRef.current, titleFrontRef.current];
        const image = imageRef.current;
        const content = contentRef.current;

        if (!container || !image || !content) return;

        const ctx = gsap.context(() => {
            const tl = gsap.timeline();

            // Initial Animation
            tl.fromTo(titles,
                { y: 100, opacity: 0 },
                { y: 0, opacity: 1, duration: 1.5, ease: "power3.out" }
            )
                .fromTo(image,
                    { y: 200, opacity: 0, scale: 0.9 },
                    { y: 0, opacity: 1, scale: 1, duration: 1.5, ease: "power3.out" },
                    "-=1.2"
                )
                .fromTo(content,
                    { y: 50, opacity: 0 },
                    { y: 0, opacity: 1, duration: 1, ease: "power2.out" },
                    "-=0.8"
                );

            // Parallax Effect on Scroll - use yPercent to avoid conflicts
            ScrollTrigger.create({
                trigger: container,
                start: "top top",
                end: "bottom top",
                scrub: 0.5,
                onUpdate: (self) => {
                    const progress = self.progress;
                    const titleY = progress * -50;
                    const imageY = progress * 50;

                    // Apply scroll + mouse offsets together
                    gsap.set(titles, {
                        y: titleY + mouseOffset.current.titleY,
                        x: mouseOffset.current.titleX
                    });
                    gsap.set(image, {
                        y: imageY + mouseOffset.current.imageY,
                        x: mouseOffset.current.imageX,
                        rotateY: mouseOffset.current.imageRotate
                    });
                }
            });
        }, container);

        // Mouse move handler - updates offset values and applies them
        const handleMouseMove = (e: MouseEvent) => {
            const { clientX, clientY } = e;
            const xPos = (clientX / window.innerWidth - 0.5);
            const yPos = (clientY / window.innerHeight - 0.5);

            // Update mouse offset values
            mouseOffset.current.titleX = xPos * -20;
            mouseOffset.current.titleY = yPos * -15;
            mouseOffset.current.imageX = xPos * 10;
            mouseOffset.current.imageY = yPos * 5;
            mouseOffset.current.imageRotate = xPos * 2;

            // Smoothly animate to new positions
            gsap.to(titles, {
                x: mouseOffset.current.titleX,
                duration: 0.8,
                ease: "power2.out",
                overwrite: "auto"
            });

            gsap.to(image, {
                x: mouseOffset.current.imageX,
                rotateY: mouseOffset.current.imageRotate,
                duration: 0.8,
                ease: "power2.out",
                overwrite: "auto"
            });
        };

        // Reset mouse offset when leaving hero section
        const handleMouseLeave = () => {
            mouseOffset.current = { titleX: 0, titleY: 0, imageX: 0, imageY: 0, imageRotate: 0 };

            gsap.to(titles, {
                x: 0,
                duration: 0.5,
                ease: "power2.out"
            });

            gsap.to(image, {
                x: 0,
                rotateY: 0,
                duration: 0.5,
                ease: "power2.out"
            });
        };

        container.addEventListener('mousemove', handleMouseMove);
        container.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            container.removeEventListener('mousemove', handleMouseMove);
            container.removeEventListener('mouseleave', handleMouseLeave);
            ctx.revert();
        };
    }, []);

    const renderTitle = (text: string, lineIndex: number, layer: 'front' | 'back') => {
        return text.split('').map((char, index) => {
            let isFront = false;

            if (lineIndex === 0) {
                if (index === 2 || index === 4 || index === 6 || index === 7) isFront = true;
            } else {
                if (index === 0 || index === 5) isFront = true;
            }

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
                    // SENIOR FRONTEND ENGINEER<br />
                    REACT • NEXT.JS • REACT NATIVE • AI AUTOMATION
                </div>

                <a href="#projects" className={styles.ctaButton}>
                    VIEW WORK <ArrowRight size={20} />
                </a>

                <div className={`${styles.techBar} font-heading uppercase`}>
                    <span className={styles.techItem}>10+ Years</span>
                    <span className={styles.techItem}>50+ Projects</span>
                    <span className={styles.techItem}>Dubai, UAE</span>
                </div>
            </div>
        </section>
    );
}
