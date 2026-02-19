import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaInstagram, FaWhatsapp, FaFacebookF } from 'react-icons/fa';

const Contact = () => {
    return (
        <footer id="contact" style={{ background: 'var(--bg-tertiary)', paddingTop: '8rem', color: 'var(--text-primary)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 2rem 4rem' }}>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', marginBottom: '6rem' }}>

                    {/* Contact Form */}
                    <div>
                        <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem' }}>GET IN TOUCH</h2>
                        <form style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <input
                                type="text"
                                placeholder="YOUR NAME"
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    borderBottom: '1px solid var(--text-secondary)',
                                    padding: '1rem 0',
                                    color: 'var(--text-primary)',
                                    fontFamily: 'var(--font-family-body)',
                                    fontSize: '1rem'
                                }}
                            />
                            <input
                                type="email"
                                placeholder="EMAIL ADDRESS"
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    borderBottom: '1px solid var(--text-secondary)',
                                    padding: '1rem 0',
                                    color: 'var(--text-primary)',
                                    fontFamily: 'var(--font-family-body)',
                                    fontSize: '1rem'
                                }}
                            />
                            <textarea
                                placeholder="MESSAGE"
                                rows="4"
                                style={{
                                    background: 'transparent',
                                    border: 'none',
                                    borderBottom: '1px solid var(--text-secondary)',
                                    padding: '1rem 0',
                                    color: 'var(--text-primary)',
                                    fontFamily: 'var(--font-family-body)',
                                    fontSize: '1rem',
                                    resize: 'none'
                                }}
                            ></textarea>
                            <button
                                type="submit"
                                style={{
                                    alignSelf: 'flex-start',
                                    marginTop: '1rem',
                                    padding: '1rem 3rem',
                                    background: 'var(--accent-color)',
                                    color: '#fff',
                                    border: 'none',
                                    textTransform: 'uppercase',
                                    fontWeight: 'bold',
                                    letterSpacing: '1px',
                                    cursor: 'pointer'
                                }}
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Info & Map */}
                    <div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--text-secondary)' }}>CONTACT INFO</h3>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginBottom: '3rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <FaMapMarkerAlt color="var(--accent-color)" />
                                <span>Your Full Address, City, State, Zip Code</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <FaEnvelope color="var(--accent-color)" />
                                <span>contact@irfantrails.com</span>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <FaPhone color="var(--accent-color)" />
                                <span>+91 98765 43210</span>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div style={{
                            width: '100%',
                            height: '250px',
                            background: '#333',
                            borderRadius: '4px',
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            color: '#666'
                        }}>
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
                </div>

                {/* Footer Bottom */}
                <div style={{
                    borderTop: '1px solid rgba(255,255,255,0.1)',
                    paddingTop: '2rem',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '1rem',
                    textAlign: 'center'
                }}>
                    <div className="logo" style={{
                        fontFamily: 'var(--font-family-heading)',
                        fontSize: '1.5rem',
                        fontWeight: 'bold',
                        letterSpacing: '2px',
                        marginBottom: '1rem'
                    }}>
                        IRFAN<span style={{ color: 'var(--accent-color)' }}>.TRAILS</span>
                    </div>

                    <div style={{ display: 'flex', gap: '1.5rem', marginBottom: '1rem' }}>
                        <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}><FaInstagram size={20} /></a>
                        <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}><FaFacebookF size={20} /></a>
                        <a href="#" style={{ color: 'var(--text-secondary)', transition: 'color 0.3s' }}><FaWhatsapp size={20} /></a>
                    </div>

                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                        © {new Date().getFullYear()} Irfan Trails. All rights reserved.
                    </p>
                </div>

            </div>
        </footer>
    );
};

export default Contact;
