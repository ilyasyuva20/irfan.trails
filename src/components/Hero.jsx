import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const Hero = () => {
    const { scrollY } = useScroll();
    const y1 = useTransform(scrollY, [0, 500], [0, 200]);
    const y2 = useTransform(scrollY, [0, 500], [0, -150]);

    return (
        <section id="hero" style={{
            height: '100vh',
            width: '100%',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
            color: 'var(--text-primary)',
        }}>
            {/* Background Parallax */}
            <motion.div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '120%', // Taller for parallax
                    backgroundImage: 'linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.7)), url("https://images.unsplash.com/photo-1558981806-ec527fa84f3d?ixlib=rb-4.0.3&auto=format&fit=crop&w=2670&q=80")', // High-end motorcycle image
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    y: y1,
                    zIndex: -1,
                }}
            />

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.2 }}
                style={{
                    maxWidth: '80%',
                    zIndex: 1,
                    padding: '2rem',
                }}
            >
                <motion.h1
                    style={{
                        fontSize: 'clamp(3rem, 8vw, 6rem)',
                        marginBottom: '1rem',
                        lineHeight: 1,
                        textShadow: '0 0 20px rgba(0,0,0,0.5)'
                    }}
                >
                    ADVENTURE <br />
                    <span style={{ color: 'transparent', WebkitTextStroke: '2px var(--text-primary)' }}>MOTORCYCLIST</span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    style={{
                        fontSize: 'clamp(1rem, 2vw, 1.2rem)',
                        maxWidth: '600px',
                        margin: '0 auto',
                        color: 'var(--text-secondary)',
                        letterSpacing: '1px'
                    }}
                >
                    MOTORSPORTS ACADEMY FOR ADVENTURE & OFF-ROAD RIDING <br /> FROM GRASS ROOTS LEVEL
                </motion.p>

                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.2 }}
                    style={{ marginTop: '3rem' }}
                >
                    <a href="#contact" style={{
                        padding: '1rem 2rem',
                        border: '1px solid var(--accent-color)',
                        color: 'var(--text-primary)',
                        textTransform: 'uppercase',
                        letterSpacing: '2px',
                        background: 'rgba(230, 57, 70, 0.1)',
                        backdropFilter: 'blur(5px)',
                        transition: 'all 0.3s ease',
                    }}
                        onMouseEnter={(e) => {
                            e.target.style.background = 'var(--accent-color)';
                            e.target.style.color = '#fff';
                        }}
                        onMouseLeave={(e) => {
                            e.target.style.background = 'rgba(230, 57, 70, 0.1)';
                            e.target.style.color = 'var(--text-primary)';
                        }}
                    >
                        Start Your Journey
                    </a>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Hero;
