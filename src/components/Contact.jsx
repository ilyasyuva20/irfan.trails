import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';

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
                            <ContactItem icon={<FaMapMarkerAlt />} title="Location" content="Wayanad / Coorg / Bangalore" />
                            <ContactItem icon={<FaEnvelope />} title="Email" content="irfantrails@gmail.com" />
                            <ContactItem icon={<FaPhone />} title="Phone" content="+91 99000 00000" />
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
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem' }}>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Full Name</label>
                                    <input type="text" placeholder="John Doe" style={inputStyle} />
                                </div>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                    <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Email Address</label>
                                    <input type="email" placeholder="john@example.com" style={inputStyle} />
                                </div>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                                <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', textTransform: 'uppercase' }}>Message</label>
                                <textarea placeholder="How can we help you?" rows="5" style={inputStyle}></textarea>
                            </div>
                            <button style={{
                                padding: '1.2rem',
                                background: 'var(--accent-color)',
                                border: 'none',
                                color: '#000',
                                fontWeight: 'bold',
                                textTransform: 'uppercase',
                                letterSpacing: '2px',
                                cursor: 'pointer',
                                borderRadius: '4px',
                                transition: 'all 0.3s ease',
                                marginTop: '1rem'
                            }}
                                onMouseEnter={(e) => e.target.style.filter = 'brightness(1.1)'}
                                onMouseLeave={(e) => e.target.style.filter = 'none'}
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>

                <div style={{ marginTop: '4rem', width: '100%', height: '350px', borderRadius: '12px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)' }}>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.776629987667!2d77.5945627!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1650000000000!5m2!1sen!2sin"
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
