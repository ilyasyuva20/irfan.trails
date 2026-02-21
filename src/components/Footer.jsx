import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaFacebookF } from 'react-icons/fa';
import logo from '../assets/logo.jpeg';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    return (
        <footer style={{ background: 'var(--bg-secondary)', borderTop: '1px solid rgba(255,255,255,0.05)', padding: '5rem 0 2rem' }}>
            <div className="container responsive-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '3rem' }}>

                {/* Brand Section */}
                <div>
                    <img
                        src={logo}
                        alt="Irfan Trails"
                        style={{ height: '80px', width: 'auto', marginBottom: '1.5rem', filter: 'drop-shadow(0 0 10px rgba(255,180,0,0.2))' }}
                    />
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', marginBottom: '2rem', fontSize: '0.95rem' }}>
                        Curating the finest off-road and adventure motorcycling experiences. Master the terrain with us.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <SocialIcon icon={<FaInstagram />} href="https://instagram.com/trails.moto" />
                        {/* <SocialIcon icon={<FaFacebookF />} href="https://facebook.com/irfan.trails" /> */}
                        <SocialIcon icon={<FaWhatsapp />} href="https://wa.me/+919562584827?text=I%20am%20interested%20to%20talk" />
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '2rem', fontSize: '1.2rem' }}>Quick Links</h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <FooterLink href="#about">About Us</FooterLink>
                        <FooterLink href="#services">Services</FooterLink>
                        <FooterLink href="#events">Events</FooterLink>
                        <FooterLink href="#portfolio">Portfolio</FooterLink>
                        <FooterLink href="#contact">Contact</FooterLink>
                    </ul>
                </div>

                {/* Contact Info */}
                <div>
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '2rem', fontSize: '1.2rem' }}>Reach Us</h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                        <li style={{ display: 'flex', gap: '1rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                            <FaMapMarkerAlt style={{ color: 'var(--accent-color)', flexShrink: 0, marginTop: '5px' }} />
                            <a href="https://www.google.com/maps/place/Trails+Moto/@9.8515958,76.3278296,18.4z/data=!4m6!3m5!1s0x3b087100677142c9:0xfbb82cb78c7d25ed!8m2!3d9.8514092!4d76.3278542!16s%2Fg%2F11x6g58kl1?entry=ttu&g_ep=EgoyMDI2MDIxOC4wIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                                <span>Trails Moto, Kochi, Kerala</span>
                            </a>
                        </li>
                        <li style={{ display: 'flex', gap: '1rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                            <FaEnvelope style={{ color: 'var(--accent-color)', flexShrink: 0 }} />
                            <span>trails.moto@gmail.com</span>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="container" style={{ marginTop: '5rem', paddingTop: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' }}>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', letterSpacing: '1px' }}>
                    &copy; {currentYear} IRFAN TRAILS. ALL RIGHTS RESERVED.
                </p>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginTop: '1rem' }}>
                    Made with <span style={{ color: 'var(--accent-color)' }}>&hearts;</span> for the Riding Community
                </p>
            </div>
        </footer>
    );
};

const FooterLink = ({ href, children }) => (
    <li>
        <motion.a
            href={href}
            whileHover={{ x: 5, color: 'var(--accent-color)' }}
            style={{
                transition: 'color 0.3s ease',
                display: 'inline-block',
                color: 'var(--text-secondary)',
                textDecoration: 'none'
            }}
        >
            {children}
        </motion.a>
    </li>
);

const SocialIcon = ({ icon, href }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ y: -5, backgroundColor: 'var(--accent-color)', color: '#000' }}
        style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: 'rgba(255,255,255,0.05)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.2rem',
            color: 'var(--text-primary)',
            transition: 'all 0.3s ease',
            textDecoration: 'none'
        }}
    >
        {icon}
    </motion.a>
);

export default Footer;
