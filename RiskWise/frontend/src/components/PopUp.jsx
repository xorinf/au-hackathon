import React, { useState, useEffect } from 'react';
import { Lightbulb, X } from 'lucide-react';

const PopUp = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        // Show popup after 5 seconds
        const timer = setTimeout(() => {
            setVisible(true);
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

    if (!visible) return null;

    return (
        <div style={{
            position: 'fixed',
            bottom: '24px',
            right: '24px',
            width: '320px',
            background: 'rgba(30, 30, 40, 0.95)',
            backdropFilter: 'blur(16px)',
            border: '1px solid var(--primary)',
            borderRadius: 'var(--radius-md)',
            padding: '20px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
            zIndex: 1000,
            animation: 'slideUp 0.5s ease-out'
        }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '8px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontWeight: 'bold' }}>
                    <Lightbulb size={20} /> Result Tip
                </div>
                <button
                    onClick={() => setVisible(false)}
                    style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}
                >
                    <X size={18} />
                </button>
            </div>

            <p style={{ fontSize: '0.9rem', color: 'white', lineHeight: 1.5 }}>
                "Diversification is the only free lunch in investing. Don't put all your eggs in one basket!"
            </p>

            <div style={{ marginTop: '12px', height: '4px', background: 'rgba(255,255,255,0.1)', borderRadius: '2px', overflow: 'hidden' }}>
                <div style={{ width: '100%', height: '100%', background: 'var(--primary)', animation: 'drain 10s linear forwards' }} />
            </div>

            <style>{`
        @keyframes slideUp { from { transform: translateY(100px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        @keyframes drain { from { width: 100%; } to { width: 0%; } }
      `}</style>
        </div>
    );
};

export default PopUp;
