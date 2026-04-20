# 🗳️ VoxMatrix — Predictive Electoral Analytics & Political Strategy Dashboard

<div align="center">

![Banner](https://img.shields.io/badge/VoxMatrix-Political%20Intelligence%20Platform-7b5cff?style=for-the-badge&logo=databricks&logoColor=white)
![Status](https://img.shields.io/badge/Status-In%20Development-ff6b9d?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-fbbf24?style=for-the-badge)
![Built With](https://img.shields.io/badge/Built%20With-HTML%20%7C%20CSS%20%7C%20JavaScript-7b5cff?style=for-the-badge)
![Problem](https://img.shields.io/badge/Problem%20Statement-5%20%2F%20Electoral%20Analytics-ff6b9d?style=for-the-badge)

**A glassmorphic, OSINT-powered political intelligence platform that quantifies electoral outcomes — before a single vote is cast.**

[Live Demo](#) · [Report a Bug](../../issues) · [Request a Feature](../../issues)

</div>

---

## 📌 What Is This?

**VoxMatrix** is a web-based **Predictive Political Strategy Matrix** built for political campaign strategists, election analysts, and research organizations. It transforms fragmented Open Source Intelligence (OSINT) — social media sentiment, historical voting data, caste-demographic analysis, legislative records, and party strength metrics — into a unified, head-to-head **Probability of Win (PoW)** forecast for up to 4 candidates in any given constituency.

> Modern elections — especially in demographically complex regions like India — are not won on gut feeling. They are won on data. VoxMatrix is that data layer.

---

## 🎯 The Problem We Are Solving

> "When comparing two candidates in the same constituency, most strategists are working with three different spreadsheets, two WhatsApp forwards, and one old survey from six months ago."

Political strategists today face four compounding challenges:

| Problem | What It Means in Practice |
|---|---|
| **Variable Weighting** | How do you quantify Incumbency Advantage vs Personal Base vs Party Strength on the same scale? |
| **Identity Complexity** | Religious and caste voting blocks are analyzed in isolation, ignoring how development records can swing those same voters. |
| **No Comparative Benchmarking** | There is no standard way to stack Candidate A's religious base against Candidate B's incumbency advantage side by side. |
| **Static Analysis** | Traditional assessments ignore real-time shifts in digital sentiment — the thing OSINT is best at capturing. |

VoxMatrix solves all four by fusing historical data with live OSINT into a single, weighted comparison matrix.

---

## ✨ Features

### 🧮 Multi-Factor Candidate Matrix
Each candidate is scored across six weighted dimensions simultaneously:

- **Incumbency Effect** — Positive or negative, based on historical anti-incumbency patterns in that constituency
- **Party Strength** — National presence vs regional powerhouse vs hyper-local influence
- **Past Work Score** — Legislative record, fund utilization, verified development projects (sourced via OSINT)
- **Personal Base** — Previous victory margins, local loyalist density, youth/urban appeal scoring
- **Religious & Caste Base** — Census and historical voting data to map solidified blocks vs split support
- **Digital Sentiment** — Live 7-day social media trend per candidate (Twitter/X, local news, forums)

### 🔵 Probability of Win (PoW) Forecasting
Each candidate gets a circular arc gauge displaying their **PoW percentage**, dynamically recalculated when scenario toggles change (Base Case, High Turnout, Swing Voter scenarios).

### 🕸️ Radar Comparison Overlay
All candidates plotted together on a single spider/radar chart with semi-transparent fills in their unique accent colors. Instantly visual. Instantly comparable.

### 📊 Vote Share Projection Bar
A stacked horizontal bar at the bottom showing projected vote share per candidate. Smooth CSS transitions when scenarios are switched.

### ⚠️ Strategic Gap Alerts
If any candidate scores critically low on a key factor, a glowing amber alert tag fires automatically — highlighting their strategic vulnerability before the opponent does.

### 📡 Live OSINT Sentiment Ticker
A scrolling header ticker showing real-time digital sentiment signals — news headlines, social spikes, and forum mentions — per candidate.

### 🧊 Glassmorphism Intelligence UI
Built with a dark anti-gravity design aesthetic — frosted glass cards, floating animated columns, drifting ambient background orbs, and per-candidate color theming (indigo, rose gold, amber). Every pixel is designed to feel like a premium intelligence platform.

---

## 🖥️ UI Layout Overview

```
┌───────────────────────────────────────────────────────────────────────┐
│  NAVBAR  │  VoxMatrix Logo  │  Constituency Selector  │  Cycle Badge  │
│          │  Live Sentiment Ticker scrolling below navbar              │
├──────────┴───────────────────────────────────────────────────────────┤
│                                                                       │
│   CANDIDATE A             CANDIDATE B             CANDIDATE C        │
│   (Indigo theme)          (Rose Gold theme)        (Amber theme)     │
│                                                                       │
│   [ Avatar + Glow Ring ]  [ Avatar + Glow Ring ]  [ Avatar Ring ]   │
│   Name / Party Badge      Name / Party Badge       Name / Party      │
│                                                                       │
│   PoW Arc Gauge 72%       PoW Arc Gauge 61%        PoW Arc Gauge 18% │
│                                                                       │
│   ┌─ Matrix Factor Table ──────────────────────────────────────────┐ │
│   │ Incumbency     High (Anti)    N/A               N/A            │ │
│   │ Party          ★★★★☆         ★★★★★             ★★☆☆☆         │ │
│   │ Past Work      ████████░░    ██████████         ███░░░░░░░    │ │
│   │ Personal Base  Segment Bar   Segment Bar        Segment Bar   │ │
│   │ Religious Base  Split        Solidified         Niche         │ │
│   │ Sentiment      Sparkline ↗   Sparkline ↑↑       Sparkline →   │ │
│   └────────────────────────────────────────────────────────────────┘ │
│                                                                       │
│   RADAR CHART — all 3 candidates overlaid on one spider chart        │
│                                                                       │
├───────────────────────────────────────────────────────────────────────┤
│  FORECAST BAR  │ Base Case │ High Turnout │ Swing +5%  │  Confidence │
│  ████████████████████░░░░░░░░░░░░░░░░░░░░░░░░░░░░                   │
└───────────────────────────────────────────────────────────────────────┘
```

---

## 🏗️ Project Structure

```
Predictive-Electoral-Analytics-Political-Strategy-Dashboard/
│
├── index.html                      # Main entry point — single page app
├── README.md                       # You are here
│
├── assets/
│   ├── css/
│   │   ├── main.css                # Global styles and CSS custom properties
│   │   ├── glassmorphism.css       # Frosted glass effects + ambient orbs
│   │   ├── animations.css          # Levitate, pulse, orb-drift keyframes
│   │   └── themes.css              # Per-candidate color theming (indigo, rose, amber)
│   │
│   ├── js/
│   │   ├── app.js                  # Root application initializer
│   │   ├── matrix.js               # Candidate matrix scoring and rendering logic
│   │   ├── radar.js                # Radar/spider chart — Chart.js or pure SVG
│   │   ├── gauge.js                # Circular PoW arc gauge renderer
│   │   ├── forecast.js             # Vote share bar + scenario toggle logic
│   │   ├── sentiment.js            # Ticker feed and sparkline renderer
│   │   └── data.js                 # Mock OSINT data layer (swap for real APIs)
│   │
│   └── data/
│       ├── constituency_delhi.json       # Mock data — New Delhi constituency
│       ├── constituency_lucknow.json     # Mock data — Lucknow constituency
│       └── constituency_mumbai_north.json # Mock data — Mumbai North
│
├── components/
│   ├── navbar.html                 # Top bar — constituency selector and ticker
│   ├── candidate-card.html        # Reusable candidate column component
│   ├── matrix-table.html          # Scoring matrix table template
│   ├── radar-chart.html           # Radar overlay component
│   └── forecast-bar.html          # Bottom vote share + scenario bar
│
└── docs/
    ├── architecture.md             # System design and OSINT data flow
    ├── scoring-model.md            # How the PoW algorithm and weights work
    ├── data-schema.md              # JSON schema for constituency and candidate objects
    └── screenshots/                # UI previews for README and portfolio
```

---

## 🚀 Getting Started

### Prerequisites

The demo runs entirely in the browser using mock data — no backend, no API keys, no paid services required.

```
Node.js >= 16.x    (optional — only needed for live-server)
npm >= 8.x         (optional)
```

### Run Locally

```bash
# Step 1 — Clone the repository
git clone https://github.com/your-username/Predictive-Electoral-Analytics-Political-Strategy-Dashboard.git

# Step 2 — Move into the project folder
cd Predictive-Electoral-Analytics-Political-Strategy-Dashboard

# Step 3a — Open directly in browser (quickest)
open index.html

# Step 3b — OR use a local dev server (recommended)
npm install -g live-server
live-server --port=3000
```

Then visit `http://localhost:3000` in your browser.

---

## 🧱 Tech Stack

| Layer | Technology | Purpose |
|---|---|---|
| Structure | HTML5 | Semantic single-page layout |
| Styling | CSS3 + Custom Properties | Glassmorphism, per-candidate themes, animations |
| Interactivity | Vanilla JavaScript ES6+ | Matrix scoring, scenario toggles, chart rendering |
| Charts | Chart.js / SVG | Radar chart, sparklines, circular PoW gauge |
| Data | JSON (mock) | Candidate profiles, OSINT scores, demographic data |
| Icons | Inline SVG | Zero external icon dependencies |

> No frameworks. No build tools. No setup complexity. Clone and open.

---

## 📊 Data Schema

Each constituency file follows this JSON structure:

```json
{
  "constituency": "New Delhi",
  "election_cycle": "Lok Sabha 2024",
  "total_voters": 1423000,
  "candidates": [
    {
      "candidate_id": "C-001",
      "name": "Arjun Mehta",
      "party": "National Alliance Party",
      "party_strength": "national",
      "type": "incumbent",
      "theme_color": "indigo",
      "avatar_initials": "AM",
      "matrix": {
        "incumbency_effect": { "score": 55, "label": "High — Anti-incumbency risk" },
        "party_strength": { "score": 80, "label": "Strong national presence" },
        "past_work": { "score": 72, "label": "Verified development projects" },
        "personal_base": { "score": 65, "label": "Traditional loyalists" },
        "religious_caste_base": { "score": 48, "label": "Split support" },
        "digital_sentiment": { "score": 42, "trend": [-2, 1, -3, 0, -1, -4, -2] }
      },
      "probability_of_win": 61,
      "strategic_gap_alert": "Digital sentiment declining — intervention needed"
    }
  ],
  "forecast_scenarios": {
    "base_case": [61, 29, 10],
    "high_turnout": [58, 33, 9],
    "swing_voter_plus_5": [54, 38, 8]
  },
  "osint_ticker": [
    "Arjun Mehta rallies draw 12,000 in South Delhi — Times of India",
    "Priya Sharma trending on X — youth vote mobilization campaign viral",
    "Independent candidate Rajan Das gains traction in minority wards"
  ]
}
```

---

## ⚖️ Scoring Model — How PoW Is Calculated

The Probability of Win score is a **weighted composite** of the six matrix factors. Weights are adjusted per constituency based on historical voting behavior.

| Matrix Factor | Default Weight | Adjustable? |
|---|---|---|
| Incumbency Effect | 15% | Yes — based on anti-incumbency index |
| Party Strength | 20% | Yes — lower weight in local elections |
| Past Work Score | 18% | Yes — higher in development-focused constituencies |
| Personal Base | 17% | Yes |
| Religious / Caste Base | 20% | Yes — higher weight in polarized constituencies |
| Digital Sentiment | 10% | Yes — increases closer to election day |

> All weights are configurable per constituency in the JSON data file. The model normalizes all inputs to a 0–100 scale before applying weights.

---

## 🗺️ Supported Constituencies — Phase 1

| Constituency | State | Election Type |
|---|---|---|
| New Delhi | Delhi | Lok Sabha |
| Lucknow | Uttar Pradesh | Lok Sabha |
| Mumbai North | Maharashtra | Lok Sabha |
| Bengaluru South | Karnataka | State Assembly |

---

## 🔮 Roadmap

- [x] Project scaffolding and folder structure
- [x] Glassmorphism UI design system with per-candidate color theming
- [ ] Candidate column cards with PoW arc gauges
- [ ] Matrix factor table with progress bars, star ratings, and sparklines
- [ ] Radar chart overlay with all candidates plotted simultaneously
- [ ] Forecast bar with scenario toggle (Base / High Turnout / Swing)
- [ ] OSINT sentiment ticker in navbar
- [ ] Strategic Gap Alert logic — auto-fires on low factor scores
- [ ] Real OSINT integration — Twitter/X API, Google Trends, NewsAPI
- [ ] Historical voting data layer — Election Commission of India datasets
- [ ] Census and demographic data integration for caste/religious base scoring
- [ ] Constituency search and comparison across multiple seats
- [ ] PDF export of full candidate comparison report
- [ ] Mobile responsive layout

---

## 🤝 Contributing

All contributions are welcome. Here is how to get involved:

```bash
# 1. Fork this repository on GitHub

# 2. Create your feature branch
git checkout -b feature/your-feature-name

# 3. Make your changes and commit
git commit -m "feat: add historical ECI data parser"

# 4. Push to your branch
git push origin feature/your-feature-name

# 5. Open a Pull Request — describe what you built and why
```

Please keep commits small, focused, and clearly described.

---

## ⚠️ Disclaimer

This project is built for **academic, research, and portfolio purposes only**. All candidate data, scores, and electoral projections used in the demo are entirely fictional and do not represent any real political party, candidate, or election outcome. This tool is not intended to influence any real election.

---

## 📄 License

This project is licensed under the **MIT License** — see the [LICENSE](LICENSE) file for full details.

---

## 👤 Author

**Your Name**
- GitHub: (https://github.com/srisaimanikantha)
- LinkedIn: (https://www.linkedin.com/in/ponnana-sri-sai-manikantha/)

---

## 🙏 Acknowledgements

- Problem statement sourced from a real-world hiring challenge focused on multi-dimensional intelligence platforms
- UI design inspired by premium political analytics tools and glassmorphism design trends
- Scoring model conceptually inspired by academic research on multi-factor electoral forecasting in Indian constituencies

---

<div align="center">

**If this project helped you or gave you ideas — drop a ⭐ on the repo. It genuinely means a lot.**

</div>
