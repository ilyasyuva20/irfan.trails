import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container responsive-grid" style={{ gridTemplateColumns: '1fr 1fr', alignItems: 'center' }}>
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', marginBottom: '1.5rem', color: 'rgba(255,255,255,0.1)' }}>WHO WE ARE</h2>
                    <div style={{ width: '80px', height: '4px', background: 'var(--accent-color)', marginBottom: '2rem' }}></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <p style={{ fontSize: 'clamp(1.1rem, 2vw, 1.3rem)', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                        <span style={{ color: 'var(--text-primary)', fontWeight: 'bold' }}>TRAILS MOTO</span> is a premier business entity specializing in the
                        planning, design, and execution of world-class trail events.
                    </p>
                    <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                        Born from a passion for the unpaved path, we bridge the gap between motorcycle enthusiasts and the wild.
                        Whether you are a beginner looking to find your footing or a seasoned rider seeking the next challenge,
                        we provide the platform, the training, and the adventure.
                    </p>
                    <p style={{ fontSize: '1rem', color: 'var(--text-muted)', lineHeight: '1.8' }}>
                        Founder: <span style={{ color: 'var(--text-primary)', fontWeight: 'bold' }}>Irfan Trails</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default About;
