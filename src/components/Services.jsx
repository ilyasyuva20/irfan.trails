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
        description: "Comprehensive off-road motorcycle riding training from grass-root levels to advanced techniques."
    },
    {
        icon: <FaTools size={40} />,
        title: "Trails Moto Workshop",
        description: "Founder @trails.moto. Specialized workshop for adventure and off-road bikes."
    }
];

const Services = () => {
    return (
        <section id="services" style={{ padding: '8rem 2rem', background: 'var(--bg-primary)' }}>
            <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    style={{ textAlign: 'center', fontSize: '3rem', marginBottom: '4rem' }}
                >
                    OUR <span style={{ color: 'var(--accent-color)' }}>EXPERTISE</span>
                </motion.h2>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            style={{
                                background: 'var(--bg-tertiary)',
                                padding: '3rem 2rem',
                                borderRadius: '4px',
                                border: '1px solid rgba(255,255,255,0.05)',
                                textAlign: 'center',
                                transition: 'transform 0.3s ease',
                            }}
                            whileHover={{ y: -10, border: '1px solid var(--accent-color)' }}
                        >
                            <div style={{ color: 'var(--accent-color)', marginBottom: '1.5rem' }}>
                                {service.icon}
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{service.title}</h3>
                            <p style={{ color: 'var(--text-secondary)' }}>{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
