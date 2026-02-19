import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Placeholder images for portfolio - using Unsplash source for motorcycle/adventure
const portfolioItems = [
    { id: 1, src: 'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=600&q=80', category: 'Training' },
    { id: 2, src: 'https://images.unsplash.com/photo-1625043484550-df60256f6ea5?w=600&q=80', category: 'Events' },
    { id: 3, src: 'https://images.unsplash.com/photo-1547024858-a0e5b7a5a801?w=600&q=80', category: 'Adventure' },
    { id: 4, src: 'https://images.unsplash.com/photo-1485965120184-e220f721d03e?w=600&q=80', category: 'Workshop' },
    { id: 5, src: 'https://images.unsplash.com/photo-1517502474097-f9b30659dadb?w=600&q=80', category: 'Events' },
    { id: 6, src: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=600&q=80', category: 'Training' },
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
