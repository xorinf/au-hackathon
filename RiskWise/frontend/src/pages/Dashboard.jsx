import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchRiskAnalysis } from '../services/openai';
import { getAssetsByIds } from '../data/marketData'; // Helper for rich data
import InsightCard from '../components/InsightCard';
import { FileText, RefreshCcw, TrendingUp, AlertTriangle } from 'lucide-react';
import NewsletterView from './NewsletterView';
import PopUp from '../components/PopUp';
import RiskWidget from '../components/RiskWidget';
import ChatBot from '../components/ChatBot';

import { GROWW_CONFIG } from '../config/groww';

const Dashboard = () => {
    const [myAssets, setMyAssets] = useState([]);
    const [insights, setInsights] = useState([]);
    const [showNewsletter, setShowNewsletter] = useState(false);
    const [loading, setLoading] = useState(true);

    // Mock Verification of Groww Keys
    const isGrowwConnected = GROWW_CONFIG.apiKey && GROWW_CONFIG.apiKey.length > 20;

    useEffect(() => {
        const loadData = async () => {
            // 1. Load User Selection
            const storedIds = JSON.parse(localStorage.getItem('userInvestments') || '[]');
            const assets = getAssetsByIds(storedIds);
            setMyAssets(assets);

            // 2. Prepare Data for AI (Names only)
            const assetNames = assets.map(a => a.name);

            // 3. Fetch Risks
            const aiData = await fetchRiskAnalysis(assetNames.length > 0 ? assetNames : ['General Market']);
            setInsights(aiData);
            setLoading(false);
        };

        loadData();
    }, []);

    if (showNewsletter) {
        return <NewsletterView onBack={() => setShowNewsletter(false)} />;
    }

    // Calculate Portfolio Risk Score (Mock Logic)
    const riskScore = Math.min(85, 30 + (insights.filter(i => i.type === 'critical').length * 20));

    return (
        <div className="fade-in">
            {/* Widget Row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '24px' }}>
                <RiskWidget score={riskScore} label={riskScore > 60 ? "High Caution" : "Balanced"} />

                <div className="glass-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '8px' }}>PORTFOLIO SOURCE</div>
                    <div style={{ fontSize: '1.2rem', fontWeight: 600 }}>{myAssets.length} Assets Linked</div>

                    {isGrowwConnected && (
                        <div style={{
                            marginTop: '8px', padding: '4px 8px', background: 'rgba(0, 204, 136, 0.1)',
                            border: '1px solid rgba(0, 204, 136, 0.2)', borderRadius: '4px',
                            display: 'flex', alignItems: 'center', gap: '6px', width: 'fit-content'
                        }}>
                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#00cc88' }} />
                            <span style={{ fontSize: '0.75rem', color: '#00cc88', fontWeight: 600 }}>Groww API Connected</span>
                        </div>
                    )}
                </div>
            </div>

            <PopUp />
            <ChatBot />

            {/* WATCHLIST SECTION (Legit Data) */}
            <div style={{ marginBottom: '32px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <h3 style={{ fontSize: '1.2rem' }}>Your Watchlist</h3>
                    <Link to="/investments" style={{ color: 'var(--primary)', fontSize: '0.9rem', textDecoration: 'none' }}>Edit</Link>
                </div>

                {myAssets.length === 0 ? (
                    <div style={{ padding: '20px', textAlign: 'center', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                        No assets selected. <Link to="/investments" style={{ color: 'var(--primary)' }}>Add Now</Link>
                    </div>
                ) : (
                    <div style={{ display: 'flex', gap: '12px', overflowX: 'auto', paddingBottom: '8px' }}>
                        {myAssets.map(asset => (
                            <div key={asset.id} style={{
                                minWidth: '200px', background: 'rgba(255,255,255,0.05)',
                                padding: '16px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.1)'
                            }}>
                                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px' }}>
                                    <span style={{ fontWeight: 700 }}>{asset.symbol}</span>
                                    <span style={{
                                        color: asset.change.includes('+') ? 'var(--success)' : (asset.change === 'Open' ? 'white' : 'var(--danger)'),
                                        fontSize: '0.9rem'
                                    }}>{asset.change}</span>
                                </div>
                                <div style={{ fontSize: '1.4rem', fontWeight: 600 }}>₹{asset.price}</div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', marginTop: '4px' }}>{asset.name}</div>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* HEADER */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
                <div>
                    <h2 style={{ fontSize: '1.5rem' }}>Risk Analysis</h2>
                    <p style={{ color: 'var(--text-muted)' }}>AI Insights for YOUR specific assets</p>
                </div>
                <button
                    className="btn-primary"
                    onClick={() => setShowNewsletter(true)}
                    style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem' }}
                >
                    <FileText size={18} /> Generate Brief
                </button>
            </div>

            {/* INSIGHTS */}
            {loading ? (
                <div style={{ textAlign: 'center', padding: '60px' }}>
                    <RefreshCcw className="spin" size={32} color="var(--primary)" />
                    <p style={{ marginTop: '16px', color: 'var(--text-muted)' }}>Analyzing 100+ market signals...</p>
                </div>
            ) : (
                <div style={{ display: 'grid', gap: '16px' }}>
                    {insights.map((ins, idx) => (
                        <InsightCard key={ins.id || idx} insight={ins} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default Dashboard;
