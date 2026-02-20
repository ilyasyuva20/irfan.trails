import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaFacebookF } from 'react-icons/fa';
import logo from '../assets/logo.jpeg';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer style={{
            background: 'var(--bg-primary)',
            padding: '4rem 2rem 2rem',
            borderTop: '1px solid rgba(255,180,0,0.1)',
            color: 'var(--text-secondary)'
        }}>
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
                gap: '3rem',
                marginBottom: '4rem'
            }}>
                {/* Brand Section */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                    <img src={logo} alt="Irfan Trails" style={{ height: '80px', width: 'auto', alignSelf: 'flex-start' }} />
                    <p style={{ lineHeight: '1.8', fontSize: '0.95rem' }}>
                        Empowering motorcyclists through professional training and unforgettable adventure tours. Join the trails today.
                    </p>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                        <SocialIcon icon={<FaInstagram />} href="https://instagram.com/irfan.trails" />
                        <SocialIcon icon={<FaFacebookF />} href="https://facebook.com/irfan.trails" />
                        <SocialIcon icon={<FaWhatsapp />} href="https://wa.me/yourphonenumber" />
                    </div>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', fontSize: '1.2rem' }}>Quick Links</h4>
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
                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '1.5rem', fontSize: '1.2rem' }}>Contact Us</h4>
                    <ul style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <FaMapMarkerAlt style={{ color: 'var(--accent-color)' }} />
                            <span>Wayanad, Kerala, India</span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <FaEnvelope style={{ color: 'var(--accent-color)' }} />
                            <span>info@irfantrails.com</span>
                        </li>
                        <li style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <FaWhatsapp style={{ color: 'var(--accent-color)' }} />
                            <span>+91 1234567890</span>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Bottom Bar */}
            <div style={{
                maxWidth: '1200px',
                margin: '0 auto',
                paddingTop: '2rem',
                borderTop: '1px solid rgba(255,255,255,0.05)',
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '1rem',
                fontSize: '0.85rem'
            }}>
                <p>&copy; {currentYear} Irfan Trails. All rights reserved.</p>
                <p>
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
                display: 'inline-block'
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
            transition: 'all 0.3s ease'
        }}
    >
        {icon}
    </motion.a>
);

export default Footer;
