import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import img1 from '../assets/portfolio/irfantrails1.jpeg';
import img2 from '../assets/portfolio/irfantrails2.jpeg';
import img3 from '../assets/portfolio/irfantrails3.jpeg';
import img4 from '../assets/portfolio/irfantrails4.jpeg';
import img5 from '../assets/portfolio/irfantrails5.jpeg';
import img6 from '../assets/portfolio/irfantrails6.jpeg';
import img7 from '../assets/portfolio/irfantrails7.jpeg';
import img8 from '../assets/portfolio/irfantrails8.jpeg';

// Local images for portfolio
const portfolioItems = [
    { id: 1, src: img1, category: 'Training' },
    { id: 2, src: img2, category: 'Events' },
    { id: 3, src: img3, category: 'Adventure' },
    { id: 4, src: img4, category: 'Workshop' },
    { id: 5, src: img5, category: 'Events' },
    { id: 6, src: img6, category: 'Training' },
    { id: 7, src: img7, category: 'Adventure' },
    { id: 8, src: img8, category: 'Workshop' },
];

const Portfolio = () => {
    const [filter, setFilter] = useState('All');

    const filteredItems = filter === 'All'
        ? portfolioItems
        : portfolioItems.filter(item => item.category === filter);

    const categories = ['All', ...new Set(portfolioItems.map(item => item.category))];

    return (
        <section id="portfolio" className="section-padding" style={{ background: 'var(--bg-secondary)' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '4rem' }}
                >
                    OUR <span style={{ color: 'var(--accent-color)' }}>GALLERY</span>
                </motion.h2>

                <div className="responsive-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))' }}>
                    {portfolioItems.map((item, index) => (
                        <motion.div
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            style={{
                                position: 'relative',
                                height: '350px',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                                border: '1px solid rgba(255,255,255,0.05)'
                            }}
                        >
                            <img
                                src={item.src}
                                alt={item.category}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    objectFit: 'cover',
                                    transition: 'transform 0.5s ease'
                                }}
                            />
                            <div style={{
                                position: 'absolute',
                                bottom: 0,
                                left: 0,
                                width: '100%',
                                padding: '2rem',
                                background: 'linear-gradient(transparent, rgba(0,0,0,0.8))',
                                color: '#fff'
                            }}>
                                <span style={{
                                    fontSize: '0.8rem',
                                    textTransform: 'uppercase',
                                    letterSpacing: '2px',
                                    color: 'var(--accent-color)',
                                    fontWeight: 'bold'
                                }}>
                                    {item.category}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
