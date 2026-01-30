import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ASSET_CATEGORIES, MOCK_ASSETS } from '../data/marketData';
import Tabs from '../components/Tabs';
import { Search, Plus, Check, ArrowRight } from 'lucide-react';

const InvestmentSelection = () => {
    const navigate = useNavigate();
    const [activeTab, setActiveTab] = useState('stocks');
    const [selected, setSelected] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    const toggleSelection = (id) => {
        if (selected.includes(id)) {
            setSelected(selected.filter(item => item !== id));
        } else {
            setSelected([...selected, id]);
        }
    };

    const filteredAssets = MOCK_ASSETS.filter(asset =>
        asset.type === activeTab &&
        (asset.name.toLowerCase().includes(searchTerm.toLowerCase()) || asset.symbol.toLowerCase().includes(searchTerm.toLowerCase()))
    );

    const handleContinue = () => {
        if (selected.length === 0) return;
        localStorage.setItem('userInvestments', JSON.stringify(selected));
        navigate('/dashboard');
    };

    return (
        <div className="fade-in" style={{ paddingBottom: '100px', maxWidth: '800px', margin: '0 auto' }}>

            <div style={{ marginBottom: '24px', textAlign: 'center' }}>
                <h1 style={{ fontSize: '1.8rem', marginBottom: '8px' }}>Build Your Watchlist</h1>
                <p style={{ color: 'var(--text-muted)' }}>Select assets you own to get personalized risk intelligence.</p>
            </div>

            {/* Search Bar */}
            <div style={{
                display: 'flex', alignItems: 'center', gap: '12px',
                background: 'rgba(255,255,255,0.05)', padding: '12px 16px',
                borderRadius: '12px', marginBottom: '24px', border: '1px solid rgba(255,255,255,0.1)'
            }}>
                <Search size={20} color="var(--text-muted)" />
                <input
                    type="text"
                    placeholder="Search stocks, MFs, etc..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ background: 'transparent', border: 'none', color: 'white', fontSize: '1rem', flex: 1, outline: 'none' }}
                />
            </div>

            {/* Categories */}
            <Tabs tabs={ASSET_CATEGORIES} activeTab={activeTab} onTabChange={setActiveTab} />

            {/* Asset List */}
            <div style={{ marginTop: '20px', display: 'grid', gap: '12px' }}>
                {filteredAssets.length === 0 && (
                    <div style={{ textAlign: 'center', padding: '40px', color: 'var(--text-muted)' }}>
                        No assets found in this category.
                    </div>
                )}

                {filteredAssets.map(asset => {
                    const isSelected = selected.includes(asset.id);
                    return (
                        <div
                            key={asset.id}
                            onClick={() => toggleSelection(asset.id)}
                            className="glass-card"
                            style={{
                                display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer',
                                border: isSelected ? '1px solid var(--primary)' : '1px solid transparent',
                                background: isSelected ? 'rgba(0, 229, 255, 0.05)' : undefined,
                                transition: 'all 0.2s'
                            }}
                        >
                            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                                <div style={{
                                    width: '40px', height: '40px', borderRadius: '8px',
                                    background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                                    fontWeight: 700, fontSize: '0.8rem'
                                }}>
                                    {asset.symbol.slice(0, 2)}
                                </div>
                                <div>
                                    <div style={{ fontWeight: 600 }}>{asset.symbol}</div>
                                    <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{asset.name}</div>
                                </div>
                            </div>

                            <div style={{ textAlign: 'right', marginRight: '16px' }}>
                                <div style={{ fontWeight: 600 }}>₹{asset.price}</div>
                                <div style={{
                                    fontSize: '0.8rem',
                                    color: asset.change.includes('+') ? 'var(--success)' : (asset.change === 'Open' ? 'white' : 'var(--danger)')
                                }}>
                                    {asset.change}
                                </div>
                            </div>

                            <div style={{
                                width: '24px', height: '24px', borderRadius: '50%',
                                border: isSelected ? 'none' : '2px solid rgba(255,255,255,0.3)',
                                background: isSelected ? 'var(--primary)' : 'transparent',
                                display: 'flex', alignItems: 'center', justifyContent: 'center'
                            }}>
                                {isSelected && <Check size={14} color="black" strokeWidth={3} />}
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Floating Action Button */}
            {selected.length > 0 && (
                <div style={{ position: 'fixed', bottom: '24px', left: 0, right: 0, display: 'flex', justifyContent: 'center', padding: '0 20px', zIndex: 100 }}>
                    <button
                        onClick={handleContinue}
                        className="btn-primary"
                        style={{
                            width: '100%', maxWidth: '400px',
                            display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                            padding: '16px 24px', fontSize: '1rem'
                        }}
                    >
                        <span>{selected.length} Assets Selected</span>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            Analyze Risks <ArrowRight size={20} />
                        </div>
                    </button>
                </div>
            )}
        </div>
    );
};

export default InvestmentSelection;
