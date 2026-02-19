import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
import '../styles/global.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Portfolio', href: '#portfolio' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                padding: isScrolled ? '1rem 2rem' : '2rem 4rem',
                background: isScrolled ? 'rgba(10, 10, 10, 0.95)' : 'transparent',
                backdropFilter: isScrolled ? 'blur(10px)' : 'none',
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                zIndex: 1000,
                transition: 'all 0.3s ease',
                borderBottom: isScrolled ? '1px solid rgba(255,255,255,0.1)' : 'none',
            }}
        >
            <div className="logo" style={{
                fontFamily: 'var(--font-family-heading)',
                fontSize: '1.5rem',
                fontWeight: 'bold',
                letterSpacing: '2px'
            }}>
                IRFAN<span style={{ color: 'var(--accent-color)' }}>.TRAILS</span>
            </div>

            <ul style={{ display: 'flex', gap: '2rem' }}>
                {navLinks.map((link) => (
                    <li key={link.name}>
                        <a
                            href={link.href}
                            style={{
                                fontSize: '0.9rem',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                fontWeight: '500',
                                opacity: 0.8,
                            }}
                            onMouseEnter={(e) => e.target.style.opacity = '1'}
                            onMouseLeave={(e) => e.target.style.opacity = '0.8'}
                        >
                            {link.name}
                        </a>
                    </li>
                ))}
            </ul>

            <div className="socials" style={{ display: 'flex', gap: '1rem' }}>
                <a href="https://wa.me/yourphonenumber" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp size={20} />
                </a>
                <a href="https://instagram.com/irfan.trails" target="_blank" rel="noopener noreferrer">
                    <FaInstagram size={20} />
                </a>
            </div>
        </motion.nav>
    );
};

export default Navbar;
