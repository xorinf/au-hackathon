# RiskWise 🎯
> *Understand Risk Before You Invest*

[![Hackathon Ready](https://img.shields.io/badge/Hackathon-Ready-brightgreen)](docs/plan.md)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

RiskWise is a digital-first, AI-powered financial literacy platform designed to address the critical gap in retail investment understanding. **Only 27% of retail investors in India understand basic investment risks** — RiskWise bridges this gap through interactive learning, gamification, and vernacular support.

It helps users learn about investment risks, identify their personal risk tolerance, and receive personalized guidance through a gamified, vernacular-first experience designed specifically for Indian investors.

## 📋 Hackathon Documentation

**🚀 New to hackathons or building RiskWise?** Check out our comprehensive guides:

### Quick Access
- **[⚡ Quick Start Guide](docs/QUICK_START.md)** - Get up to speed in 5 minutes!
- **[📖 Complete Hackathon Plan](docs/plan.md)** - Your comprehensive playbook (830 lines of pure value)

### What's Included
- **Market Research** - Analysis of existing solutions, gaps, and India-focused statistics
- **48-Hour Execution Timeline** - Hour-by-hour breakdown with milestones and team roles
- **MVP Definition** - Essential features and stretch goals clearly defined
- **Tech Stack Options** - 3 curated options with detailed pros/cons comparison
- **Pitch Deck Outline** - Complete 12-slide breakdown with timing and talking points
- **Beginner Tips** - Practical advice on winning hackathons, presentation skills, and Q&A handling

## 🌟 Problem Statement

- **73%** of retail investors don't understand basic investment risks
- **40M+** Demat accounts opened in India, but most investors lack financial literacy
- **35%** face losses due to poor risk understanding (SEBI Report 2023)
- **65%** prefer learning in regional languages, but most platforms are English-only

RiskWise makes financial education **accessible, engaging, and effective** for every Indian investor.

## ✨ Key Features

### Core Functionality
- 📚 **Interactive Learning Engine**: Bite-sized modules on investment risks with relatable analogies
- 🎮 **Gamified Quizzes**: Test knowledge and earn XP, badges, and unlock levels
- 🎯 **Risk Profiling**: Scientific questionnaire to determine your investor profile (Conservative/Moderate/Aggressive)
- 🌏 **Vernacular Support**: Multi-language learning (English, Hindi, Telugu)
- 📱 **Mobile-First Design**: Optimized for smartphones, works on any device

### What Makes Us Different
- **Beginner-Obsessed**: Zero jargon, 100% clarity with everyday analogies
- **Personalized Learning**: Content tailored to your risk profile and knowledge level
- **Indian Context**: Examples using Indian companies, cricket analogies, regional references
- **Premium Dark UI**: Modern glassmorphism design for professional feel
- **Fast & Lightweight**: Works on low-bandwidth connections

### Target Users
- 👨‍💼 **First-time investors** (Age 22-35) exploring financial markets
- 🎓 **College students** wanting to learn about investments
- 🏙️ **Tier 2/3 city residents** with limited financial literacy access
- 🗣️ **Regional language speakers** uncomfortable with English financial terms

## Tech Stack

- **Frontend**: React.js (Vite), Vanilla CSS (Custom Design System).
- **Backend**: Node.js, Express (Scaffolded).
- **Icons**: Lucide React.
- **Navigation**: React Router DOM.

## Getting Started

### Prerequisites
- Node.js (v18 or higher)
- npm

### Quick Start (Automated)

You can use the provided helper script to install dependencies and start the project automatically:

```bash
./run.sh
```

### Manual Setup

If you prefer to run it manually:

1.  **Backend Setup**
    ```bash
    cd RiskWise/backend
    npm install
    node server.js
    ```

2.  **Frontend Setup** (Open a new terminal)
    ```bash
    cd RiskWise/frontend
    npm install
    npm run dev
    ```

## 📁 Project Structure

```
au-hackathon/
├── docs/
│   └── plan.md                    # 🎯 Complete hackathon execution plan
├── RiskWise/
│   ├── frontend/                  # React Application (Vite)
│   │   ├── src/
│   │   │   ├── components/        # Reusable UI components
│   │   │   ├── pages/             # Application screens
│   │   │   ├── data/              # Mock data for learning modules
│   │   │   └── ...
│   └── backend/                   # Express API Server
├── README.md                      # This file
└── run.sh                         # Quick start script
```

## 🎯 Unique Selling Proposition (USP)

**What makes RiskWise different from Zerodha Varsity, Groww Learn, or ET Money?**

| Feature | RiskWise | Competitors |
|---------|----------|-------------|
| Vernacular Support | ✅ 4+ Languages | ❌ English Only |
| Gamification | ✅ XP, Badges, Levels | ❌ None |
| Risk Profiling | ✅ Personalized | ❌ Generic Content |
| Beginner-Friendly | ✅ Zero Jargon | ⚠️ Complex Terms |
| Mobile-First | ✅ Optimized | ⚠️ Desktop-focused |

**Our One-Liner**: *"Learn investment risks in your language, in 5 minutes, through games—not boring textbooks."*

## 🚀 For Hackathon Participants

### Quick Setup (Under 5 Minutes)
1. Clone the repository
2. Run `./run.sh` for automated setup
3. Access frontend at `http://localhost:5173`
4. Backend runs at `http://localhost:3000`

### Resources Available
- ✅ Complete 48-hour execution timeline
- ✅ Team role definitions and responsibilities
- ✅ MVP vs stretch goals clearly defined
- ✅ Pitch deck outline (12 slides with talking points)
- ✅ Tech stack comparison and recommendations
- ✅ Beginner-friendly tips and winning strategies

**📖 Read the full plan**: [docs/plan.md](docs/plan.md)

## 📊 Market Context

### India Investment Landscape (2024)
- 📈 **40 million+** Demat accounts opened (45% YoY growth)
- 📱 **750 million+** smartphone users
- 🗣️ **65%** prefer learning in regional languages
- 💡 **55%** rely on social media/WhatsApp for investment advice (risky!)
- 🎯 Average age of new investors: **28 years**

### The Opportunity
- **100M+** potential retail investors by 2025
- **60%** of new investors from Tier 2/3 cities (underserved)
- **70%** higher engagement with gamified learning apps

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

Built with ❤️ for making financial literacy accessible to every Indian investor.

---

**Ready to build?** Start with our [Hackathon Execution Plan](docs/plan.md) 🚀
