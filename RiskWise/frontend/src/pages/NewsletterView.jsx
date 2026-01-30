import React, { useState, useEffect } from 'react';
import { fetchNewsletter } from '../services/openai';
import { ArrowLeft, Share2, Download, RefreshCcw } from 'lucide-react';

const NewsletterView = ({ onBack }) => {
    const [news, setNews] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadNews = async () => {
            const stored = localStorage.getItem('userInvestments');
            const selectedIds = stored ? JSON.parse(stored) : ['General Market'];
            const data = await fetchNewsletter(selectedIds);
            setNews(data);
            setLoading(false);
        };
        loadNews();
    }, []);

    if (loading) {
        return (
            <div className="fade-in" style={{ textAlign: 'center', padding: '100px 20px', color: 'white' }}>
                <RefreshCcw className="spin" size={48} color="var(--primary)" />
                <h2 style={{ marginTop: '24px' }}>Drafting your Intelligence Brief...</h2>
                <p style={{ color: 'var(--text-muted)' }}>OpenAI is synthesizing market data.</p>
            </div>
        );
    }

    if (!news) return <div style={{ padding: '40px', textAlign: 'center' }}>Failed to load newsletter. <button onClick={onBack}>Go Back</button></div>;

    return (
        <div className="fade-in">
            {/* Navbar Actions */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
                <button onClick={onBack} style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer', display: 'flex', alignItems: 'center' }}>
                    <ArrowLeft style={{ marginRight: '8px' }} /> Back
                </button>
                <div style={{ display: 'flex', gap: '16px' }}>
                    <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}><Share2 size={20} /></button>
                    <button style={{ background: 'none', border: 'none', color: 'var(--text-muted)', cursor: 'pointer' }}><Download size={20} /></button>
                </div>
            </div>

            {/* Newsletter Body */}
            <div style={{
                background: '#fff',
                color: '#1a1a1a',
                borderRadius: 'var(--radius-sm)',
                padding: '40px',
                maxWidth: '800px',
                margin: '0 auto',
                boxShadow: '0 10px 40px rgba(0,0,0,0.5)'
            }}>
                {/* Header */}
                <div style={{ textAlign: 'center', borderBottom: '2px solid #eee', paddingBottom: '24px', marginBottom: '32px' }}>
                    <div style={{ fontFamily: 'Georgia, serif', color: '#555', fontSize: '0.9rem', marginBottom: '8px', letterSpacing: '2px', textTransform: 'uppercase' }}>
                        IntelliVest AI • Intelligence Report
                    </div>
                    <h1 style={{ fontSize: '2.5rem', fontFamily: 'Georgia, serif', marginBottom: '16px', lineHeight: 1.2 }}>
                        {news.title}
                    </h1>
                    <p style={{ fontSize: '1.2rem', fontStyle: 'italic', color: '#666', maxWidth: '600px', margin: '0 auto' }}>
                        "{news.summary}"
                    </p>
                </div>

                {/* Sections */}
                <div style={{ display: 'grid', gap: '32px' }}>
                    {news.sections.map((sec, idx) => (
                        <div key={idx}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
                                <div style={{
                                    width: '8px', height: '8px',
                                    background: sec.sentiment === 'Negative Short-term' || sec.sentiment === 'High Risk' ? '#ff0055' :
                                        sec.sentiment === 'Positive Long-term' ? '#00cc88' : '#888',
                                    borderRadius: '50%'
                                }} />
                                <span style={{ fontSize: '0.8rem', fontWeight: 700, textTransform: 'uppercase', color: '#888' }}>
                                    {sec.sentiment}
                                </span>
                            </div>
                            <h3 style={{ fontSize: '1.4rem', marginBottom: '8px', fontFamily: 'Georgia, serif' }}>{sec.headline}</h3>
                            <p style={{ lineHeight: 1.8, fontSize: '1.1rem', color: '#333' }}>{sec.body}</p>
                        </div>
                    ))}
                </div>

                {/* Footer */}
                <div style={{ marginTop: '48px', paddingTop: '24px', borderTop: '1px solid #eee', textAlign: 'center', fontStyle: 'italic', color: '#666' }}>
                    {news.closing}
                </div>
            </div>
        </div>
    );
};

export default NewsletterView;
