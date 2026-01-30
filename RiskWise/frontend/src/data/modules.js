export const modules = [
    {
        id: 1,
        title: "Understanding Risk",
        desc: "What exactly is investment risk and why does it matter?",
        duration: "2 min",
        video: "https://example.com/video1.mp4", // Placeholder
        content: [
            {
                type: "text",
                text: "Investment risk is the chance that you might lose some or all of the money you invest. It's not just about losing money, but also about the uncertainty of how much you will make."
            },
            {
                type: "analogy",
                text: "Think of risk like crossing a busy road. If you run blindly (High Risk), you might get there faster, but you might get hit. If you use a bridge (Low Risk), it takes longer, but it's safer."
            }
        ],
        quiz: [
            {
                id: 'q1',
                question: "What is investment risk?",
                options: [
                    "Guaranteed profit",
                    "Chance of losing money or uncertain returns",
                    "A type of bank account"
                ],
                answer: 1,
                explanation: "Risk is all about uncertainty and the possibility of loss."
            }
        ]
    },
    {
        id: 2,
        title: "Risk vs Return",
        desc: "The golden rule of investing: No pain, no gain?",
        duration: "3 min",
        content: [
            {
                type: "text",
                text: "Generally, higher potential returns come with higher risk. Safe investments usually pay less."
            }
        ],
        quiz: [
            {
                id: 'q2',
                question: "If an investment promises 50% return in 1 month, it is likely:",
                options: [
                    "Very Safe",
                    "Very Risky (likely a scam)",
                    "Government backed"
                ],
                answer: 1,
                explanation: "High returns in short time usually indicate extreme risk or fraud."
            }
        ]
    },
    {
        id: 3,
        title: "Inflation: The Silent Killer",
        desc: "Why keeping cash under your mattress is risky.",
        duration: "2 min",
        content: [],
        quiz: []
    }
];

export const userProgress = {
    xp: 120,
    streak: 3,
    level: 2,
    completedModules: [1]
};
