import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { modules } from '../data/modules';
import { ArrowLeft, CheckCircle, XCircle, Play } from 'lucide-react';

const ModuleView = () => {
    const { moduleId } = useParams();
    const navigate = useNavigate();
    const module = modules.find(m => m.id === parseInt(moduleId));

    const [mode, setMode] = useState('learn'); // 'learn' | 'quiz' | 'complete'
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [selectedOption, setSelectedOption] = useState(null);
    const [showExplanation, setShowExplanation] = useState(false);

    if (!module) return <div>Module not found</div>;

    const handleOptionClick = (index) => {
        if (showExplanation) return;
        setSelectedOption(index);
        setShowExplanation(true);
        if (index === module.quiz[currentQuestion].answer) {
            setScore(score + 1);
        }
    };

    const handleNextQuestion = () => {
        setSelectedOption(null);
        setShowExplanation(false);
        if (currentQuestion < module.quiz.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            setMode('complete');
        }
    };

    return (
        <div className="fade-in" style={{ paddingBottom: '80px' }}>
            {/* Header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
                <button
                    onClick={() => navigate('/dashboard')}
                    style={{
                        background: 'none', border: 'none', color: 'white', cursor: 'pointer',
                        display: 'flex', alignItems: 'center'
                    }}
                >
                    <ArrowLeft />
                </button>
                <h2 style={{ fontSize: '1.2rem' }}>{module.title}</h2>
            </div>

            {mode === 'learn' && (
                <div className="glass-card">
                    {/* Video Placeholder */}
                    <div style={{
                        width: '100%', aspectRatio: '16/9',
                        background: '#000', borderRadius: 'var(--radius-sm)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        marginBottom: '24px', position: 'relative'
                    }}>
                        <Play size={48} fill="white" stroke="none" style={{ opacity: 0.8 }} />
                        <div style={{ position: 'absolute', bottom: '10px', right: '10px', background: 'rgba(0,0,0,0.7)', padding: '4px 8px', borderRadius: '4px', fontSize: '0.8rem' }}>
                            Video Placeholder
                        </div>
                    </div>

                    <div style={{ marginBottom: '32px' }}>
                        {module.content.map((block, idx) => (
                            <div key={idx} style={{ marginBottom: '16px' }}>
                                {block.type === 'text' && <p>{block.text}</p>}
                                {block.type === 'analogy' && (
                                    <div style={{
                                        background: 'rgba(255, 184, 0, 0.1)',
                                        borderLeft: '4px solid var(--warning)',
                                        padding: '16px', borderRadius: '0 8px 8px 0',
                                        fontStyle: 'italic'
                                    }}>
                                        <strong>Analogy:</strong> {block.text}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    <button
                        className="btn-primary"
                        style={{ width: '100%' }}
                        onClick={() => setMode('quiz')}
                    >
                        Take Quiz
                    </button>
                </div>
            )}

            {mode === 'quiz' && (
                <div className="glass-card">
                    <div style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <h3 style={{ fontSize: '1.1rem' }}>Quiz</h3>
                        <span style={{ color: 'var(--text-muted)' }}>{currentQuestion + 1} / {module.quiz.length}</span>
                    </div>

                    <h4 style={{ fontSize: '1.2rem', marginBottom: '24px' }}>
                        {module.quiz[currentQuestion].question}
                    </h4>

                    <div style={{ display: 'grid', gap: '12px', marginBottom: '24px' }}>
                        {module.quiz[currentQuestion].options.map((opt, idx) => {
                            const isSelected = selectedOption === idx;
                            const isCorrect = idx === module.quiz[currentQuestion].answer;

                            let bg = 'rgba(255,255,255,0.05)';
                            let border = '1px solid rgba(255,255,255,0.1)';

                            if (showExplanation) {
                                if (isCorrect) {
                                    bg = 'rgba(0, 255, 157, 0.2)';
                                    border = '1px solid var(--success)';
                                } else if (isSelected) {
                                    bg = 'rgba(255, 0, 85, 0.2)';
                                    border = '1px solid var(--danger)';
                                }
                            }

                            return (
                                <button
                                    key={idx}
                                    onClick={() => handleOptionClick(idx)}
                                    disabled={showExplanation}
                                    style={{
                                        padding: '16px',
                                        textAlign: 'left',
                                        background: bg,
                                        border: border,
                                        borderRadius: 'var(--radius-md)',
                                        color: 'white',
                                        cursor: showExplanation ? 'default' : 'pointer',
                                        display: 'flex', justifyContent: 'space-between', alignItems: 'center'
                                    }}
                                >
                                    {opt}
                                    {showExplanation && isCorrect && <CheckCircle size={20} color="var(--success)" />}
                                    {showExplanation && isSelected && !isCorrect && <XCircle size={20} color="var(--danger)" />}
                                </button>
                            );
                        })}
                    </div>

                    {showExplanation && (
                        <div className="fade-in">
                            <div style={{ marginBottom: '24px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                                {module.quiz[currentQuestion].explanation}
                            </div>
                            <button
                                className="btn-primary"
                                style={{ width: '100%' }}
                                onClick={handleNextQuestion}
                            >
                                {currentQuestion < module.quiz.length - 1 ? 'Next Question' : 'See Results'}
                            </button>
                        </div>
                    )}
                </div>
            )}

            {mode === 'complete' && (
                <div style={{ textAlign: 'center', marginTop: '40px' }} className="fade-in">
                    <div style={{
                        width: '80px', height: '80px', background: 'var(--success)',
                        borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                        margin: '0 auto 24px', boxShadow: '0 0 30px var(--success)'
                    }}>
                        <CheckCircle size={40} color="black" />
                    </div>
                    <h2>Module Completed!</h2>
                    <p style={{ color: 'var(--text-muted)', marginBottom: '32px' }}>
                        You scored {score} / {module.quiz.length}
                    </p>

                    <button
                        className="btn-primary"
                        style={{ width: '100%' }}
                        onClick={() => navigate('/dashboard')}
                    >
                        Back to Dashboard
                    </button>
                </div>
            )}
        </div>
    );
};

export default ModuleView;
