import React from 'react';
import { ShieldCheck, User } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { Home, List, PieChart } from 'lucide-react';

const Layout = ({ children }) => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;

    return (
        <div className="layout">
            {/* Header */}
            <header style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '16px 20px',
                position: 'sticky',
                top: 0,
                zIndex: 100,
                backgroundColor: 'rgba(10, 10, 15, 0.95)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid rgba(255,255,255,0.05)'
            }}>
                <Link to="/dashboard" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <ShieldCheck size={24} color="var(--primary)" />
                    <h1 style={{ fontSize: '1.2rem', fontWeight: 700, letterSpacing: '0.5px' }} className="text-gradient">
                        RiskWise
                    </h1>
                </Link>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <User size={18} color="white" />
                </div>
            </header>

            {/* Main Content */}
            <main style={{ padding: '20px', paddingBottom: '100px', flex: 1, position: 'relative' }}>
                {/* Background Glow Effects */}
                <div style={{
                    position: 'absolute', top: '-10%', left: '-10%', width: '300px', height: '300px',
                    background: 'var(--primary)', filter: 'blur(150px)', opacity: 0.15, pointerEvents: 'none', zIndex: -1
                }} />
                <div style={{
                    position: 'absolute', bottom: '10%', right: '-5%', width: '250px', height: '250px',
                    background: 'var(--secondary)', filter: 'blur(150px)', opacity: 0.15, pointerEvents: 'none', zIndex: -1
                }} />

                {children}
            </main>

            {/* Bottom Navigation */}
            <nav style={{
                position: 'fixed',
                bottom: 0, left: 0, right: 0,
                backgroundColor: '#16161e',
                borderTop: '1px solid rgba(255,255,255,0.1)',
                display: 'flex', justifyContent: 'space-around', alignItems: 'center',
                padding: '12px 0',
                zIndex: 1000,
                boxShadow: '0 -10px 40px rgba(0,0,0,0.5)'
            }}>
                <Link to="/dashboard" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: isActive('/dashboard') ? 'var(--primary)' : 'var(--text-muted)' }}>
                    <PieChart size={24} />
                    <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>Analysis</span>
                </Link>

                <Link to="/investments" style={{ textDecoration: 'none', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '4px', color: isActive('/investments') ? 'var(--primary)' : 'var(--text-muted)' }}>
                    <List size={24} />
                    <span style={{ fontSize: '0.75rem', fontWeight: 600 }}>Watchlist</span>
                </Link>
            </nav>
        </div>
    );
};

export default Layout;
