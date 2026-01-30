export const ASSET_CATEGORIES = [
    { id: 'stocks', label: 'Stocks' },
    { id: 'mfs', label: 'Mutual Funds' },
    { id: 'ipos', label: 'IPOs' },
    { id: 'gold', label: 'Gold & Bonds' },
    { id: 'fo', label: 'F&O' }
];

export const MOCK_ASSETS = [
    // --- STOCKS ---
    {
        id: 'stk_rel', type: 'stocks', symbol: 'RELIANCE', name: 'Reliance Industries',
        price: '2,985.45', change: '+1.2%', ltp: 2985.45, risk: 'Moderate',
        desc: 'Oil, Gas, Telecom & Retail Conglomerate. Largest listed company.',
        exchange: 'NSE/BSE'
    },
    {
        id: 'stk_hdfc', type: 'stocks', symbol: 'HDFCBANK', name: 'HDFC Bank Ltd',
        price: '1,450.20', change: '-0.5%', ltp: 1450.20, risk: 'Low',
        desc: 'Largest private sector bank in India. Banking heavyweight.',
        exchange: 'NSE'
    },
    {
        id: 'stk_tata', type: 'stocks', symbol: 'TATAMOTORS', name: 'Tata Motors',
        price: '980.10', change: '+2.4%', ltp: 980.10, risk: 'High',
        desc: 'Automobile leader. EV market share leader in India.',
        exchange: 'NSE'
    },
    {
        id: 'stk_zomato', type: 'stocks', symbol: 'ZOMATO', name: 'Zomato Ltd',
        price: '145.65', change: '+3.1%', ltp: 145.65, risk: 'High',
        desc: 'Food delivery and quick commerce platform.',
        exchange: 'NSE'
    },

    // --- MUTUAL FUNDS ---
    {
        id: 'mf_nippon', type: 'mfs', symbol: 'NIPPON_SMALL', name: 'Nippon India Small Cap',
        price: 'NAV: 142.5', change: '+0.8%', ltp: 142.5, risk: 'Very High',
        desc: 'Small cap fund focusing on high growth companies.',
        exchange: 'AMFI'
    },
    {
        id: 'mf_parag', type: 'mfs', symbol: 'PPFAS', name: 'Parag Parikh Flexi Cap',
        price: 'NAV: 78.2', change: '+0.1%', ltp: 78.2, risk: 'Moderate',
        desc: 'Diversified equity fund with international exposure.',
        exchange: 'AMFI'
    },

    // --- IPOs ---
    {
        id: 'ipo_ola', type: 'ipos', symbol: 'OLA_ELEC', name: 'Ola Electric',
        price: 'Range: 72-76', change: 'Open', ltp: 76, risk: 'High',
        desc: 'Upcoming EV manufacturer IPO. Apply via UPI.',
        exchange: 'IPO'
    },

    // --- GOLD ---
    {
        id: 'gold_bees', type: 'gold', symbol: 'GOLDBEES', name: 'Nippon Gold ETF',
        price: '58.40', change: '+0.3%', ltp: 58.40, risk: 'Low',
        desc: 'Paper gold investment. Tracks domestic gold prices.',
        exchange: 'NSE'
    },
    {
        id: 'sgb_rbi', type: 'gold', symbol: 'SGB_AUG', name: 'Sovereign Gold Bond',
        price: '6,250', change: '0%', ltp: 6250, risk: 'Low',
        desc: 'Government backed gold bond with 2.5% interest.',
        exchange: 'RBI'
    }
];

// Helper to get asset by IDs
export const getAssetsByIds = (ids) => MOCK_ASSETS.filter(a => ids.includes(a.id));
