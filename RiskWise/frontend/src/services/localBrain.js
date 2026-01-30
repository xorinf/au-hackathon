// This is a "Local Brain" so the app works without an API Key.
// It constructs dynamic sentences based on input patterns and meaningful financial rules.

const KNOWLEDGE_BASE = {
    sectors: {
        banking: {
            keywords: ['bank', 'finance', 'hdfc', 'credit', 'rate', 'loan'],
            bullish: "Banking stocks are benefiting from credit growth. Net interest margins are healthy.",
            bearish: "High interest rates are increasing the cost of funds for banks, putting pressure on margins.",
            risk: "The main risk for banking now is rising NPAs if the economy slows down."
        },
        it: {
            keywords: ['it', 'tech', 'infy', 'tcs', 'software', 'ai', 'data'],
            bullish: "The IT sector is rebounding as global deal flows stabilize. AI demand is a major tailwind.",
            bearish: "Global recession fears are causing clients to cut discretionary tech spending.",
            risk: "Currency fluctuation and US market slowdown are key risks for Indian IT companies."
        },
        auto: {
            keywords: ['auto', 'car', 'tata', 'ev', 'vehicle'],
            bullish: "Strong festive demand and EV adoption are driving auto stocks higher.",
            bearish: "Rising input costs (steel, chips) are eating into auto manufacturer margins.",
            risk: "Supply chain disruptions remains a persistent risk for the auto sector."
        }
    },
    concepts: {
        diversification: {
            keywords: ['diversify', 'safe', 'protect', 'portfolio'],
            advice: "Diversification is key. Don't put more than 20% of your capital in a single sector."
        },
        sip: {
            keywords: ['sip', 'monthly', 'regular', 'investing'],
            advice: "SIPs are the best way to handle volatility. Rupee cost averaging works in your favor."
        }
    }
};

export const generateSmartResponse = (userText) => {
    const lower = userText.toLowerCase();
    let responseParts = [];
    let foundMatch = false;

    // 1. Analyze Intent & Topic
    for (const [key, data] of Object.entries(KNOWLEDGE_BASE.sectors)) {
        if (data.keywords.some(k => lower.includes(k))) {
            foundMatch = true;
            // Heuristic: specific suggestions
            if (lower.includes('risk') || lower.includes('bad') || lower.includes('worry')) {
                responseParts.push(data.risk);
            } else if (lower.includes('good') || lower.includes('buy') || lower.includes('future')) {
                responseParts.push(data.bullish);
            } else {
                responseParts.push(`Regarding ${key}: ${data.bullish} However, keep in mind that ${data.risk.toLowerCase()}`);
            }
        }
    }

    for (const [key, data] of Object.entries(KNOWLEDGE_BASE.concepts)) {
        if (data.keywords.some(k => lower.includes(k))) {
            foundMatch = true;
            responseParts.push(data.advice);
        }
    }

    // 2. Fallback / Greeting
    if (!foundMatch) {
        if (lower.includes('hello') || lower.includes('hi')) {
            return "Hello! I am your IntelliVest Assistant. Ask me about a specific sector like 'Banking' or 'IT', or ask for risk advice.";
        }
        return "That's an interesting point. Could you associate it with a specific sector like IT or Banking? That helps me analyze the risk better.";
    }

    return responseParts.join(' ');
};
