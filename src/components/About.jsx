import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
    return (
        <section id="about" style={{
            padding: '8rem 2rem',
            background: 'var(--bg-secondary)',
            position: 'relative',
        }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>

                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <h2 style={{ fontSize: '4rem', marginBottom: '2rem', color: 'var(--text-muted)' }}>WHO WE ARE</h2>
                    <div style={{ width: '100px', height: '4px', background: 'var(--accent-color)', marginBottom: '2rem' }}></div>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
                        <span style={{ color: 'var(--text-primary)', fontWeight: 'bold' }}>IRFAN TRAILS</span> is a premier business entity specializing in the
                        planning, design, and execution of world-class trail events.
                    </p>
                    <p style={{ fontSize: '1.1rem', color: 'var(--text-muted)' }}>
                        Born from a passion for the unpaved path, we bridge the gap between motorcycle enthusiasts and the wild.
                        Whether you are a beginner looking to find your footing or a seasoned rider seeking the next challenge,
                        we provide the platform, the training, and the adventure.
                    </p>
                </motion.div>

            </div>
        </section>
    );
};

export default About;
