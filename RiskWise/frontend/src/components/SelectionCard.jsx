import React from 'react';
import { Check } from 'lucide-react';

const SelectionCard = ({ item, isSelected, onClick }) => {
    return (
        <div
            onClick={onClick}
            style={{
                padding: '16px',
                backgroundColor: isSelected ? 'rgba(0, 229, 255, 0.15)' : 'rgba(255, 255, 255, 0.05)',
                border: isSelected ? '1px solid var(--primary)' : '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: 'var(--radius-md)',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                transition: 'all 0.2s ease',
                position: 'relative',
                overflow: 'hidden'
            }}
            className="selection-card"
        >
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                {item.icon && <span style={{ fontSize: '1.5rem' }}>{item.icon}</span>}
                <div>
                    <div style={{ fontWeight: 600, fontSize: '1rem' }}>{item.label}</div>
                    {item.category && <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{item.category}</div>}
                </div>
            </div>

            {isSelected && (
                <div style={{
                    width: '24px', height: '24px',
                    background: 'var(--primary)',
                    borderRadius: '50%',
                    display: 'flex', alignItems: 'center', justifyContent: 'center'
                }}>
                    <Check size={14} color="black" strokeWidth={3} />
                </div>
            )}
        </div>
    );
};

export default SelectionCard;
