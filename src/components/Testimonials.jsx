import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
    {
        id: 1,
        name: "Rahul K.",
        role: "Adventure Rider",
        text: "The training at Irfan Trails completely changed my riding style. The attention to detail and safety is unmatched.",
        rating: 5
    },
    {
        id: 2,
        name: "Sarah M.",
        role: "Beginner",
        text: "I was nervous about off-roading, but Irfan's patience and technique made me confident in just a few sessions!",
        rating: 5
    },
    {
        id: 3,
        name: "David L.",
        role: "Tour Participant",
        text: "The curated trails and organization were top-notch. Best adventure motorcycling experience I've had.",
        rating: 4
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    return (
        <section id="testimonials" style={{ padding: '8rem 2rem', background: 'var(--bg-primary)' }}>
            <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
                <h2 style={{ fontSize: '3rem', marginBottom: '4rem' }}>TESTIMONIALS</h2>

                <div style={{ position: 'relative', minHeight: '300px' }}>
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: -50 }}
                            transition={{ duration: 0.5 }}
                            style={{
                                background: 'var(--bg-secondary)',
                                padding: '3rem',
                                borderRadius: '8px',
                                border: '1px solid rgba(255,255,255,0.05)',
                                position: 'relative'
                            }}
                        >
                            <div style={{ position: 'absolute', top: '-1.5rem', left: '2rem', background: 'var(--accent-color)', padding: '1rem', borderRadius: '50%' }}>
                                <FaQuoteLeft size={20} color="#fff" />
                            </div>

                            <p style={{ fontSize: '1.2rem', fontStyle: 'italic', marginBottom: '2rem', lineHeight: '1.8' }}>
                                "{testimonials[currentIndex].text}"
                            </p>

                            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.2rem', marginBottom: '1rem' }}>
                                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                    <FaStar key={i} color="var(--accent-color)" />
                                ))}
                            </div>

                            <h4 style={{ fontSize: '1.2rem', marginBottom: '0.5rem' }}>{testimonials[currentIndex].name}</h4>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{testimonials[currentIndex].role}</p>
                        </motion.div>
                    </AnimatePresence>

                    <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '2rem' }}>
                        <button
                            onClick={prevTestimonial}
                            style={{
                                background: 'transparent',
                                border: '1px solid var(--text-secondary)',
                                color: 'var(--text-primary)',
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => { e.target.style.background = 'var(--accent-color)'; e.target.style.border = '1px solid var(--accent-color)'; }}
                            onMouseLeave={(e) => { e.target.style.background = 'transparent'; e.target.style.border = '1px solid var(--text-secondary)'; }}
                        >
                            &lt;
                        </button>
                        <button
                            onClick={nextTestimonial}
                            style={{
                                background: 'transparent',
                                border: '1px solid var(--text-secondary)',
                                color: 'var(--text-primary)',
                                width: '40px',
                                height: '40px',
                                borderRadius: '50%',
                                cursor: 'pointer',
                                transition: 'all 0.3s ease'
                            }}
                            onMouseEnter={(e) => { e.target.style.background = 'var(--accent-color)'; e.target.style.border = '1px solid var(--accent-color)'; }}
                            onMouseLeave={(e) => { e.target.style.background = 'transparent'; e.target.style.border = '1px solid var(--text-secondary)'; }}
                        >
                            &gt;
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
