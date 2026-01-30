import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Check, Globe, Smile, TrendingUp } from 'lucide-react';

const Onboarding = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        language: '',
        age: '',
        experience: ''
    });

    const languages = [
        { code: 'en', label: 'English', native: 'English' },
        { code: 'hi', label: 'Hindi', native: 'हिंदी' },
        { code: 'te', label: 'Telugu', native: 'తెలుగు' }
    ];

    const experienceLevels = [
        { value: 'beginner', label: 'Beginner', desc: 'New to investing' },
        { value: 'intermediate', label: 'Intermediate', desc: 'Some experience' },
        { value: 'expert', label: 'Expert', desc: 'Active investor' }
    ];

    const handleNext = () => {
        if (step < 3) setStep(step + 1);
        else navigate('/dashboard');
    };

    const updateData = (key, value) => {
        setFormData(prev => ({ ...prev, [key]: value }));
    };

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', paddingTop: '40px' }}>

            {/* Progress Bar */}
            <div style={{ marginBottom: '40px', display: 'flex', gap: '8px' }}>
                {[1, 2, 3].map(i => (
                    <div key={i} style={{
                        height: '4px',
                        flex: 1,
                        borderRadius: '4px',
                        backgroundColor: i <= step ? 'var(--primary)' : 'rgba(255,255,255,0.1)',
                        transition: 'background-color 0.3s ease'
                    }} />
                ))}
            </div>

            <div className="glass-card" style={{ minHeight: '400px', display: 'flex', flexDirection: 'column' }}>

                {/* Step 1: Language */}
                {step === 1 && (
                    <div className="fade-in">
                        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                            <div style={{
                                background: 'rgba(0, 229, 255, 0.1)',
                                width: '64px', height: '64px',
                                borderRadius: '50%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                margin: '0 auto 16px'
                            }}>
                                <Globe size={32} color="var(--primary)" />
                            </div>
                            <h2 style={{ fontSize: '1.8rem', marginBottom: '8px' }}>Welcome to RiskWise</h2>
                            <p style={{ color: 'var(--text-muted)' }}>Choose your preferred language</p>
                        </div>

                        <div style={{ display: 'grid', gap: '16px' }}>
                            {languages.map(lang => (
                                <button
                                    key={lang.code}
                                    onClick={() => { updateData('language', lang.code); handleNext(); }}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        padding: '16px 24px',
                                        background: formData.language === lang.code ? 'rgba(0, 229, 255, 0.1)' : 'rgba(255,255,255,0.05)',
                                        border: formData.language === lang.code ? '1px solid var(--primary)' : '1px solid rgba(255,255,255,0.1)',
                                        borderRadius: 'var(--radius-md)',
                                        color: 'white',
                                        cursor: 'pointer',
                                        textAlign: 'left'
                                    }}
                                >
                                    <div>
                                        <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>{lang.native}</div>
                                        <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{lang.label}</div>
                                    </div>
                                    {formData.language === lang.code && <Check color="var(--primary)" />}
                                </button>
                            ))}
                        </div>
                    </div>
                )}

                {/* Step 2: Age */}
                {step === 2 && (
                    <div className="fade-in">
                        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                            <div style={{
                                background: 'rgba(112, 0, 255, 0.1)',
                                width: '64px', height: '64px',
                                borderRadius: '50%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                margin: '0 auto 16px'
                            }}>
                                <Smile size={32} color="var(--secondary)" />
                            </div>
                            <h2 style={{ fontSize: '1.8rem', marginBottom: '8px' }}>Tell us about you</h2>
                            <p style={{ color: 'var(--text-muted)' }}>This helps us personalize your journey</p>
                        </div>

                        <div style={{ marginBottom: '24px' }}>
                            <label style={{ display: 'block', marginBottom: '8px', color: 'var(--text-muted)' }}>Age</label>
                            <input
                                type="number"
                                placeholder="e.g. 24"
                                value={formData.age}
                                onChange={(e) => updateData('age', e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '16px',
                                    background: 'rgba(0,0,0,0.3)',
                                    border: '1px solid rgba(255,255,255,0.2)',
                                    borderRadius: 'var(--radius-sm)',
                                    color: 'white',
                                    fontSize: '1.1rem',
                                    outline: 'none'
                                }}
                            />
                        </div>

                        <button
                            className="btn-primary"
                            style={{ width: '100%', marginTop: 'auto' }}
                            disabled={!formData.age}
                            onClick={handleNext}
                        >
                            Continue
                        </button>
                    </div>
                )}

                {/* Step 3: Experience */}
                {step === 3 && (
                    <div className="fade-in">
                        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                            <div style={{
                                background: 'rgba(0, 255, 157, 0.1)',
                                width: '64px', height: '64px',
                                borderRadius: '50%',
                                display: 'flex', alignItems: 'center', justifyContent: 'center',
                                margin: '0 auto 16px'
                            }}>
                                <TrendingUp size={32} color="var(--success)" />
                            </div>
                            <h2 style={{ fontSize: '1.8rem', marginBottom: '8px' }}>Experience Level</h2>
                            <p style={{ color: 'var(--text-muted)' }}>How familiar are you with investing?</p>
                        </div>

                        <div style={{ display: 'grid', gap: '16px', marginBottom: '24px' }}>
                            {experienceLevels.map(exp => (
                                <button
                                    key={exp.value}
                                    onClick={() => updateData('experience', exp.value)}
                                    style={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        padding: '16px 24px',
                                        background: formData.experience === exp.value ? 'rgba(0, 255, 157, 0.1)' : 'rgba(255,255,255,0.05)',
                                        border: formData.experience === exp.value ? '1px solid var(--success)' : '1px solid rgba(255,255,255,0.1)',
                                        borderRadius: 'var(--radius-md)',
                                        color: 'white',
                                        cursor: 'pointer',
                                        textAlign: 'left',
                                        transition: 'all 0.2s ease'
                                    }}
                                >
                                    <div>
                                        <div style={{ fontWeight: 600, fontSize: '1.1rem' }}>{exp.label}</div>
                                        <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>{exp.desc}</div>
                                    </div>
                                    {formData.experience === exp.value && <Check color="var(--success)" />}
                                </button>
                            ))}
                        </div>

                        <button
                            className="btn-primary"
                            style={{ width: '100%', marginTop: 'auto' }}
                            disabled={!formData.experience}
                            onClick={handleNext}
                        >
                            Get Started <ArrowRight size={18} style={{ marginLeft: '8px', verticalAlign: 'middle' }} />
                        </button>
                    </div>
                )}

            </div>
        </div>
    );
};

export default Onboarding;
