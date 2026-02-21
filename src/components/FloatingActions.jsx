import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaInstagram, FaFacebookF, FaWhatsapp, FaArrowUp, FaPhoneAlt } from 'react-icons/fa';

const FloatingActions = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div style={{
            position: 'fixed',
            right: '20px',
            bottom: '20px',
            zIndex: 1000,
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
            alignItems: 'center'
        }}>
            <SocialButton
                icon={<FaInstagram />}
                color="#E4405F"
                href="https://instagram.com/trails.moto"
                label="Instagram"
            />
            {/* <SocialButton
                icon={<FaFacebookF />}
                color="#1877F2"
                href="https://facebook.com/irfan.trails"
                label="Facebook"
            /> */}
            <SocialButton
                icon={<FaWhatsapp />}
                color="#25D366"
                href="https://wa.me/+919562584827?text=I%20am%20interested%20to%20talk"
                label="WhatsApp"
            />
            <SocialButton
                icon={<FaPhoneAlt />}
                color="#007BFF"
                href="tel:+919562584827"
                label="Call"
            />

            <AnimatePresence>
                {isVisible && (
                    <motion.button
                        initial={{ opacity: 0, scale: 0, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0, y: 20 }}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        onClick={scrollToTop}
                        style={{
                            width: '50px',
                            height: '50px',
                            borderRadius: '50%',
                            backgroundColor: '#fff',
                            color: '#000',
                            border: 'none',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            fontSize: '1.2rem',
                            cursor: 'pointer',
                            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                            transition: 'all 0.3s ease'
                        }}
                        aria-label="Scroll to top"
                    >
                        <FaArrowUp />
                    </motion.button>
                )}
            </AnimatePresence>
        </div>
    );
};

const SocialButton = ({ icon, color, href, label }) => (
    <motion.a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.1, x: -5 }}
        whileTap={{ scale: 0.9 }}
        style={{
            width: '50px',
            height: '50px',
            borderRadius: '50%',
            backgroundColor: color,
            color: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '1.5rem',
            textDecoration: 'none',
            boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
            transition: 'all 0.3s ease'
        }}
        aria-label={label}
    >
        {icon}
    </motion.a>
);

export default FloatingActions;
