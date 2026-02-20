import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const testimonials = [
    {
        id: 1,
        name: "Rahul K.",
        role: "Adventure Rider",
        avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&q=80&fit=crop",
        text: "The training at Irfan Trails completely changed my riding style. The attention to detail and safety is unmatched.",
        rating: 5
    },
    {
        id: 2,
        name: "Sarah M.",
        role: "Beginner",
        avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&q=80&fit=crop",
        text: "I was nervous about off-roading, but Irfan's patience and technique made me confident in just a few sessions!",
        rating: 5
    },
    {
        id: 3,
        name: "David L.",
        role: "Tour Participant",
        avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&q=80&fit=crop",
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

                <div style={{ position: 'relative', minHeight: '350px' }}>
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={currentIndex}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.5 }}
                            style={{
                                background: 'var(--bg-secondary)',
                                padding: '4rem 3rem 3rem',
                                borderRadius: '12px',
                                border: '1px solid rgba(255,255,255,0.05)',
                                position: 'relative',
                                boxShadow: '0 20px 40px rgba(0,0,0,0.3)'
                            }}
                        >
                            <div style={{
                                position: 'absolute',
                                top: '-3rem',
                                left: '50%',
                                transform: 'translateX(-50%)',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center'
                            }}>
                                <div style={{
                                    width: '100px',
                                    height: '100px',
                                    borderRadius: '50%',
                                    border: '4px solid var(--accent-color)',
                                    overflow: 'hidden',
                                    background: 'var(--bg-primary)',
                                    marginBottom: '1rem'
                                }}>
                                    <img
                                        src={testimonials[currentIndex].avatar}
                                        alt={testimonials[currentIndex].name}
                                        style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    />
                                </div>
                                <div style={{
                                    background: 'var(--accent-color)',
                                    padding: '0.8rem',
                                    borderRadius: '50%',
                                    marginTop: '-2.5rem',
                                    marginLeft: '5rem',
                                    border: '4px solid var(--bg-secondary)'
                                }}>
                                    <FaQuoteLeft size={12} color="#000" />
                                </div>
                            </div>

                            <p style={{ fontSize: '1.2rem', fontStyle: 'italic', marginBottom: '2rem', lineHeight: '1.8', marginTop: '2rem' }}>
                                "{testimonials[currentIndex].text}"
                            </p>

                            <div style={{ display: 'flex', justifyContent: 'center', gap: '0.2rem', marginBottom: '1rem' }}>
                                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                                    <FaStar key={i} color="var(--accent-color)" />
                                ))}
                            </div>

                            <h4 style={{ fontSize: '1.5rem', marginBottom: '0.2rem', color: 'var(--text-primary)' }}>{testimonials[currentIndex].name}</h4>
                            <p style={{ color: 'var(--accent-color)', fontSize: '0.9rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>{testimonials[currentIndex].role}</p>
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
