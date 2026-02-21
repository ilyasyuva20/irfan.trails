import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram, FaWhatsapp, FaBars, FaTimes } from 'react-icons/fa';
import logo from '../assets/logo.jpeg';
import '../styles/global.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        { name: 'Events', href: '#events' },
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
                padding: isScrolled ? '0.8rem 1.5rem' : '1.5rem 2rem',
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
            <div className="logo">
                <img
                    src={logo}
                    alt="Irfan Trails"
                    style={{
                        height: isScrolled ? '50px' : '70px',
                        width: 'auto',
                        transition: 'all 0.3s ease',
                        filter: 'drop-shadow(0 0 15px rgba(255,180,0,0.3))'
                    }}
                />
            </div>

            {/* Desktop Menu */}
            <ul className="desktop-menu" style={{ display: 'flex', gap: '2rem' }}>
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

            <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                <div className="socials desktop-only" style={{ display: 'flex', gap: '1rem' }}>
                    <a href="https://wa.me/+919562584827?text=I%20am%20interested%20to%20talk" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp size={20} />
                    </a>
                    <a href="https://instagram.com/irfan.trails" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={20} />
                    </a>
                </div>

                {/* Mobile Menu Toggle */}
                <button
                    className="menu-toggle"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    style={{
                        background: 'transparent',
                        border: 'none',
                        color: '#fff',
                        fontSize: '1.5rem',
                        cursor: 'pointer',
                        display: 'none',
                        zIndex: 1001
                    }}
                >
                    {isMenuOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu Drawer */}
            <AnimatePresence>
                {isMenuOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        style={{
                            position: 'fixed',
                            top: 0,
                            right: 0,
                            width: '80%',
                            height: '100vh',
                            background: 'var(--bg-primary)',
                            padding: '6rem 2rem',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '2rem',
                            boxShadow: '-10px 0 30px rgba(0,0,0,0.5)',
                            zIndex: 1000
                        }}
                    >
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                onClick={() => setIsMenuOpen(false)}
                                style={{
                                    fontSize: '1.5rem',
                                    textTransform: 'uppercase',
                                    fontWeight: '700',
                                    letterSpacing: '2px'
                                }}
                            >
                                {link.name}
                            </a>
                        ))}

                        <div style={{ display: 'flex', gap: '2rem', marginTop: 'auto', paddingBottom: '2rem' }}>
                            <a href="https://wa.me/+919562584827?text=I%20am%20interested%20to%20talk" target="_blank" rel="noopener noreferrer">
                                <FaWhatsapp size={30} />
                            </a>
                            <a href="https://instagram.com/irfan.trails" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={30} />
                            </a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <style>{`
                @media (max-width: 768px) {
                    .desktop-menu, .desktop-only {
                        display: none !important;
                    }
                    .menu-toggle {
                        display: block !important;
                    }
                }
            `}</style>
        </motion.nav>
    );
};

export default Navbar;
