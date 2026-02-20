import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaTimes, FaPlayCircle, FaTag } from 'react-icons/fa';

// Mock data for events
const eventsData = [
    {
        id: 1,
        title: "Off-Road Masterclass",
        type: "upcoming",
        date: "March 15, 2026",
        time: "09:00 AM - 05:00 PM",
        venue: "Wayanad Trails Academy",
        price: "₹1,500",
        registrationUrl: "https://forms.gle/your-google-form-url-1",
        poster: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800&q=80",
        description: "Join our expert-led off-road masterclass designed for all skill levels. Master the art of balancing, throttle control, and technical climbs.",
        media: [
            { type: 'image', url: 'https://images.unsplash.com/photo-1591637333184-19aa84b3e01f?w=800&q=80' },
            { type: 'image', url: 'https://images.unsplash.com/photo-1625043484550-df60256f6ea5?w=800&q=80' }
        ]
    },
    {
        id: 2,
        title: "Himalayan Expedition 2026",
        type: "upcoming",
        date: "May 10 - May 25, 2026",
        time: "All Day",
        venue: "Leh-Ladakh Region",
        price: "₹45,000",
        registrationUrl: "https://forms.gle/your-google-form-url-2",
        poster: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=800&q=80",
        description: "A 15-day soul-stirring journey through the highest motorable passes in the world. Experience the raw beauty of the Himalayas.",
        media: [
            { type: 'image', url: 'https://images.unsplash.com/photo-1547024858-a0e5b7a5a801?w=800&q=80' }
        ]
    },
    {
        id: 3,
        title: "Monsoon Mud Rush",
        type: "completed",
        date: "August 20, 2025",
        time: "10:00 AM",
        venue: "Coorg Estate Trails",
        price: "₹2,000",
        poster: "https://images.unsplash.com/photo-1609102026400-3c0ca378e470?w=800&q=80",
        description: "Our annual rain-soaked adventure through the coffee plantations of Coorg. A true test of grit and traction.",
        media: [
            { type: 'image', url: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&q=80' },
            { type: 'image', url: 'https://images.unsplash.com/photo-1517502474097-f9b30659dadb?w=800&q=80' }
        ]
    }
];

const Events = () => {
    const [filter, setFilter] = useState('Upcoming');
    const [selectedEvent, setSelectedEvent] = useState(null);

    const filteredEvents = eventsData.filter(event => event.type === filter.toLowerCase());

    return (
        <section id="events" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '3rem' }}
                >
                    EVENTS
                </motion.h2>

                {/* Filters */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'center',
                    gap: '0.8rem',
                    marginBottom: '3rem',
                    flexWrap: 'wrap'
                }}>
                    {['Upcoming', 'Completed'].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            style={{
                                background: filter === cat ? 'var(--accent-color)' : 'transparent',
                                color: filter === cat ? '#000' : 'var(--text-secondary)',
                                border: '1px solid var(--accent-color)',
                                padding: '0.5rem 1.5rem',
                                cursor: 'pointer',
                                textTransform: 'uppercase',
                                fontStyle: 'italic',
                                fontWeight: 'bold',
                                borderRadius: '4px',
                                transition: 'all 0.3s ease',
                                fontSize: '0.9rem'
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Events Grid */}
                <motion.div
                    layout
                    className="responsive-grid"
                    style={{
                        gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
                        gap: '2rem'
                    }}
                >
                    <AnimatePresence>
                        {filteredEvents.map((event) => (
                            <EventCard
                                key={event.id}
                                event={event}
                                onClick={() => setSelectedEvent(event)}
                            />
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            {/* Event Details Modal */}
            <AnimatePresence>
                {selectedEvent && (
                    <EventModal
                        event={selectedEvent}
                        onClose={() => setSelectedEvent(null)}
                    />
                )}
            </AnimatePresence>
        </section>
    );
};

const EventCard = ({ event, onClick }) => (
    <motion.div
        layout
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        whileHover={{ y: -10 }}
        onClick={onClick}
        style={{
            background: 'var(--bg-tertiary)',
            borderRadius: '8px',
            overflow: 'hidden',
            cursor: 'pointer',
            border: '1px solid rgba(255,255,255,0.05)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.2)'
        }}
    >
        <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
            <img
                src={event.poster}
                alt={event.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{
                position: 'absolute',
                top: '12px',
                right: '12px',
                padding: '0.3rem 0.8rem',
                borderRadius: '20px',
                fontSize: '0.75rem',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                background: event.type === 'upcoming' ? 'var(--accent-color)' : 'var(--text-muted)',
                color: event.type === 'upcoming' ? '#000' : '#fff'
            }}>
                {event.type}
            </div>
        </div>
        <div style={{ padding: '1.5rem' }}>
            <h3 style={{ fontSize: '1.3rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{event.title}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <FaCalendarAlt color="var(--accent-color)" /> {event.date}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <FaMapMarkerAlt color="var(--accent-color)" /> {event.venue}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>
                    <FaTag color="var(--accent-color)" /> {event.price}
                </span>
            </div>
        </div>
    </motion.div>
);

const EventModal = ({ event, onClose }) => (
    <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'rgba(0,0,0,0.95)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
            padding: '1rem'
        }}
        onClick={onClose}
    >
        <motion.div
            initial={{ scale: 0.9, y: 50 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 50 }}
            style={{
                background: 'var(--bg-secondary)',
                width: '100%',
                maxWidth: '900px',
                maxHeight: '90vh',
                borderRadius: '12px',
                overflowY: 'auto',
                position: 'relative',
                padding: 'clamp(1.5rem, 5vw, 3rem)'
            }}
            onClick={(e) => e.stopPropagation()}
        >
            <button
                onClick={onClose}
                style={{
                    position: 'absolute',
                    top: '15px',
                    right: '15px',
                    background: 'rgba(0,0,0,0.5)',
                    border: 'none',
                    color: '#fff',
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    cursor: 'pointer',
                    zIndex: 10
                }}
            >
                <FaTimes />
            </button>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem' }}>
                <div>
                    <img
                        src={event.poster}
                        alt={event.title}
                        style={{ width: '100%', borderRadius: '8px', marginBottom: '1.5rem' }}
                    />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', padding: '1.2rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <FaCalendarAlt color="var(--accent-color)" />
                            <div>
                                <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>DATE</p>
                                <p style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{event.date}</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <FaClock color="var(--accent-color)" />
                            <div>
                                <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>TIME</p>
                                <p style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{event.time}</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <FaMapMarkerAlt color="var(--accent-color)" />
                            <div>
                                <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>VENUE</p>
                                <p style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>{event.venue}</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <FaTag color="var(--accent-color)" />
                            <div>
                                <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>REGISTRATION FEE</p>
                                <p style={{ fontWeight: 'bold', fontSize: '0.9rem', color: 'var(--accent-color)' }}>{event.price}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '1rem', color: 'var(--text-primary)' }}>{event.title}</h2>
                    <p style={{ lineHeight: '1.7', color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '0.95rem' }}>{event.description}</p>

                    {event.type === 'upcoming' && (
                        <motion.a
                            href={event.registrationUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                            style={{
                                display: 'inline-block',
                                background: 'var(--accent-color)',
                                color: '#000',
                                padding: '1rem 2.5rem',
                                borderRadius: '4px',
                                fontWeight: 'bold',
                                textDecoration: 'none',
                                textTransform: 'uppercase',
                                letterSpacing: '2px',
                                marginBottom: '2.5rem',
                                boxShadow: '0 10px 20px rgba(255,180,0,0.2)'
                            }}
                        >
                            Participate Now
                        </motion.a>
                    )}

                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem', fontSize: '1rem' }}>EVENT GALLERY</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.8rem' }}>
                        {event.media.map((item, idx) => (
                            <div key={idx} style={{ position: 'relative', borderRadius: '4px', overflow: 'hidden', height: 'clamp(100px, 15vw, 150px)' }}>
                                <img
                                    src={item.url}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    alt={`Gallery ${idx}`}
                                />
                                {item.type === 'video' && (
                                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff' }}>
                                        <FaPlayCircle size={25} />
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    </motion.div>
);

export default Events;
