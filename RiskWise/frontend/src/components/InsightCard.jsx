import React from 'react';
import { AlertCircle, TrendingUp, Info } from 'lucide-react';

const InsightCard = ({ insight }) => {
    const getStyle = (type) => {
        switch (type) {
            case 'critical': return { color: 'var(--danger)', bg: 'rgba(255, 0, 85, 0.1)', border: 'var(--danger)' };
            case 'warning': return { color: 'var(--warning)', bg: 'rgba(255, 184, 0, 0.1)', border: 'var(--warning)' };
            default: return { color: 'var(--text-muted)', bg: 'rgba(255,255,255,0.05)', border: 'rgba(255,255,255,0.1)' };
        }
    };

    const style = getStyle(insight.type);

    return (
        <div className="glass-card" style={{ borderLeft: `4px solid ${style.border}`, position: 'relative' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    {insight.type === 'critical' ? <AlertCircle color={style.color} size={20} /> : <Info color={style.color} size={20} />}
                    <span style={{ fontSize: '0.8rem', textTransform: 'uppercase', fontWeight: 700, color: style.color }}>
                        {insight.impact}
                    </span>
                </div>
            </div>

            <h3 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{insight.title}</h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem' }}>{insight.desc}</p>
        </div>
    );
};

export default InsightCard;
