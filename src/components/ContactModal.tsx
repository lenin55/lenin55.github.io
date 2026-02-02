"use client";
import { useState, useEffect } from 'react';
import { X, Send, User, Mail, MessageSquare, Loader2 } from 'lucide-react';
import { gsap } from 'gsap';
import styles from './ContactModal.module.css';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function ContactModal({ isOpen, onClose }: ContactModalProps) {
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

    useEffect(() => {
        if (isOpen) {
            // Animation for modal entrance
            gsap.fromTo(`.${styles.overlay}`,
                { opacity: 0 },
                { opacity: 1, duration: 0.3 }
            );
            gsap.fromTo(`.${styles.modal}`,
                { y: 50, opacity: 0, scale: 0.95 },
                { y: 0, opacity: 1, scale: 1, duration: 0.5, ease: "back.out(1.7)" }
            );
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isOpen]);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setStatus('submitting');

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        // Using Web3Forms (Simple, zero-config for static sites)
        // Note: User will need to get an Access Key from web3forms.com
        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: "3ab8c2e8-96b7-4e54-a3bf-c3b25d412ed9", // Live key provided by user
                    ...data,
                    from_name: "Portfolio Inquiry"
                })
            });

            if (response.ok) {
                setStatus('success');
                setTimeout(() => {
                    onClose();
                    setStatus('idle');
                }, 2500);
            } else {
                setStatus('error');
            }
        } catch (err) {
            setStatus('error');
        }
    };

    return (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>
                <button className={styles.closeButton} onClick={onClose}>
                    <X size={24} />
                </button>

                {status === 'success' ? (
                    <div className={styles.successState}>
                        <div className={styles.successIcon}>✓</div>
                        <h2 className="font-heading">MESSAGE SENT!</h2>
                        <p className="font-body">I'll get back to you shortly.</p>
                    </div>
                ) : (
                    <>
                        <div className={styles.header}>
                            <h2 className={`${styles.title} font-heading`}>LET'S BUILD SOMETHING</h2>
                            <p className={`${styles.subtitle} font-body`}>Drop me a message and I'll get back to you within 24 hours.</p>
                        </div>

                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.inputGroup}>
                                <label className="font-heading"><User size={14} /> NAME</label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Your Name"
                                    required
                                    className="font-body"
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label className="font-heading"><Mail size={14} /> EMAIL</label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="your@email.com"
                                    required
                                    className="font-body"
                                />
                            </div>

                            <div className={styles.inputGroup}>
                                <label className="font-heading"><MessageSquare size={14} /> MESSAGE</label>
                                <textarea
                                    name="message"
                                    placeholder="What's on your mind?"
                                    required
                                    rows={4}
                                    className="font-body"
                                />
                            </div>

                            <button
                                type="submit"
                                className={`${styles.submitButton} font-heading`}
                                disabled={status === 'submitting'}
                            >
                                {status === 'submitting' ? (
                                    <>SENDING <Loader2 className={styles.spinner} size={18} /></>
                                ) : (
                                    <>SEND MESSAGE <Send size={18} /></>
                                )}
                            </button>

                            {status === 'error' && (
                                <p className={styles.errorText}>
                                    Something went wrong. Please try again or <a href="mailto:leninmariajoseph@gmail.com" className={styles.emailLink}>email me directly</a>.
                                </p>
                            )}
                        </form>
                    </>
                )}
            </div>
        </div>
    );
}
