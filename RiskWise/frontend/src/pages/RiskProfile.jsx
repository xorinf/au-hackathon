import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ShieldAlert, TrendingUp, DollarSign, Clock } from 'lucide-react';

const RiskProfile = () => {
    const navigate = useNavigate();
    const [step, setStep] = useState(0); // 0: Intro, 1..N: Questions, 99: Result
    const [score, setScore] = useState(0);

    const questions = [
        {
            id: 1,
            text: "How would you describe your income sources?",
            icon: <DollarSign size={32} color="var(--primary)" />,
            options: [
                { text: "Unstable / Variable", points: 1 },
                { text: "Stable but no savings", points: 3 },
                { text: "Secure with regular savings", points: 5 }
            ]
        },
        {
            id: 2,
            text: "If your investment drops by 20% in a month, you would:",
            icon: <TrendingUp size={32} color="var(--danger)" />,
            options: [
                { text: "Panic and sell immediately", points: 1 },
                { text: "Wait patiently", points: 3 },
                { text: "Invest more (buy the dip)", points: 5 }
            ]
        },
        {
            id: 3,
            text: "When do you need this money back?",
            icon: <Clock size={32} color="var(--warning)" />,
            options: [
                { text: "In less than 1 year", points: 1 },
                { text: "In 3-5 years", points: 3 },
                { text: "After 10+ years", points: 5 }
            ]
        }
    ];

    const handleOptionSelect = (points) => {
        setScore(score + points);
        if (step < questions.length) {
            setStep(step + 1);
        } else {
            setStep(99); // Results
        }
    };

    const getResult = () => {
        if (score <= 5) return { label: "Conservative", color: "#00ff9d", desc: "You prioritize safety over returns." };
        if (score <= 10) return { label: "Moderate", color: "#ffb800", desc: "You balance risk and growth." };
        return { label: "Aggressive", color: "#ff0055", desc: "You seek high growth and can handle volatility." };
    };

    const result = getResult();

    return (
        <div className="fade-in" style={{ paddingBottom: '40px' }}>
            {step === 0 && (
                <div style={{ textAlign: 'center', marginTop: '40px' }}>
                    <div style={{
                        width: '100px', height: '100px', background: 'rgba(0, 229, 255, 0.1)',
                        borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        margin: '0 auto 32px', boxShadow: '0 0 40px rgba(0,229,255,0.2)'
                    }}>
                        <ShieldAlert size={48} color="var(--primary)" />
                    </div>
                    <h2 style={{ fontSize: '2rem', marginBottom: '16px' }}>Know Your Risk Profile</h2>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '40px', maxWidth: '400px', margin: '0 auto 40px' }}>
                        Before investing, it's crucial to understand how much risk you can handle. Take this 1-minute test.
                    </p>
                    <button className="btn-primary" onClick={() => setStep(1)} style={{ minWidth: '200px' }}>
                        Start Assessment
                    </button>
                </div>
            )}

            {step > 0 && step <= questions.length && (
                <div className="glass-card" style={{ maxWidth: '600px', margin: '0 auto' }}>
                    <div style={{ textAlign: 'center', marginBottom: '32px' }}>
                        {questions[step - 1].icon}
                    </div>
                    <h3 style={{ fontSize: '1.4rem', marginBottom: '24px', textAlign: 'center' }}>
                        {questions[step - 1].text}
                    </h3>
                    <div style={{ display: 'grid', gap: '16px' }}>
                        {questions[step - 1].options.map((opt, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleOptionSelect(opt.points)}
                                style={{
                                    padding: '16px',
                                    background: 'rgba(255,255,255,0.05)',
                                    border: '1px solid rgba(255,255,255,0.1)',
                                    borderRadius: 'var(--radius-md)',
                                    color: 'white',
                                    cursor: 'pointer',
                                    textAlign: 'left',
                                    fontSize: '1rem',
                                    transition: 'all 0.2s'
                                }}
                                onMouseOver={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'}
                                onMouseOut={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}
                            >
                                {opt.text}
                            </button>
                        ))}
                    </div>
                    <div style={{ marginTop: '24px', textAlign: 'center', color: 'var(--text-muted)' }}>
                        Question {step} of {questions.length}
                    </div>
                </div>
            )}

            {step === 99 && (
                <div style={{ textAlign: 'center', marginTop: '40px' }} className="fade-in">
                    <h2 style={{ color: 'var(--text-muted)', marginBottom: '16px' }}>Your Risk Profile is</h2>
                    <h1 style={{
                        fontSize: '3rem', fontWeight: 800,
                        color: result.color, textShadow: `0 0 30px ${result.color}`,
                        marginBottom: '16px'
                    }}>
                        {result.label}
                    </h1>
                    <p style={{ fontSize: '1.2rem', marginBottom: '40px' }}>
                        {result.desc}
                    </p>

                    <div style={{ display: 'flex', gap: '16px', justifyContent: 'center' }}>
                        <button
                            className="btn-primary"
                            onClick={() => navigate('/dashboard')}
                        >
                            Back to Dashboard
                        </button>
                        <button
                            style={{
                                background: 'transparent', border: '1px solid rgba(255,255,255,0.2)',
                                color: 'white', padding: '12px 24px', borderRadius: 'var(--radius-md)',
                                cursor: 'pointer'
                            }}
                            onClick={() => { setStep(0); setScore(0); }}
                        >
                            Retake Test
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RiskProfile;
