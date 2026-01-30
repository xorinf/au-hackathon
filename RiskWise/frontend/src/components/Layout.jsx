import React from 'react';
import { ShieldCheck, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Layout = ({ children }) => {
    return (
        <div className="layout">
            {/* Header */}
            <header style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '20px 24px',
                position: 'sticky',
                top: 0,
                zIndex: 100,
                backgroundColor: 'rgba(10, 10, 15, 0.8)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid rgba(255,255,255,0.05)'
            }}>
                <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <ShieldCheck size={28} color="var(--primary)" />
                    <h1 style={{ fontSize: '1.2rem', fontWeight: 700, letterSpacing: '0.5px' }} className="text-gradient">
                        RiskWise
                    </h1>
                </Link>
                <div style={{ display: 'flex', gap: '16px' }}>
                    <User size={24} color="white" />
                </div>
            </header>

            {/* Main Content */}
            <main style={{ padding: '24px', flex: 1, position: 'relative' }}>
                {/* Background Glow Effects */}
                <div style={{
                    position: 'absolute',
                    top: '-10%',
                    left: '-10%',
                    width: '300px',
                    height: '300px',
                    background: 'var(--primary)',
                    filter: 'blur(150px)',
                    opacity: 0.15,
                    pointerEvents: 'none',
                    zIndex: -1
                }} />

                <div style={{
                    position: 'absolute',
                    bottom: '10%',
                    right: '-5%',
                    width: '250px',
                    height: '250px',
                    background: 'var(--secondary)',
                    filter: 'blur(150px)',
                    opacity: 0.15,
                    pointerEvents: 'none',
                    zIndex: -1
                }} />

                {children}
            </main>
        </div>
    );
};

export default Layout;
