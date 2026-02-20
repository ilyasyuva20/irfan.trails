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
        <section id="portfolio" style={{ padding: '8rem 2rem', background: 'var(--bg-secondary)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '2rem' }}
                >
                    PORTFOLIO
                </motion.h2>

                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '3rem' }}>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            style={{
                                background: filter === cat ? 'var(--accent-color)' : 'transparent',
                                color: filter === cat ? '#fff' : 'var(--text-secondary)',
                                border: '1px solid var(--accent-color)',
                                padding: '0.5rem 1.5rem',
                                cursor: 'pointer',
                                textTransform: 'uppercase',
                                borderRadius: '20px',
                                transition: 'all 0.3s ease',
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                <motion.div
                    layout
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                        gap: '1.5rem'
                    }}
                >
                    <AnimatePresence>
                        {filteredItems.map((item) => (
                            <motion.div
                                layout
                                key={item.id}
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                transition={{ duration: 0.3 }}
                                style={{ overflow: 'hidden', borderRadius: '8px', cursor: 'pointer' }}
                                whileHover={{ scale: 1.02 }}
                            >
                                <img
                                    src={item.src}
                                    alt={item.category}
                                    style={{
                                        width: '100%',
                                        height: '300px',
                                        objectFit: 'cover',
                                        transition: 'transform 0.5s ease'
                                    }}
                                    onMouseEnter={(e) => e.target.style.transform = 'scale(1.1)'}
                                    onMouseLeave={(e) => e.target.style.transform = 'scale(1)'}
                                />
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default Portfolio;
