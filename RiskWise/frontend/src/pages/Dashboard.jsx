import React from 'react';
import { Play, Award, Flame, ChevronRight, Lock } from 'lucide-react';
import { modules, userProgress } from '../data/modules';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    // Use mock data
    const nextModuleId = 1; // Logic to determine next module based on progress
    const nextModule = modules.find(m => m.id === nextModuleId);

    return (
        <div className="fade-in">
            {/* Header Stats */}
            <h2 style={{ marginBottom: '24px', fontSize: '1.5rem' }}>
                Hello, <span className="text-gradient">Future Investor</span> 👋
            </h2>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '32px' }}>
                <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Award color="var(--warning)" size={32} />
                    <div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>{userProgress.xp}</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>XP Earned</div>
                    </div>
                </div>
                <div className="glass-card" style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <Flame color="var(--danger)" size={32} />
                    <div>
                        <div style={{ fontSize: '1.5rem', fontWeight: 700 }}>{userProgress.streak}</div>
                        <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Day Streak</div>
                    </div>
                </div>
            </div>

            {/* Risk Profile Card */}
            <div className="glass-card" style={{
                marginBottom: '32px',
                background: 'linear-gradient(135deg, rgba(255, 0, 85, 0.1), rgba(0, 0, 0, 0))',
                border: '1px solid rgba(255, 0, 85, 0.3)',
                display: 'flex', justifyContent: 'space-between', alignItems: 'center'
            }}>
                <div>
                    <h3 style={{ fontSize: '1.2rem', marginBottom: '4px' }}>Know Your Risk Profile</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Discover your investment personality.</p>
                </div>
                <Link to="/risk-profile">
                    <button className="btn-primary" style={{ padding: '8px 16px', fontSize: '0.9rem' }}>Check Now</button>
                </Link>
            </div>

            {/* Continue Learning */}
            <h3 style={{ marginBottom: '16px' }}>Continue Learning</h3>
            {nextModule && (
                <div className="glass-card" style={{
                    marginBottom: '32px',
                    background: 'linear-gradient(135deg, rgba(0, 229, 255, 0.1), rgba(112, 0, 255, 0.1))',
                    border: '1px solid var(--primary-glow)'
                }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
                        <div>
                            <div style={{ textTransform: 'uppercase', fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 700, marginBottom: '4px' }}>
                                Module {nextModule.id}
                            </div>
                            <h3 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>{nextModule.title}</h3>
                            <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>{nextModule.desc}</p>
                        </div>
                        <div style={{
                            background: 'var(--primary)',
                            borderRadius: '50%', width: '40px', height: '40px',
                            display: 'flex', alignItems: 'center', justifyContent: 'center',
                            boxShadow: 'var(--shadow-glow)'
                        }}>
                            <Play fill="black" stroke="none" size={16} />
                        </div>
                    </div>

                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.85rem', color: 'var(--text-muted)' }}>
                        <span>{nextModule.duration}</span>
                        <span>•</span>
                        <span>Video + Quiz</span>
                    </div>

                    <Link to={`/learn/${nextModule.id}`} style={{ display: 'block' }}>
                        <button className="btn-primary" style={{ width: '100%', marginTop: '16px' }}>Start Lesson</button>
                    </Link>
                </div>
            )}

            {/* All Modules */}
            <h3 style={{ marginBottom: '16px' }}>All Modules</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {modules.map(m => {
                    const isLocked = m.id > nextModuleId + 2; // Simulate locking logic
                    return (
                        <div key={m.id} className="glass-card" style={{
                            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                            opacity: isLocked ? 0.5 : 1
                        }}>
                            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                                <div style={{
                                    width: '40px', height: '40px', borderRadius: '8px',
                                    background: 'rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontSize: '1.2rem', fontWeight: 700, color: 'rgba(255,255,255,0.2)'
                                }}>
                                    {m.id}
                                </div>
                                <div>
                                    <div style={{ fontWeight: 600 }}>{m.title}</div>
                                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{m.duration}</div>
                                </div>
                            </div>
                            {isLocked ? <Lock size={20} color="var(--text-muted)" /> : <ChevronRight size={20} color="var(--primary)" />}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default Dashboard;
