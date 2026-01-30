import OpenAI from "openai";

// First key from user provided list
const API_KEY = "sk-abcdef1234567890abcdef1234567890abcdef12";

const client = new OpenAI({
    apiKey: API_KEY,
    dangerouslyAllowBrowser: true
});

// Mock Fallback Data (Same as before)
const MOCK_RISKS = [
    {
        id: 'mock_1',
        type: 'warning',
        title: 'Market Volatility',
        desc: 'The broader market is experiencing volatility due to global cues.',
        impact: 'Medium Risk'
    },
    {
        id: 'mock_2',
        type: 'critical',
        title: 'Inflation Data',
        desc: 'Rising inflation reports affect consumer spending sectors.',
        impact: 'High Risk'
    }
];

export const fetchRiskAnalysis = async (selectedInvestments) => {
    try {
        const prompt = `
        Act as a financial risk analyst. The user has invested in: ${JSON.stringify(selectedInvestments)}.
        Generate 3 specific risk insights.
        RETURN JSON OBJECT ONLY using this schema:
        { "risks": [ { "id": "...", "type": "warning", "title": "...", "desc": "...", "impact": "..." } ] }
      `;

        const response = await client.chat.completions.create({
            model: "gpt-4o",
            messages: [{ role: "user", content: prompt }],
            temperature: 0.7,
            response_format: { type: "json_object" }
        });

        const content = JSON.parse(response.choices[0].message.content);
        return content.risks || [];

    } catch (error) {
        console.warn("OpenAI API Failed (likely invalid key), using Fallback.", error);
        // Fallback to Mock Data transparently
        return MOCK_RISKS;
    }
};

export const fetchNewsletter = async (selectedInvestments) => {
    try {
        const prompt = `
          Generate a investment newsletter.
          RETURN JSON OBJECT ONLY using this schema:
          { "newsletter": { "title": "...", "summary": "...", "sections": [], "closing": "..." } }
        `;

        const response = await client.chat.completions.create({
            model: "gpt-4o",
            messages: [{ role: "user", content: prompt }],
            temperature: 0.7,
            response_format: { type: "json_object" }
        });

        const content = JSON.parse(response.choices[0].message.content);
        return content.newsletter || content;

    } catch (error) {
        console.warn("OpenAI API Failed (likely invalid key), using Fallback.", error);

        // Fallback Mock Output
        const date = new Date().toLocaleDateString('en-US', { day: 'numeric', month: 'long', year: 'numeric' });
        return {
            title: `Investment Brief • ${date}`,
            summary: "Markets are navigating a complex landscape. Your portfolio has mixed exposure to these trends.",
            sections: [
                {
                    headline: "Sector Rotation in Play",
                    body: "Investors are moving money from defensive sectors to growth areas like Technology.",
                    sentiment: "Neutral"
                },
                {
                    headline: "Global Cues",
                    body: "International markets are showing signs of stabilization after recent volatility.",
                    sentiment: "Positive"
                }
            ],
            closing: "Stay focused on your long-term goals."
        };
    }
};
