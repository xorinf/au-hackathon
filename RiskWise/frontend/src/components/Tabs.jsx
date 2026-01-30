import React from 'react';

const Tabs = ({ tabs, activeTab, onTabChange }) => {
    return (
        <div style={{ display: 'flex', gap: '8px', overflowX: 'auto', paddingBottom: '12px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
            {tabs.map(tab => (
                <button
                    key={tab.id}
                    onClick={() => onTabChange(tab.id)}
                    style={{
                        padding: '8px 16px',
                        borderRadius: '20px',
                        border: 'none',
                        background: activeTab === tab.id ? 'var(--primary)' : 'rgba(255,255,255,0.05)',
                        color: activeTab === tab.id ? 'black' : 'var(--text-muted)',
                        fontWeight: 600,
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                        transition: 'all 0.2s'
                    }}
                >
                    {tab.label}
                </button>
            ))}
        </div>
    );
};

export default Tabs;
