import React from 'react';
import { Gauge } from 'lucide-react';

const RiskWidget = ({ score, label }) => {
    // Score 0-100 (Safe -> Risky)
    const getColor = (s) => s > 70 ? 'var(--danger)' : s > 40 ? 'var(--warning)' : 'var(--success)';

    return (
        <div className="glass-card" style={{
            display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            background: 'linear-gradient(90deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)'
        }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <div style={{
                    width: '60px', height: '60px', borderRadius: '50%',
                    border: `4px solid ${getColor(score)}`,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    boxShadow: `0 0 15px ${getColor(score)}`
                }}>
                    <Gauge size={24} color={getColor(score)} />
                </div>
                <div>
                    <div style={{ fontSize: '0.8rem', textTransform: 'uppercase', color: 'var(--text-muted)', letterSpacing: '1px' }}>
                        Portfolio Risk Meter
                    </div>
                    <div style={{ fontSize: '1.4rem', fontWeight: 700 }}>
                        {label}
                    </div>
                </div>
            </div>

            <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '2.5rem', fontWeight: 700, lineHeight: 1, color: getColor(score) }}>
                    {score}
                </div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>/ 100 Risk Score</div>
            </div>
        </div>
    );
};

export default RiskWidget;
