import React, { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

const ContactItem = ({ icon, title, content }) => (
    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
        <div style={{ color: 'var(--accent-color)', fontSize: '1.5rem' }}>{icon}</div>
        <div>
            <h4 style={{ fontSize: '1rem', marginBottom: '0.2rem', color: 'var(--text-primary)' }}>{title}</h4>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)' }}>{content}</p>
        </div>
    </div>
);

const inputStyle = {
    background: 'rgba(255,255,255,0.05)',
    border: '1px solid rgba(255,255,255,0.1)',
    padding: '1rem',
    borderRadius: '4px',
    color: '#fff',
    outline: 'none',
    width: '100%',
    fontFamily: 'inherit',
    transition: 'border-color 0.3s ease'
};

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', phone: '', message: '' });
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formUrl = 'https://docs.google.com/forms/u/0/d/e/1FAIpQLSeactiq9l1nDRuVEswnQZ6cX6RU-SQIK6CikN27cwHF7Tz8nQ/formResponse';

        const data = new FormData();
        data.append('entry.61405063', formData.name);
        data.append('entry.1146990674', formData.phone);
        data.append('entry.1419757304', formData.message);

        try {
            await fetch(formUrl, {
                method: 'POST',
                mode: 'no-cors',
                body: data
            });
            setIsSubmitted(true);
            setFormData({ name: '', phone: '', message: '' });
            setTimeout(() => setIsSubmitted(false), 5000);
        } catch (err) {
            console.error(err);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
            <div className="container">
                <div className="responsive-grid" style={{ gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.2fr)', gap: '4rem' }}>

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <h2 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', marginBottom: '1.5rem' }}>GET IN <span style={{ color: 'var(--accent-color)' }}>TOUCH</span></h2>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1rem', lineHeight: '1.8' }}>
                            Ready to take your riding skills to the next level? Contact us for bookings, inquiries about our academy, or trail events.
                        </p>

                        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                            <ContactItem icon={<FaMapMarkerAlt />} title="Location" content={<a href="https://www.google.com/maps/place/Trails+Moto/@9.8515958,76.3278296,18.4z/data=!4m6!3m5!1s0x3b087100677142c9:0xfbb82cb78c7d25ed!8m2!3d9.8514092!4d76.3278542!16s%2Fg%2F11x6g58kl1?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-color)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>Trails Moto, Kochi, Kerala</a>} />
                            <ContactItem icon={<FaEnvelope />} title="Email" content={<a href="mailto:trails.moto@gmail.com" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-color)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>trails.moto@gmail.com</a>} />
                            <ContactItem icon={<FaPhone />} title="Phone" content={<a href="tel:+919562584827" style={{ color: 'var(--text-secondary)', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = 'var(--accent-color)'} onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>+91 95625 84827</a>} />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        style={{
                            background: 'var(--bg-tertiary)',
                            padding: 'clamp(1.5rem, 5vw, 3rem)',
                            borderRadius: '8px',
                            border: '1px solid rgba(255,255,255,0.05)'
                        }}
                    >
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'relative' }}>
                            <AnimatePresence>
                                {isSubmitted && (
                                    <motion.div
                                        initial={{ opacity: 0, y: -20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        style={{
                                            background: 'rgba(37, 211, 102, 0.2)',
                                            color: '#25D366',
                                            padding: '1rem',
                                            borderRadius: '4px',
                                            border: '1px solid #25D366',
                                            textAlign: 'center',
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        Thank you! Your message has been sent successfully.
                                    </motion.div>
                                )}
                            </AnimatePresence>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Full Name</label>
                                    <input type="text" placeholder="John Doe" style={inputStyle} value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Phone Number</label>
                                    <input type="tel" placeholder="+91 95625 84827" style={inputStyle} value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })} required />
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Message</label>
                                <textarea placeholder="How can we help you?" rows="5" style={inputStyle} value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required></textarea>
                            </div>
                            <button type="submit" disabled={isSubmitting} style={{
                                padding: '1.2rem',
                                background: 'var(--accent-color)',
                                border: 'none',
                                color: '#000',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                letterSpacing: '2px',
                                cursor: isSubmitting ? 'not-allowed' : 'pointer',
                                opacity: isSubmitting ? 0.7 : 1,
                                borderRadius: '4px',
                                transition: 'all 0.3s ease',
                                marginTop: '1rem'
                            }}
                                onMouseEnter={(e) => e.target.style.filter = 'brightness(1.1)'}
                                onMouseLeave={(e) => e.target.style.filter = 'none'}
                            >
                                {isSubmitting ? 'Sending...' : 'Send Message'}
                            </button>
                        </form>
                    </motion.div>
                </div>

                <div style={{ marginTop: '4rem', width: '100%', height: '350px', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <iframe
                        src="https://maps.google.com/maps?q=9.8514092,76.3278542&hl=en&z=16&output=embed"
                        width="100%"
                        height="100%"
                        style={{ border: 0, opacity: 0.7 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
            </div>
        </section>
    );
};

export default Contact;
