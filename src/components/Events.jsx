import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaTimes, FaPlayCircle } from 'react-icons/fa';

// Mock data for events
const eventsData = [
    {
        id: 1,
        title: "Off-Road Masterclass",
        type: "upcoming",
        date: "March 15, 2026",
        time: "09:00 AM - 05:00 PM",
        venue: "Wayanad Trails Academy",
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
        poster: "https://images.unsplash.com/photo-1609102026400-3c0ca378e470?w=800&q=80",
        description: "Our annual rain-soaked adventure through the coffee plantations of Coorg. A true test of grit and traction.",
        media: [
            { type: 'image', url: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?w=800&q=80' },
            { type: 'image', url: 'https://images.unsplash.com/photo-1517502474097-f9b30659dadb?w=800&q=80' }
        ]
    }
];

const Events = () => {
    const [filter, setFilter] = useState('All');
    const [selectedEvent, setSelectedEvent] = useState(null);

    const filteredEvents = filter === 'All'
        ? eventsData
        : eventsData.filter(event => event.type === filter.toLowerCase());

    return (
        <section id="events" style={{ padding: '8rem 2rem', background: 'var(--bg-primary)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '3rem' }}
                >
                    EVENTS
                </motion.h2>

                {/* Filters */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '4rem' }}>
                    {['All', 'Upcoming', 'Completed'].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            style={{
                                background: filter === cat ? 'var(--accent-color)' : 'transparent',
                                color: filter === cat ? '#000' : 'var(--text-secondary)',
                                border: '1px solid var(--accent-color)',
                                padding: '0.6rem 2rem',
                                cursor: 'pointer',
                                textTransform: 'uppercase',
                                fontWeight: 'bold',
                                borderRadius: '4px',
                                transition: 'all 0.3s ease',
                            }}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Events Grid */}
                <motion.div
                    layout
                    style={{
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
                        gap: '2.5rem'
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
        <div style={{ position: 'relative', height: '250px', overflow: 'hidden' }}>
            <img
                src={event.poster}
                alt={event.title}
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            <div style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                padding: '0.4rem 1rem',
                borderRadius: '20px',
                fontSize: '0.8rem',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                background: event.type === 'upcoming' ? 'var(--accent-color)' : 'var(--text-muted)',
                color: event.type === 'upcoming' ? '#000' : '#fff'
            }}>
                {event.type}
            </div>
        </div>
        <div style={{ padding: '2rem' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{event.title}</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <FaCalendarAlt color="var(--accent-color)" /> {event.date}
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                    <FaMapMarkerAlt color="var(--accent-color)" /> {event.venue}
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
            background: 'rgba(0,0,0,0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 2000,
            padding: '2rem'
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
                padding: '3rem'
            }}
            onClick={(e) => e.stopPropagation()}
        >
            <button
                onClick={onClose}
                style={{
                    position: 'absolute',
                    top: '20px',
                    right: '20px',
                    background: 'none',
                    border: 'none',
                    color: '#fff',
                    fontSize: '1.5rem',
                    cursor: 'pointer'
                }}
            >
                <FaTimes />
            </button>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem' }}>
                <div>
                    <img
                        src={event.poster}
                        alt={event.title}
                        style={{ width: '100%', borderRadius: '8px', marginBottom: '2rem' }}
                    />
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', padding: '1.5rem', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <FaCalendarAlt color="var(--accent-color)" />
                            <div>
                                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>DATE</p>
                                <p style={{ fontWeight: 'bold' }}>{event.date}</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <FaClock color="var(--accent-color)" />
                            <div>
                                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>TIME</p>
                                <p style={{ fontWeight: 'bold' }}>{event.time}</p>
                            </div>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <FaMapMarkerAlt color="var(--accent-color)" />
                            <div>
                                <p style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>VENUE</p>
                                <p style={{ fontWeight: 'bold' }}>{event.venue}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: 'var(--text-primary)' }}>{event.title}</h2>
                    <p style={{ lineHeight: '1.8', color: 'var(--text-secondary)', marginBottom: '2rem' }}>{event.description}</p>

                    <h4 style={{ color: 'var(--text-primary)', marginBottom: '1rem' }}>EVENT GALLERY</h4>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                        {event.media.map((item, idx) => (
                            <div key={idx} style={{ position: 'relative', borderRadius: '4px', overflow: 'hidden', height: '150px' }}>
                                <img
                                    src={item.url}
                                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                                    alt={`Gallery ${idx}`}
                                />
                                {item.type === 'video' && (
                                    <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: '#fff' }}>
                                        <FaPlayCircle size={30} />
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
