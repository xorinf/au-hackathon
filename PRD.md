# 📄 Product Requirements Document (PRD)
## Project: RiskWise
### Tagline: *Understand Risk Before You Invest*

---

## 1. Executive Summary

RiskWise is a digital-first, AI-powered financial literacy platform designed to address a critical gap in India’s retail investment ecosystem: **lack of understanding of investment risk**.

Despite increased access to investment platforms, only **27% of retail investors understand basic investment risks** (SEBI Investor Literacy Survey, 2024). This results in misinformed decisions, financial losses, susceptibility to scams, and long-term distrust in financial markets.

RiskWise solves this by **educating users about investment risks**, **profiling their risk tolerance**, and **delivering personalized, vernacular, and gamified guidance**, before any investment decision is made.

---

## 2. Problem Statement

### 2.1 Core Problem
Retail investors often:
- Invest without understanding risks
- Skip risk profiling
- Follow herd mentality or social media influencers
- Misinterpret returns, volatility, and safety

### 2.2 Root Causes

| Cause | Description |
|------|-------------|
| Low Financial Literacy | Education focuses on awareness, not understanding |
| Complexity | Financial jargon discourages beginners |
| Language Barrier | Most platforms are English-centric |
| Behavioral Biases | Fear and greed dominate decisions |
| Lack of Personalization | Same advice for all users |

---

## 3. Goals & Objectives

### 3.1 Business Goals
- Improve investor risk awareness at scale
- Build trust in digital financial education
- Reduce misinformed investment behavior

### 3.2 User Goals
- Understand “what can go wrong” before investing
- Know their personal risk tolerance
- Receive simple and relevant guidance
- Learn in their preferred language and pace

### 3.3 Success Definition
A successful user should be able to:
- Explain investment risks in simple terms
- Identify their personal risk profile
- Avoid unsuitable or high-risk investments

---

## 4. Target Users & Personas

### 4.1 User Segments

| Segment | Age | Characteristics |
|--------|-----|----------------|
| Students | 18–25 | New to finance, high curiosity |
| Young Professionals | 22–35 | Income but limited time |
| Retired Individuals | 55+ | Risk-averse, safety-focused |
| Rural Investors | 18–60 | Vernacular-first, low literacy |

---

### 4.2 User Personas

#### Persona 1: Ramesh (Rural Investor)
- Age: 42  
- Language: Telugu  
- Goal: Save for children’s education  
- Pain Point: Fear of losing money  

#### Persona 2: Ananya (Young Professional)
- Age: 26  
- Language: English/Hindi  
- Goal: Wealth creation  
- Pain Point: Conflicting online advice  

---

## 5. Scope

### 5.1 In-Scope (Phase 1)
- Investment risk education
- Risk profiling
- Personalized guidance
- Gamification
- Vernacular & voice support

### 5.2 Out-of-Scope
- Live trading or investing
- Guaranteed return advice
- Crypto or derivatives
- Portfolio execution

---

## 6. Product Overview

RiskWise is a **mobile-first learning platform** that ensures users:
1. Learn investment risk fundamentals
2. Understand their personal risk capacity
3. Receive contextual and personalized guidance
4. Build confidence through continuous learning

---

## 7. Functional Requirements

### 7.1 User Onboarding

**Features**
- Language selection (mandatory)
- Age group selection
- Investment experience level
- Optional voice-based onboarding

**Acceptance Criteria**
- Onboarding completed in under 2 minutes
- No financial data required initially

---

### 7.2 Risk Literacy Learning Engine

**Content Structure**
- Micro-modules (2–3 minutes)
- Visual + audio explanations
- Real-life analogies

**Topics Covered**
- What is investment risk?
- Risk vs return
- Types of investment risks
- Common investor mistakes

**Acceptance Criteria**
- Each module includes:
  - Lesson
  - 3–5 question quiz
  - Instant feedback

---

### 7.3 Gamification System

**Mechanics**
- XP points
- Badges
- Learning streaks
- Progress tracking

**Rewards**
- Milestone badges
- Completion certificates

---

### 7.4 Risk Profiling Engine

**Inputs**
- Age
- Income stability
- Financial goals
- Emotional tolerance

**Logic**
- Rule-based + ML hybrid
- Transparent scoring logic

**Outputs**
- Risk category (Conservative / Moderate / Aggressive)
- Plain-language explanation
- Do’s and Don’ts

---

### 7.5 Personalized Guidance Dashboard

**Components**
- Risk profile summary
- Suitable investment categories
- Avoidance warnings
- Scenario simulations (market crash, inflation)

**Acceptance Criteria**
- Users understand *why* guidance is given

---

### 7.6 Conversational Assistant (Chatbot)

**Capabilities**
- Answers basic finance questions
- Explains risks contextually
- Guides learning path

**Languages**
- English + Indian regional languages

**Constraints**
- Educational guidance only
- No product selling or investment execution

---

### 7.7 Accessibility Features

- Voice narration
- Large text mode
- Offline lesson downloads
- Low-bandwidth support

---

## 8. Non-Functional Requirements

| Category | Requirement |
|--------|------------|
| Performance | App loads < 3 seconds |
| Scalability | Support 1M+ users |
| Security | Encrypted data storage |
| Reliability | 99.5% uptime |
| Usability | Beginner-friendly UI |

---

## 9. User Journey Flow

1. User installs app
2. Selects preferred language
3. Learns risk basics
4. Completes risk profiling
5. Views personalized guidance
6. Continues learning via gamified modules

---

## 10. Data & Privacy

- No forced KYC
- Minimal data collection
- Explicit user consent
- Data anonymization
- Compliance with Indian data protection norms

---

## 11. Technology Stack

### Frontend
- Flutter / React Native
- Responsive & multilingual UI

### Backend
- Node.js / Django
- REST APIs

### AI & Data
- NLP-based chatbot
- Risk scoring engine
- Learning analytics

### Infrastructure
- Cloud-based (AWS / GCP)
- Secure authentication (OTP)

---

## 12. Metrics & KPIs

| Metric | Target |
|------|--------|
| Onboarding Completion | >80% |
| Lesson Completion Rate | >60% |
| Risk Profiling Completion | >70% |
| 30-Day Retention | >40% |
| Quiz Accuracy Improvement | +30% |

---

## 13. Risks & Mitigation

| Risk | Mitigation |
|-----|-----------|
| Low engagement | Gamification |
| Trust issues | Transparency & disclaimers |
| Language mismatch | Vernacular-first design |
| Drop-offs | Micro-learning approach |

---

## 14. Future Roadmap

### Phase 2
- Paper trading simulator
- Community learning groups
- Certification paths

### Phase 3
- Broker integrations
- Voice-only IVR access
- SEBI-aligned partnerships

---

## 15. Assumptions & Constraints

### Assumptions
- Users have basic smartphone access
- Willingness to learn before investing

### Constraints
- Regulatory boundaries
- Educational-only positioning

---

## 16. Conclusion

RiskWise aims to transform India’s investment culture by shifting focus from **returns-first** to **risk-aware investing**. Through personalization, simplicity, and accessibility, the platform empowers users to make informed and confident financial decisions.

---