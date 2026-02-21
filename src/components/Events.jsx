import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCalendarAlt, FaClock, FaMapMarkerAlt, FaTimes, FaPlayCircle, FaTag, FaTrophy } from 'react-icons/fa';

// Mock data for events
const eventsData = [
    {
        id: 1,
        title: "Trails Moto SPEED FEST 2026",
        type: "upcoming",
        date: "March 08, 2026",
        venue: "Wolf Trails Off-Road Track, Kochi",
        mapUrl: "https://www.google.com/maps?client=safari&hs=Lj39&sca_esv=7a144a3578fe712f&hl=en-us&kgmid=/g/11cr_b180d&shem=rimspc,rimspiosc,shrtsdl&shndl=30&kgs=e96cd0b3e8a87a92&um=1&ie=UTF-8&fb=1&gl=in&sa=X&geocode=KUF2JpAVdAg7MblJPOFVWEmK&daddr=W95P%2BCFJ,+Manakkathazam+road,off+nelsonmandela+road,,+Manakunnam,+Kerala+682314",
        registrationUrl: "https://motoXindia.com",
        poster: "/assets/upcomming1.jpeg",
        prizeMoney: "1st ₹10000, 2nd ₹5000, 3rd ₹3000",
        description: "Join our expert-led off-road masterclass designed for all skill levels. Master the art of balancing, throttle control, and technical climbs.",
        media: [
            { type: 'image', url: '/assets/upcomming1.jpeg' },
            { type: 'image', url: '/assets/upcomming2.jpeg' }
        ]
    },
    {
        id: 2,
        title: "Leh-Ladakh Expedition",
        type: "upcoming",
        date: "Coming Soon",
        venue: "Coming Soon",
        poster: "/assets/upcommingnew.jpeg",
        description: "Conquer the world's highest motorable roads and feel the thrill of the Himalayas.",
        media: [
            { type: 'image', url: '/assets/upcommingnew.jpeg' }
        ]
    },
    {
        id: 3,
        title: "Ultimate Enduro Challenge",
        type: "completed",
        date: "June 29, 2025",
        venue: "Dirt Creed Enduro Park, Kalady,Kochi",
        poster: "/assets/completed1.jpeg",
        description: "Our annual rain-soaked adventure through the coffee plantations of Coorg. A true test of grit and traction.",
        media: [
            { type: 'image', url: '/assets/completed1.jpeg' },
            { type: 'image', url: '/assets/completed2.jpeg' },
            { type: 'image', url: '/assets/completed3.jpeg' },
            { type: 'image', url: '/assets/completed4.jpeg' },
            { type: 'image', url: '/assets/completed5.jpeg' },
            { type: 'image', url: '/assets/completed6.jpeg' },
            { type: 'image', url: '/assets/completed7.jpeg' },
            { type: 'image', url: '/assets/completed8.jpeg' },
            { type: 'image', url: '/assets/completed9.jpeg' },
            { type: 'image', url: '/assets/completed10.jpeg' },
            { type: 'image', url: '/assets/completed11.jpeg' }
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
        <div style={{ position: 'relative', height: '350px', backgroundColor: 'var(--bg-primary)', overflow: 'hidden' }}>
            <img
                src={event.poster}
                alt={event.title}
                style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '10px' }}
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
                    <FaMapMarkerAlt color="var(--accent-color)" />
                    {event.mapUrl ? (
                        <a href={event.mapUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                            {event.venue}
                        </a>
                    ) : (
                        event.venue
                    )}
                </span>
                {event.price && (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>
                        <FaTag color="var(--accent-color)" /> {event.price}
                    </span>
                )}
                {event.prizeMoney && (
                    <span style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontWeight: 'bold', color: 'var(--text-primary)' }}>
                        <FaTrophy color="var(--accent-color)" /> {event.prizeMoney}
                    </span>
                )}
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
                        style={{ width: '100%', maxHeight: '450px', objectFit: 'contain', borderRadius: '8px', marginBottom: '1.5rem', backgroundColor: 'var(--bg-primary)', padding: '10px' }}
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
                            <FaMapMarkerAlt color="var(--accent-color)" />
                            <div>
                                <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>VENUE</p>
                                <p style={{ fontWeight: 'bold', fontSize: '0.9rem' }}>
                                    {event.mapUrl ? (
                                        <a href={event.mapUrl} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'underline' }}>
                                            {event.venue}
                                        </a>
                                    ) : (
                                        event.venue
                                    )}
                                </p>
                            </div>
                        </div>
                        {event.prizeMoney && (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <FaTrophy color="var(--accent-color)" />
                                <div>
                                    <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>PRIZE MONEY</p>
                                    <p style={{ fontWeight: 'bold', fontSize: '0.9rem', color: 'var(--accent-color)' }}>{event.prizeMoney}</p>
                                </div>
                            </div>
                        )}
                        {event.price && (
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                                <FaTag color="var(--accent-color)" />
                                <div>
                                    <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>REGISTRATION FEE</p>
                                    <p style={{ fontWeight: 'bold', fontSize: '0.9rem', color: 'var(--accent-color)' }}>{event.price}</p>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                <div>
                    <h2 style={{ fontSize: 'clamp(1.8rem, 4vw, 2.5rem)', marginBottom: '1rem', color: 'var(--text-primary)' }}>{event.title}</h2>
                    <p style={{ lineHeight: '1.7', color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '0.95rem' }}>{event.description}</p>

                    {event.type === 'upcoming' && (
                        <motion.a
                            href={event.registrationUrl || '#'}
                            target={event.registrationUrl ? "_blank" : "_self"}
                            rel={event.registrationUrl ? "noopener noreferrer" : ""}
                            whileHover={event.registrationUrl ? { scale: 1.02 } : {}}
                            whileTap={event.registrationUrl ? { scale: 0.98 } : {}}
                            onClick={(e) => {
                                if (!event.registrationUrl) e.preventDefault();
                            }}
                            style={{
                                display: 'inline-block',
                                background: event.registrationUrl ? 'var(--accent-color)' : 'var(--text-muted)',
                                color: event.registrationUrl ? '#000' : 'var(--bg-secondary)',
                                padding: '1rem 2.5rem',
                                borderRadius: '4px',
                                fontWeight: 'bold',
                                textDecoration: 'none',
                                textTransform: 'uppercase',
                                letterSpacing: '2px',
                                marginBottom: '2.5rem',
                                boxShadow: event.registrationUrl ? '0 10px 20px rgba(255,180,0,0.2)' : 'none',
                                cursor: event.registrationUrl ? 'pointer' : 'not-allowed',
                                opacity: event.registrationUrl ? 1 : 0.7
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
                                    style={{ width: '100%', height: '100%', objectFit: 'contain', backgroundColor: 'var(--bg-primary)', padding: '5px' }}
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
