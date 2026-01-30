# RiskWise
> *Understand Risk Before You Invest*

RiskWise is a digital-first, AI-powered financial literacy platform designed to address the critical gap in retail investment understanding. It helps users learn about investment risks, identify their personal risk tolerance, and receive personalized guidance through a gamified, vernacular-first experience.

## Features

- **Interactive Learning Engine**: Micro-modules on investment risks with video placeholders and analogies.
- **Gamified Quizzes**: Test your knowledge and earn XP/Badges.
- **Risk Profiling**: Scientific questionnaire to determine if you are Conservative, Moderate, or Aggressive.
- **Vernacular Support**: Multi-language onboarding (English, Hindi, Telugu).
- **Premium Dark UI**: Modern, glassmorphism-based design for a professional feel.

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

## Project Structure

```
RiskWise/
├── frontend/          # React Application
│   ├── src/
│   │   ├── components/# Reusable UI components
│   │   ├── pages/     # Application screens
│   │   ├── data/      # Mock data for learning modules
│   │   └── ...
├── backend/           # Express API Server
└── ...
```

## License

This project is licensed under the MIT License.
