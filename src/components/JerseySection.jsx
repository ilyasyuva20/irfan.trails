import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaWhatsapp, FaRulerCombined, FaCheckCircle, FaSpinner } from 'react-icons/fa';
import jerseyFront from '../assets/JerseyFront.jpg';
import jerseyBack from '../assets/JerseyBack.jpg';

const JerseySection = () => {
    const [view, setView] = useState('back'); // default to 'back' since name and number go on back
    const [name, setName] = useState('TRAILS');
    const [number, setNumber] = useState('55');
    const textColor = '#FFFFFF';
    const [size, setSize] = useState('M');
    const [quantity, setQuantity] = useState(1);
    const [showSizeChart, setShowSizeChart] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const price = 1099;
    const originalPrice = 1599;

    const handleWhatsAppOrder = () => {
        setIsSubmitting(true);
        setTimeout(() => {
            const formattedName = name.trim().toUpperCase() || 'NOT SPECIFIED';
            const formattedNumber = number.trim() || 'NONE';

            const message = `Hi Trails Moto! I would like to order a Custom Racing Jersey.

*ORDER DETAILS*
• Name: ${formattedName}
• Number: ${formattedNumber}
• Size: ${size}
• Quantity: ${quantity}
• Text Color: White
• Total Amount: ₹${price * quantity}

Please confirm my order and share payment details!`;

            const whatsappUrl = `https://wa.me/+919562584827?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
            setIsSubmitting(false);
        }, 800);
    };

    const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL', '3XL'];

    return (
        <section id="jersey" className="section-padding" style={{ background: 'var(--bg-primary)', position: 'relative' }}>
            {/* Top decorative gradient border */}
            <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '1px',
                background: 'linear-gradient(90deg, transparent, rgba(255,180,0,0.3), transparent)'
            }}></div>

            <div className="container">
                <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        style={{
                            color: 'var(--accent-color)',
                            fontSize: '0.9rem',
                            fontWeight: '600',
                            letterSpacing: '3px',
                            textTransform: 'uppercase',
                            display: 'block',
                            marginBottom: '0.8rem'
                        }}
                    >
                        NEW RELEASE
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)' }}
                    >
                        CUSTOM <span style={{ color: 'var(--accent-color)' }}>RACING</span> JERSEY
                    </motion.h2>
                    <div style={{ width: '80px', height: '4px', background: 'var(--accent-color)', margin: '1.5rem auto' }}></div>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        style={{ color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto', fontSize: '1rem' }}
                    >
                        Gear up like the pros. Customize your official Trails Moto jersey with your personal name and race number.
                    </motion.p>
                </div>

                <div className="responsive-grid" style={{ gridTemplateColumns: '1.1fr 0.9fr', gap: '3.5rem', alignItems: 'start' }}>

                    {/* LEFT COLUMN: INTERACTIVE PREVIEW */}
                    <div className="jersey-preview-col" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>

                        {/* Live Preview Card */}
                        <div style={{
                            background: 'var(--bg-secondary)',
                            borderRadius: '12px',
                            padding: '2rem',
                            border: '1px solid rgba(255,255,255,0.05)',
                            boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            position: 'relative'
                        }}>

                            {/* Perspective Grid Background Effect */}
                            <div style={{
                                position: 'absolute',
                                inset: 0,
                                opacity: 0.03,
                                background: 'radial-gradient(var(--accent-color) 1px, transparent 1px)',
                                backgroundSize: '20px 20px',
                                borderRadius: '12px',
                                pointerEvents: 'none'
                            }}></div>

                            {/* Outer Container with aspect ratio */}
                            <div style={{
                                position: 'relative',
                                width: '100%',
                                maxWidth: '380px',
                                aspectRatio: '1084/1451',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: '8px',
                                overflow: 'hidden',
                                containerType: 'inline-size'
                            }}>
                                <motion.img
                                    key={view}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.3 }}
                                    src={view === 'front' ? jerseyFront : jerseyBack}
                                    alt={`Trails Moto Jersey ${view}`}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'contain',
                                        zIndex: 1
                                    }}
                                />

                                {/* Name & Number Overlay (Only visible on Back View) */}
                                {view === 'back' && (
                                    <>
                                        {/* Red cover patch to hide original Name and Number under the custom text */}
                                        <div style={{
                                            position: 'absolute',
                                            top: '26%',
                                            left: '48%',
                                            transform: 'translateX(-50%)',
                                            width: '22%',
                                            height: '13%',
                                            background: 'linear-gradient(to bottom, #d61e24, #b51317)',
                                            filter: 'blur(10px)',
                                            zIndex: 2,
                                            pointerEvents: 'none'
                                        }}></div>

                                        {/* Jersey Name */}
                                        <div style={{
                                            position: 'absolute',
                                            top: '19.5%',
                                            left: '50%',
                                            transform: 'translateX(-50%)',
                                            fontSize: name.trim().length >= 12 ? '3.2cqw' : name.trim().length >= 10 ? '3.8cqw' : '5.5cqw',
                                            fontWeight: '700',
                                            fontStyle: 'italic',
                                            fontFamily: 'var(--font-family-body)', // Montserrat matches original jersey style
                                            color: textColor,
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.02em',
                                            textAlign: 'center',
                                            width: '56%',
                                            zIndex: 3,
                                            lineHeight: 1.1,
                                            pointerEvents: 'none',
                                            textShadow: textColor === '#000000' ? 'none' : '0 1px 1px rgba(0,0,0,0.15)'
                                        }}>
                                            {name.trim() || 'YOUR NAME'}
                                        </div>

                                        {/* Jersey Number */}
                                        <div style={{
                                            position: 'absolute',
                                            top: '27%',
                                            left: '48%',
                                            transform: 'translateX(-50%)',
                                            fontSize: '15cqw',
                                            fontWeight: '700',
                                            fontStyle: 'italic',
                                            fontFamily: 'var(--font-family-heading)', // Chakra Petch matches the sporty style
                                            color: textColor,
                                            textAlign: 'center',
                                            zIndex: 3,
                                            lineHeight: 0.95,
                                            pointerEvents: 'none',
                                            textShadow: textColor === '#000000' ? 'none' : '0 1px 2px rgba(0,0,0,0.15)'
                                        }}>
                                            {number.trim() || '00'}
                                        </div>
                                    </>
                                )}

                                {/* Badge */}
                                <div style={{
                                    position: 'absolute',
                                    bottom: '10px',
                                    left: '50%',
                                    transform: 'translateX(-50%)',
                                    background: 'rgba(0,0,0,0.7)',
                                    backdropFilter: 'blur(5px)',
                                    color: 'var(--accent-color)',
                                    padding: '4px 12px',
                                    borderRadius: '20px',
                                    fontSize: '0.75rem',
                                    fontWeight: '600',
                                    letterSpacing: '1px',
                                    textTransform: 'uppercase',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    zIndex: 3
                                }}>
                                    {view} VIEW
                                </div>
                            </div>

                            {/* View Toggles */}
                            <div style={{ display: 'flex', gap: '1rem', marginTop: '1.5rem', zIndex: 3 }}>
                                <button
                                    onClick={() => setView('front')}
                                    style={{
                                        padding: '0.6rem 1.5rem',
                                        borderRadius: '6px',
                                        border: '1px solid',
                                        borderColor: view === 'front' ? 'var(--accent-color)' : 'rgba(255,255,255,0.2)',
                                        background: view === 'front' ? 'var(--accent-color)' : 'transparent',
                                        color: view === 'front' ? '#000' : '#fff',
                                        fontFamily: 'var(--font-family-heading)',
                                        fontSize: '0.85rem',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                    }}
                                >
                                    FRONT SIDE
                                </button>
                                <button
                                    onClick={() => setView('back')}
                                    style={{
                                        padding: '0.6rem 1.5rem',
                                        borderRadius: '6px',
                                        border: '1px solid',
                                        borderColor: view === 'back' ? 'var(--accent-color)' : 'rgba(255,255,255,0.2)',
                                        background: view === 'back' ? 'var(--accent-color)' : 'transparent',
                                        color: view === 'back' ? '#000' : '#fff',
                                        fontFamily: 'var(--font-family-heading)',
                                        fontSize: '0.85rem',
                                        fontWeight: '600',
                                        cursor: 'pointer',
                                        transition: 'all 0.3s ease',
                                    }}
                                >
                                    BACK SIDE
                                </button>
                            </div>
                        </div>

                        {/* Product Highlights */}
                        <div style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr 1fr',
                            gap: '1rem'
                        }}>
                            <div style={{
                                background: 'var(--bg-tertiary)',
                                padding: '1rem',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                border: '1px solid rgba(255,255,255,0.03)'
                            }}>
                                <FaCheckCircle style={{ color: 'var(--accent-color)', flexShrink: 0 }} />
                                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Dry-Fit Breathable Fabric</span>
                            </div>
                            <div style={{
                                background: 'var(--bg-tertiary)',
                                padding: '1rem',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                border: '1px solid rgba(255,255,255,0.03)'
                            }}>
                                <FaCheckCircle style={{ color: 'var(--accent-color)', flexShrink: 0 }} />
                                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Vibrant Sublimation Print</span>
                            </div>
                            <div style={{
                                background: 'var(--bg-tertiary)',
                                padding: '1rem',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                border: '1px solid rgba(255,255,255,0.03)'
                            }}>
                                <FaCheckCircle style={{ color: 'var(--accent-color)', flexShrink: 0 }} />
                                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Custom Name & Number</span>
                            </div>
                            <div style={{
                                background: 'var(--bg-tertiary)',
                                padding: '1rem',
                                borderRadius: '8px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '10px',
                                border: '1px solid rgba(255,255,255,0.03)'
                            }}>
                                <FaCheckCircle style={{ color: 'var(--accent-color)', flexShrink: 0 }} />
                                <span style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>Premium Elastic Rib Collar</span>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT COLUMN: CONFIGURATION FORM */}
                    <div className="jersey-form-col" style={{
                        background: 'var(--bg-tertiary)',
                        borderRadius: '12px',
                        padding: '2.5rem 2rem',
                        border: '1px solid rgba(255,255,255,0.05)',
                        boxShadow: '0 20px 40px rgba(0,0,0,0.3)',
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                            <div>
                                <h3 style={{ fontSize: '1.6rem', marginBottom: '0.5rem', fontFamily: 'var(--font-family-heading)' }}>OFFICIAL TRAILS JERSEY</h3>
                                <span style={{
                                    fontSize: '0.8rem',
                                    color: 'var(--text-muted)',
                                    background: 'rgba(255,255,255,0.05)',
                                    padding: '2px 8px',
                                    borderRadius: '4px'
                                }}>
                                    In Stock • Made to Order
                                </span>
                            </div>
                            <div style={{ textAlign: 'right' }}>
                                <div style={{ fontSize: '1.8rem', color: 'var(--accent-color)', fontWeight: '700', fontFamily: 'var(--font-family-heading)' }}>
                                    ₹{price}
                                </div>
                                <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>
                                    ₹{originalPrice}
                                </div>
                                <span style={{ fontSize: '0.75rem', background: '#22c55e', color: '#fff', padding: '2px 6px', borderRadius: '4px', fontWeight: '600' }}>
                                    SAVE 31%
                                </span>
                            </div>
                        </div>

                        <hr style={{ border: 'none', height: '1px', background: 'rgba(255,255,255,0.1)', margin: '1.5rem 0' }} />

                        {/* Customize Fields */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>

                            {/* Name Input */}
                            <div>
                                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '600', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                    Jersey Name (Max 12 Letters)
                                </label>
                                <input
                                    type="text"
                                    maxLength={12}
                                    value={name}
                                    onChange={(e) => {
                                        setName(e.target.value.toUpperCase());
                                        if (view !== 'back') setView('back'); // Switch view to see live customization
                                    }}
                                    placeholder="E.G. IRFAN"
                                    style={{
                                        width: '100%',
                                        padding: '0.8rem 1rem',
                                        background: 'var(--bg-primary)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        borderRadius: '6px',
                                        color: '#fff',
                                        fontSize: '1rem',
                                        fontWeight: '600',
                                        letterSpacing: '1px',
                                        fontFamily: 'var(--font-family-heading)',
                                        outline: 'none',
                                        transition: 'border-color 0.3s ease'
                                    }}
                                />
                            </div>

                            {/* Number Input */}
                            <div>
                                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '600', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                    Racing Number (0 - 99)
                                </label>
                                <input
                                    type="text"
                                    maxLength={2}
                                    value={number}
                                    onChange={(e) => {
                                        const cleanVal = e.target.value.replace(/[^0-9]/g, '');
                                        setNumber(cleanVal);
                                        if (view !== 'back') setView('back');
                                    }}
                                    placeholder="07"
                                    style={{
                                        width: '100%',
                                        padding: '0.8rem 1rem',
                                        background: 'var(--bg-primary)',
                                        border: '1px solid rgba(255,255,255,0.1)',
                                        borderRadius: '6px',
                                        color: '#fff',
                                        fontSize: '1rem',
                                        fontWeight: '600',
                                        fontFamily: 'var(--font-family-heading)',
                                        outline: 'none',
                                        transition: 'border-color 0.3s ease'
                                    }}
                                />
                            </div>

                            {/* Size Selection */}
                            <div>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.5rem' }}>
                                    <label style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                        Select Size
                                    </label>
                                    <button
                                        onClick={() => setShowSizeChart(true)}
                                        style={{
                                            background: 'transparent',
                                            border: 'none',
                                            color: 'var(--accent-color)',
                                            fontSize: '0.8rem',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '5px',
                                            cursor: 'pointer',
                                            textDecoration: 'underline'
                                        }}
                                    >
                                        <FaRulerCombined /> Size Chart
                                    </button>
                                </div>
                                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                                    {sizes.map((s) => (
                                        <button
                                            key={s}
                                            onClick={() => setSize(s)}
                                            style={{
                                                width: '45px',
                                                height: '45px',
                                                display: 'flex',
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                borderRadius: '6px',
                                                background: size === s ? 'var(--accent-color)' : 'var(--bg-primary)',
                                                color: size === s ? '#000' : '#fff',
                                                border: `1px solid ${size === s ? 'var(--accent-color)' : 'rgba(255,255,255,0.1)'}`,
                                                fontWeight: '700',
                                                fontSize: '0.9rem',
                                                cursor: 'pointer',
                                                transition: 'all 0.2s ease',
                                            }}
                                        >
                                            {s}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Quantity Selection */}
                            <div>
                                <label style={{ display: 'block', fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: '600', marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                                    Quantity
                                </label>
                                <div style={{ display: 'flex', alignItems: 'center', width: '120px', background: 'var(--bg-primary)', borderRadius: '6px', border: '1px solid rgba(255,255,255,0.1)' }}>
                                    <button
                                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                        style={{
                                            width: '40px',
                                            height: '40px',
                                            background: 'transparent',
                                            border: 'none',
                                            color: '#fff',
                                            fontSize: '1.2rem',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        -
                                    </button>
                                    <div style={{ flex: 1, textAlign: 'center', fontWeight: '700', color: '#fff' }}>
                                        {quantity}
                                    </div>
                                    <button
                                        onClick={() => setQuantity(Math.min(2, quantity + 1))}
                                        disabled={quantity >= 2}
                                        style={{
                                            width: '40px',
                                            height: '40px',
                                            background: 'transparent',
                                            border: 'none',
                                            color: quantity >= 2 ? 'rgba(255,255,255,0.2)' : '#fff',
                                            fontSize: '1.2rem',
                                            cursor: quantity >= 2 ? 'not-allowed' : 'pointer'
                                        }}
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <motion.button
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                                onClick={handleWhatsAppOrder}
                                disabled={isSubmitting}
                                style={{
                                    width: '100%',
                                    padding: '1rem',
                                    borderRadius: '8px',
                                    border: 'none',
                                    background: 'linear-gradient(135deg, #25D366, #128C7E)',
                                    color: '#fff',
                                    fontSize: '1.1rem',
                                    fontWeight: '700',
                                    fontFamily: 'var(--font-family-heading)',
                                    cursor: 'pointer',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '10px',
                                    boxShadow: '0 8px 24px rgba(37, 211, 102, 0.25)',
                                    marginTop: '1rem',
                                    transition: 'all 0.3s ease'
                                }}
                            >
                                {isSubmitting ? (
                                    <FaSpinner className="spin" />
                                ) : (
                                    <>
                                        <FaWhatsapp size={22} />
                                        ORDER ON WHATSAPP
                                    </>
                                )}
                            </motion.button>

                            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', textAlign: 'center', marginTop: '0.5rem' }}>
                                *Custom printing takes 2-3 business days. Free shipping across India.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Size Chart Modal */}
            <AnimatePresence>
                {showSizeChart && (
                    <div style={{
                        position: 'fixed',
                        inset: 0,
                        backgroundColor: 'rgba(0,0,0,0.85)',
                        backdropFilter: 'blur(8px)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 9999,
                        padding: '1.5rem'
                    }}>
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            style={{
                                background: 'var(--bg-secondary)',
                                width: '100%',
                                maxWidth: '500px',
                                borderRadius: '12px',
                                border: '1px solid rgba(255,255,255,0.1)',
                                overflow: 'hidden'
                            }}
                        >
                            {/* Modal Header */}
                            <div style={{
                                padding: '1.5rem',
                                borderBottom: '1px solid rgba(255,255,255,0.1)',
                                display: 'flex',
                                justifyContent: 'space-between',
                                alignItems: 'center',
                                background: 'rgba(0,0,0,0.1)'
                            }}>
                                <h4 style={{ margin: 0, color: 'var(--accent-color)', fontSize: '1.2rem' }}>JERSEY SIZE CHART</h4>
                                <button
                                    onClick={() => setShowSizeChart(false)}
                                    style={{
                                        background: 'transparent',
                                        border: 'none',
                                        color: '#fff',
                                        fontSize: '1.5rem',
                                        cursor: 'pointer',
                                        lineHeight: 1
                                    }}
                                >
                                    &times;
                                </button>
                            </div>

                            {/* Modal Body */}
                            <div style={{ padding: '2rem 1.5rem' }}>
                                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
                                    <thead>
                                        <tr style={{ borderBottom: '2px solid rgba(255,255,255,0.2)', color: 'var(--text-primary)' }}>
                                            <th style={{ padding: '0.8rem' }}>Size</th>
                                            <th style={{ padding: '0.8rem' }}>Chest (Inches)</th>
                                            <th style={{ padding: '0.8rem' }}>Length (Inches)</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {[
                                            { size: 'XS', chest: '36', length: '26' },
                                            { size: 'S', chest: '38', length: '27' },
                                            { size: 'M', chest: '40', length: '28' },
                                            { size: 'L', chest: '42', length: '29' },
                                            { size: 'XL', chest: '44', length: '30' },
                                            { size: 'XXL', chest: '46', length: '31' },
                                            { size: '3XL', chest: '48', length: '32' }
                                        ].map((row, idx) => (
                                            <tr
                                                key={row.size}
                                                style={{
                                                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                                                    background: idx % 2 === 0 ? 'rgba(255,255,255,0.01)' : 'transparent',
                                                    color: 'var(--text-secondary)'
                                                }}
                                            >
                                                <td style={{ padding: '0.8rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>{row.size}</td>
                                                <td style={{ padding: '0.8rem' }}>{row.chest}"</td>
                                                <td style={{ padding: '0.8rem' }}>{row.length}"</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '1.5rem', textAlign: 'center' }}>
                                    *Measure around the fullest part of your chest. If you are between sizes, we recommend sizing up for a relaxed fit.
                                </p>
                            </div>

                            {/* Modal Footer */}
                            <div style={{
                                padding: '1.2rem 1.5rem',
                                borderTop: '1px solid rgba(255,255,255,0.1)',
                                textAlign: 'right',
                                background: 'rgba(0,0,0,0.1)'
                            }}>
                                <button
                                    onClick={() => setShowSizeChart(false)}
                                    style={{
                                        padding: '0.5rem 1.5rem',
                                        background: 'var(--accent-color)',
                                        color: '#000',
                                        border: 'none',
                                        borderRadius: '4px',
                                        fontWeight: '600',
                                        cursor: 'pointer'
                                    }}
                                >
                                    CLOSE
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <style>{`
                @keyframes spin {
                    from { transform: rotate(0deg); }
                    to { transform: rotate(360deg); }
                }
                .spin {
                    animation: spin 1s linear infinite;
                }
                @media (max-width: 768px) {
                    .jersey-preview-col {
                        order: 1;
                    }
                    .jersey-form-col {
                        order: 2;
                    }
                }
            `}</style>
        </section>
    );
};

export default JerseySection;
