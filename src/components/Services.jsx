import React from 'react';
import { motion } from 'framer-motion';
import { FaMotorcycle, FaTools, FaRoute } from 'react-icons/fa';

const services = [
    {
        icon: <FaMotorcycle size={40} />,
        title: "Adventure Motorcyclist",
        description: "Professional adventure riding experiences tailored for thrill-seekers."
    },
    {
        icon: <FaRoute size={40} />,
        title: "Motorsports Academy",
        description: "Comprehensive off-road motorcycle riding training from grass-root levels to advanced techniques and Conducting a race event."
    },
    {
        icon: <FaTools size={40} />,
        title: "Trails Moto Workshop",
        description: "We offer comprehensive maintenance, from general commuter bike servicing to expert adventure bike tuning and repairs."
    }
];

const Services = () => {
    return (
        <section id="services" className="section-padding" style={{ background: 'var(--bg-primary)' }}>
            <div className="container">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '4rem' }}
                >
                    OUR <span style={{ color: 'var(--accent-color)' }}>EXPERTISE</span>
                </motion.h2>

                <div className="responsive-grid" style={{ gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            style={{
                                background: 'var(--bg-tertiary)',
                                padding: '2.5rem 1.5rem',
                                borderRadius: '4px',
                                border: '1px solid rgba(255,255,255,0.05)',
                                textAlign: 'center',
                                transition: 'transform 0.3s ease',
                            }}
                            whileHover={{ y: -10, border: '1px solid var(--accent-color)' }}
                        >
                            <div style={{ color: 'var(--accent-color)', marginBottom: '1.2rem' }}>
                                {service.icon}
                            </div>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '1rem' }}>{service.title}</h3>
                            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
