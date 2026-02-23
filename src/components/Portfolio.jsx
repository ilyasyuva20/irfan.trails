import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaTimes } from 'react-icons/fa';

// Dynamically import images from the respective folders
// Using eager: true so we get the resolved URL directly for assets
const trainingImages = import.meta.glob('../assets/gallery/training/*.{png,jpg,jpeg,webp}', { eager: true, query: '?url', import: 'default' });
const raceImages = import.meta.glob('../assets/gallery/race/*.{png,jpg,jpeg,webp}', { eager: true, query: '?url', import: 'default' });
const offroadImages = import.meta.glob('../assets/gallery/offroad/*.{png,jpg,jpeg,webp}', { eager: true, query: '?url', import: 'default' });

// Function to process glob imports into portfolio items
const processImages = (globResult, category) => {
    return Object.keys(globResult).map((path, index) => ({
        id: `${category.replace(/\s+/g, '-')}-${index}`,
        src: globResult[path],
        category: category
    }));
};

const portfolioItems = [
    ...processImages(trainingImages, 'Training'),
    ...processImages(raceImages, 'Race Events'),
    ...processImages(offroadImages, 'Offroad Ride')
];

const Portfolio = () => {
    const [filter, setFilter] = useState('Training');
    const [selectedImage, setSelectedImage] = useState(null);

    const filteredItems = portfolioItems.filter(item => item.category === filter);

    // Keep fixed categories so the buttons always show up even if a folder is empty
    const categories = ['Training', 'Race Events', 'Offroad Ride'];

    return (
        <section id="portfolio" className="section-padding" style={{ background: 'var(--bg-secondary)', minHeight: '100vh' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '3rem' }}
                >
                    OUR <span style={{ color: 'var(--accent-color)' }}>GALLERY</span>
                </motion.h2>

                {/* Filter Buttons */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap', marginBottom: '4rem' }}>
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            style={{
                                padding: '0.8rem 1.8rem',
                                borderRadius: '30px',
                                border: `1px solid ${filter === cat ? 'var(--accent-color)' : 'rgba(255,255,255,0.2)'}`,
                                background: filter === cat ? 'var(--accent-color)' : 'transparent',
                                color: filter === cat ? '#000' : '#fff',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease',
                                fontWeight: 'bold',
                                fontSize: '0.9rem',
                                letterSpacing: '1px',
                                textTransform: 'uppercase'
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {filteredItems.length === 0 ? (
                    <div style={{ textAlign: 'center', padding: '4rem', color: 'rgba(255,255,255,0.5)', fontStyle: 'italic' }}>
                        No photos available in this section yet.
                    </div>
                ) : (
                    <motion.div layout className="responsive-grid" style={{ gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))' }}>
                        <AnimatePresence>
                            {filteredItems.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    layout
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.3 }}
                                    whileHover={{ y: -10, boxShadow: '0 15px 40px rgba(0,0,0,0.4)' }}
                                    onClick={() => setSelectedImage(item)}
                                    style={{
                                        position: 'relative',
                                        height: '300px',
                                        borderRadius: '12px',
                                        overflow: 'hidden',
                                        boxShadow: '0 10px 30px rgba(0,0,0,0.2)',
                                        border: '1px solid rgba(255,255,255,0.05)',
                                        cursor: 'pointer'
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
                                        onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.1)'}
                                        onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                                    />
                                    <div style={{
                                        position: 'absolute',
                                        bottom: 0,
                                        left: 0,
                                        width: '100%',
                                        padding: '2rem 1.5rem 1.5rem',
                                        background: 'linear-gradient(transparent, rgba(0,0,0,0.9))',
                                        color: '#fff',
                                        pointerEvents: 'none'
                                    }}>
                                    </div>
                                    <div style={{
                                        position: 'absolute',
                                        top: '1rem',
                                        right: '1rem',
                                        background: 'rgba(0,0,0,0.5)',
                                        borderRadius: '50%',
                                        width: '32px',
                                        height: '32px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        opacity: 0,
                                        transition: 'opacity 0.3s ease'
                                    }} className="hover-indicator">
                                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" />
                                        </svg>
                                    </div>
                                    <style>{`
                                        div:hover > .hover-indicator {
                                            opacity: 1 !important;
                                        }
                                    `}</style>
                                </motion.div>
                            ))}
                        </AnimatePresence>
                    </motion.div>
                )}
            </div>

            {/* Fullscreen Image Popup */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        style={{
                            position: 'fixed',
                            top: 0,
                            left: 0,
                            width: '100vw',
                            height: '100vh',
                            background: 'rgba(0,0,0,0.95)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            zIndex: 9999,
                            padding: '2rem',
                            backdropFilter: 'blur(10px)'
                        }}
                    >
                        {/* Close Button */}
                        <motion.button
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.5 }}
                            transition={{ delay: 0.2 }}
                            onClick={(e) => {
                                e.stopPropagation();
                                setSelectedImage(null);
                            }}
                            style={{
                                position: 'absolute',
                                top: '2rem',
                                right: '2rem',
                                background: 'rgba(255,255,255,0.1)',
                                border: '1px solid rgba(255,255,255,0.2)',
                                color: '#fff',
                                width: '50px',
                                height: '50px',
                                borderRadius: '50%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                cursor: 'pointer',
                                zIndex: 10000,
                                transition: 'all 0.3s ease'
                            }}
                            onMouseOver={(e) => {
                                e.currentTarget.style.background = 'var(--accent-color)';
                                e.currentTarget.style.color = '#000';
                            }}
                            onMouseOut={(e) => {
                                e.currentTarget.style.background = 'rgba(255,255,255,0.1)';
                                e.currentTarget.style.color = '#fff';
                            }}
                        >
                            <FaTimes size={24} />
                        </motion.button>

                        <motion.img
                            initial={{ scale: 0.8, opacity: 0, y: 50 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.8, opacity: 0, y: 50 }}
                            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                            onClick={(e) => e.stopPropagation()}
                            src={selectedImage.src}
                            alt={selectedImage.category}
                            style={{
                                maxWidth: '100%',
                                maxHeight: '90vh',
                                objectFit: 'contain',
                                borderRadius: '8px',
                                boxShadow: '0 20px 50px rgba(0,0,0,0.5)'
                            }}
                        />
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
};

export default Portfolio;
