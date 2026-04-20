const appData = {
    '2024': {
        accuracy: '94.2%',
        constituencies: {
            'delhi-new': {
                accuracy: '95.1%',
                candidates: [
                    { id: 'A1', name: 'Arvind K.', party: 'AAP', color: '#7b5cff', avatar: '👤', winProb: 44, factors: { incumbency: 'High', partyStrength: 4, pastWork: 85, personalBase: 4, casteBase: 35, sentiment: [40, 45, 42, 55, 60, 58, 65] }, forecast: { base: 38.5, high: 40.2, swing: 43.1 } },
                    { id: 'A2', name: 'Manoj T.', party: 'BJP', color: '#ff6b9d', avatar: '👤', winProb: 39, factors: { incumbency: 'N/A', partyStrength: 5, pastWork: 70, personalBase: 5, casteBase: 42, sentiment: [55, 52, 50, 48, 55, 60, 58] }, forecast: { base: 35.2, high: 34.1, swing: 32.5 } },
                    { id: 'A3', name: 'Kanhaiya K.', party: 'INC', color: '#fbbf24', avatar: '👤', winProb: 17, factors: { incumbency: 'Low', partyStrength: 2, pastWork: 45, personalBase: 3, casteBase: 23, sentiment: [15, 18, 20, 25, 22, 24, 28] }, forecast: { base: 26.3, high: 25.7, swing: 24.4 } }
                ],
                briefs: [{ tag: "2024 STATUS", text: "New Delhi shows high volatility in urban sectors." }]
            },
            'lucknow': {
                accuracy: '92.8%',
                candidates: [
                    { id: 'L1', name: 'Rajnath S.', party: 'BJP', color: '#ff6b9d', avatar: '👤', winProb: 55, factors: { incumbency: 'High', partyStrength: 5, pastWork: 88, personalBase: 5, casteBase: 30, sentiment: [60, 62, 65, 68, 70, 72, 75] }, forecast: { base: 52.5, high: 54.2, swing: 50.1 } },
                    { id: 'L2', name: 'Ravidas M.', party: 'SP', color: '#22c55e', avatar: '👤', winProb: 30, factors: { incumbency: 'N/A', partyStrength: 4, pastWork: 65, personalBase: 4, casteBase: 55, sentiment: [25, 28, 30, 32, 29, 31, 33] }, forecast: { base: 28.2, high: 27.1, swing: 30.5 } }
                ],
                briefs: [{ tag: "2024 STATUS", text: "Strong incumbency advantage detected in primary sectors." }]
            },
            'mumbai-north': {
                accuracy: '91.4%',
                candidates: [
                    { id: 'M1', name: 'Piyush G.', party: 'BJP', color: '#ff6b9d', avatar: '👤', winProb: 58, factors: { incumbency: 'Med', partyStrength: 5, pastWork: 82, personalBase: 4, casteBase: 20, sentiment: [50, 55, 58, 62, 65, 68, 70] }, forecast: { base: 56.5, high: 58.2, swing: 54.1 } },
                    { id: 'M2', name: 'Bhushan P.', party: 'INC', color: '#fbbf24', avatar: '👤', winProb: 32, factors: { incumbency: 'N/A', partyStrength: 3, pastWork: 60, personalBase: 3, casteBase: 15, sentiment: [30, 32, 34, 31, 29, 28, 27] }, forecast: { base: 31.2, high: 30.1, swing: 33.5 } }
                ],
                briefs: [{ tag: "2024 STATUS", text: "Infrastructure sentiment driving major voter shifts." }]
            },
            'hyderabad': {
                accuracy: '96.2%',
                candidates: [
                    { id: 'H1', name: 'Asaduddin O.', party: 'AIMIM', color: '#059669', avatar: '👤', winProb: 65, factors: { incumbency: 'Ultra', partyStrength: 5, pastWork: 92, personalBase: 5, casteBase: 80, sentiment: [70, 72, 75, 78, 80, 82, 85] }, forecast: { base: 64.5, high: 66.2, swing: 63.1 } },
                    { id: 'H2', name: 'Madhavi L.', party: 'BJP', color: '#ff6b9d', avatar: '👤', winProb: 25, factors: { incumbency: 'Low', partyStrength: 4, pastWork: 55, personalBase: 4, casteBase: 15, sentiment: [15, 18, 22, 25, 28, 30, 32] }, forecast: { base: 26.2, high: 24.1, swing: 28.5 } }
                ],
                briefs: [{ tag: "2024 STATUS", text: "Deep identity consolidation observed across all clusters." }]
            },
            'bangalore-south': {
                accuracy: '93.7%',
                candidates: [
                    { id: 'B1', name: 'Tejasvi S.', party: 'BJP', color: '#ff6b9d', avatar: '👤', winProb: 52, factors: { incumbency: 'High', partyStrength: 5, pastWork: 85, personalBase: 5, casteBase: 10, sentiment: [55, 58, 60, 65, 62, 60, 63] }, forecast: { base: 51.5, high: 53.2, swing: 49.1 } },
                    { id: 'B2', name: 'Sowmya R.', party: 'INC', color: '#fbbf24', avatar: '👤', winProb: 40, factors: { incumbency: 'Med', partyStrength: 4, pastWork: 78, personalBase: 4, casteBase: 12, sentiment: [35, 38, 40, 42, 45, 48, 41] }, forecast: { base: 39.2, high: 40.1, swing: 42.5 } }
                ],
                briefs: [{ tag: "2024 STATUS", text: "Tech corridor sentiment favoring digital governance models." }]
            },
            'chennai-central': {
                accuracy: '90.5%',
                candidates: [
                    { id: 'C1', name: 'Dayanidhi M.', party: 'DMK', color: '#ef4444', avatar: '👤', winProb: 62, factors: { incumbency: 'High', partyStrength: 5, pastWork: 88, personalBase: 4, casteBase: 40, sentiment: [65, 68, 70, 72, 75, 78, 80] }, forecast: { base: 60.5, high: 62.2, swing: 58.1 } },
                    { id: 'C2', name: 'Vinoj P.', party: 'BJP', color: '#ff6b9d', avatar: '👤', winProb: 15, factors: { incumbency: 'Low', partyStrength: 3, pastWork: 45, personalBase: 2, casteBase: 5, sentiment: [10, 12, 14, 16, 15, 17, 18] }, forecast: { base: 14.2, high: 13.1, swing: 16.5 } }
                ],
                briefs: [{ tag: "2024 STATUS", text: "Regional identity remains the primary driver of win probability." }]
            }
        }
    },
    '2025': {
        accuracy: '88.5%',
        constituencies: {
            'delhi-new': {
                accuracy: '89.2%',
                candidates: [
                    { id: '25A1', name: 'Arvind K.', party: 'AAP', color: '#7b5cff', avatar: '👤', winProb: 40, factors: { incumbency: 'Med', partyStrength: 4, pastWork: 78, personalBase: 4, casteBase: 32, sentiment: [65, 60, 58, 55, 50, 48, 45] }, forecast: { base: 35.5, high: 38.2, swing: 41.1 } },
                    { id: '25A2', name: 'Manoj T.', party: 'BJP', color: '#ff6b9d', avatar: '👤', winProb: 45, factors: { incumbency: 'N/A', partyStrength: 5, pastWork: 75, personalBase: 5, casteBase: 45, sentiment: [58, 60, 62, 65, 68, 70, 72] }, forecast: { base: 42.2, high: 40.1, swing: 38.5 } },
                    { id: '25A3', name: 'Kanhaiya K.', party: 'INC', color: '#fbbf24', avatar: '👤', winProb: 15, factors: { incumbency: 'Low', partyStrength: 3, pastWork: 50, personalBase: 3, casteBase: 23, sentiment: [28, 26, 24, 22, 20, 18, 15] }, forecast: { base: 22.3, high: 21.7, swing: 20.4 } }
                ],
                briefs: [{ tag: "2025 PROJECTION", text: "Predictive models suggest a shift towards BJP as infrastructure projects near completion." }]
            },
            'lucknow': { accuracy: '87.4%', candidates: [], briefs: [] },
            'mumbai-north': { accuracy: '86.5%', candidates: [], briefs: [] },
            'hyderabad': { accuracy: '89.8%', candidates: [], briefs: [] },
            'bangalore-south': { accuracy: '88.1%', candidates: [], briefs: [] },
            'chennai-central': { accuracy: '85.9%', candidates: [], briefs: [] }
        }
    },
    '2026': {
        accuracy: '81.2%',
        constituencies: {
            'delhi-new': {
                accuracy: '82.5%',
                candidates: [
                    { id: '26A1', name: 'Arvind K.', party: 'AAP', color: '#7b5cff', avatar: '👤', winProb: 35, factors: { incumbency: 'Low', partyStrength: 3, pastWork: 65, personalBase: 3, casteBase: 28, sentiment: [45, 42, 40, 38, 35, 32, 30] }, forecast: { base: 30.5, high: 32.2, swing: 35.1 } },
                    { id: '26A2', name: 'Manoj T.', party: 'BJP', color: '#ff6b9d', avatar: '👤', winProb: 52, factors: { incumbency: 'N/A', partyStrength: 5, pastWork: 82, personalBase: 5, casteBase: 48, sentiment: [72, 75, 78, 80, 82, 85, 88] }, forecast: { base: 48.2, high: 45.1, swing: 42.5 } },
                    { id: '26A3', name: 'Kanhaiya K.', party: 'INC', color: '#fbbf24', avatar: '👤', winProb: 13, factors: { incumbency: 'Low', partyStrength: 3, pastWork: 55, personalBase: 3, casteBase: 24, sentiment: [15, 14, 13, 12, 11, 10, 10] }, forecast: { base: 21.3, high: 22.7, swing: 22.4 } }
                ],
                briefs: [{ tag: "2026 FORECAST", text: "Long-term data indicators suggest a significant lead for BJP barring major policy shifts." }]
            },
            'lucknow': { accuracy: '80.1%', candidates: [], briefs: [] },
            'mumbai-north': { accuracy: '79.5%', candidates: [], briefs: [] },
            'hyderabad': { accuracy: '83.2%', candidates: [], briefs: [] },
            'bangalore-south': { accuracy: '81.4%', candidates: [], briefs: [] },
            'chennai-central': { accuracy: '78.8%', candidates: [], briefs: [] }
        }
    }
};

// Helper function to fill missing data for 2025/2026 based on 2024 patterns
Object.keys(appData).forEach(year => {
    if (year === '2024') return;
    Object.keys(appData['2024'].constituencies).forEach(constituency => {
        if (appData[year].constituencies[constituency].candidates.length === 0) {
            const baseData = appData['2024'].constituencies[constituency];
            appData[year].constituencies[constituency].candidates = baseData.candidates.map(c => ({
                ...c,
                id: `${year}_${c.id}`,
                winProb: Math.max(10, Math.min(90, c.winProb + (Math.random() * 10 - 5))),
                factors: { ...c.factors, pastWork: Math.max(10, Math.min(95, c.factors.pastWork + (Math.random() * 8 - 4))) }
            }));
            appData[year].constituencies[constituency].briefs = [{ tag: `${year} PROJECTION`, text: `Simulated data shows evolving trends in ${constituency}.` }];
        }
    });
});


let currentYear = '2024';
let currentConstituency = 'delhi-new';

document.addEventListener('DOMContentLoaded', () => {
    initApp();
    setupEventListeners();
    setupTooltip();
});

function initApp() {
    updateGlobalAccuracy();
    renderCandidates();
    initRadar();
    renderBriefs();
    renderTrendChart();
    updateForecastBar('base');
    initTicker();
    setTimeout(animateGauges, 500);
}

function updateGlobalAccuracy() {
    const meter = document.getElementById('global-accuracy');
    if (!meter) return;
    
    const accuracy = appData[currentYear].constituencies[currentConstituency]?.accuracy 
                   || appData[currentYear].accuracy;
    
    meter.textContent = accuracy;
}


function setupEventListeners() {
    document.querySelectorAll('.year-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.year-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            currentYear = e.target.dataset.year;
            initApp();
        });
    });

    document.getElementById('constituency-selector').addEventListener('change', (e) => {
        currentConstituency = e.target.value;
        initApp();
    });

    document.querySelectorAll('.toggle-btn').forEach(btn => {
        btn.addEventListener('click', (e) => {
            document.querySelectorAll('.toggle-btn').forEach(b => b.classList.remove('active'));
            e.target.classList.add('active');
            updateForecastBar(e.target.dataset.scenario);
        });
    });

    document.querySelector('.close-modal').addEventListener('click', () => {
        document.getElementById('insight-modal').classList.remove('active');
    });
}

function renderCandidates() {
    const container = document.getElementById('candidate-cards');
    const data = appData[currentYear].constituencies[currentConstituency];
    
    if (!data || !data.candidates || data.candidates.length === 0) {
        container.innerHTML = `<div class="glass-panel" style="grid-column: 1/-1; padding: 40px; text-align: center; color: var(--text-secondary);">No definitive data for this selection yet.</div>`;
        return;
    }
    
    const constituencyAccuracy = data.accuracy || appData[currentYear].accuracy;
    
    container.innerHTML = data.candidates.map(c => `
        <div class="candidate-card glass-panel" style="--accent-color: ${c.color}">
            <div class="live-pulse"></div>
            <div class="avatar-wrapper">
                <div class="avatar-circle" style="color: ${c.color}">
                    ${c.avatar}
                </div>
                <h4 class="candidate-name">${c.name}</h4>
                <div class="party-name">
                    <span class="party-badge" style="background: ${c.color}"></span>
                    ${c.party}
                </div>
            </div>

            <div class="win-probability" data-tip="Accuracy: ${constituencyAccuracy} | Win Probability: ${c.winProb}%">
                <svg class="gauge-svg" viewBox="0 0 100 60">
                    <path class="gauge-bg" d="M 10 50 A 40 40 0 0 1 90 50" />
                    <path class="gauge-fill" d="M 10 50 A 40 40 0 0 1 90 50" 
                        id="gauge-path-${c.id}" 
                        style="stroke: ${c.color}" />
                </svg>
                <div class="gauge-text mono">${c.winProb}%</div>
            </div>

            <table class="factor-table">
                <tr class="factor-row" data-tip="Factor Strength: ${c.factors.incumbency}">
                    <td class="factor-label">Incumbency Effect</td>
                    <td class="factor-value">
                        <span class="pill" style="color: ${c.color}; border: 1px solid ${c.color}33">${c.factors.incumbency}</span>
                    </td>
                </tr>
                <tr class="factor-row" data-tip="Reach Index: ${c.factors.partyStrength}/5">
                    <td class="factor-label">Party Strength</td>
                    <td class="factor-value">
                        <span class="stars">${'★'.repeat(c.factors.partyStrength)}${'☆'.repeat(5-c.factors.partyStrength)}</span>
                    </td>
                </tr>
                <tr class="factor-row" data-tip="Performance Score: ${c.factors.pastWork}%">
                    <td class="factor-label">Past Work</td>
                    <td class="factor-value">
                        <div class="progress-container">
                            <div class="progress-bar" style="width: ${c.factors.pastWork}%; background: ${c.color}; --bar-color: ${c.color}66"></div>
                        </div>
                    </td>
                </tr>
            </table>

            <button class="view-more-btn" onclick="showModal('${c.id}')">Predictive Intel View</button>
        </div>
    `).join('');
}

function showModal(candidateId) {
    const data = appData[currentYear].constituencies[currentConstituency];
    const candidate = data.candidates.find(c => c.id === candidateId);
    const modal = document.getElementById('insight-modal');
    const body = document.getElementById('modal-body');
    const cAccuracy = data.accuracy || appData[currentYear].accuracy;
    
    body.innerHTML = `
        <h2 style="color: ${candidate.color}; margin-bottom: 20px;">${currentYear} Forecast — ${candidate.name}</h2>
        <div style="display: grid; grid-template-columns: 1fr 1.2fr; gap: 40px;">
            <div>
                <h3 style="margin-bottom: 15px;">Timeline Assessment</h3>
                <p style="color: var(--text-secondary); line-height: 1.8; font-size: 14px;">
                    In the fiscal year ${currentYear}, our analysis suggests that ${candidate.name} will have a win probability of 
                    <b>${candidate.winProb}%</b>. This accuracy is based on a confidence score of ${cAccuracy}. 
                    Significant variables include the ${candidate.factors.casteBase}% caste consolidation trend.
                </p>
                <div style="margin-top: 30px; padding: 20px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                    <h4 style="margin-bottom: 10px; font-size: 12px; opacity: 0.7;">${currentYear} RISK PROFILE</h4>
                    <div style="height: 8px; background: rgba(255,255,255,0.05); border-radius: 4px; overflow: hidden;">
                        <div style="width: ${100 - candidate.factors.pastWork}%; height: 100%; background: linear-gradient(90deg, ${candidate.color}, #ff6b9d);"></div>
                    </div>
                </div>
            </div>
            <div class="glass-panel" style="padding: 20px;">
                <h3 style="margin-bottom: 15px;">Accuracy Breakdown</h3>
                <div style="display: flex; flex-direction: column; gap: 15px;">
                    <div class="metric-item">
                        <span class="m-label">Data Sourced</span>
                        <span class="m-value">2.4M Units</span>
                    </div>
                    <div class="metric-item">
                        <span class="m-label">Model Precision</span>
                        <span class="m-value" style="color: #10b981;">HIGH</span>
                    </div>
                </div>
            </div>
        </div>
    `;
    modal.classList.add('active');
}

function animateGauges() {
    const data = appData[currentYear].constituencies[currentConstituency];
    if (!data || !data.candidates) return;
    data.candidates.forEach(c => {
        const path = document.getElementById(`gauge-path-${c.id}`);
        if (!path) return;
        const percentage = c.winProb / 100;
        const offset = 125.6 * (1 - percentage);
        path.style.strokeDasharray = '125.6';
        path.style.strokeDashoffset = '125.6';
        setTimeout(() => path.style.strokeDashoffset = offset, 100);
    });
}

function initRadar() {
    const svg = document.getElementById('radar-chart');
    if (!svg) return;
    svg.innerHTML = '';
    const centerX = 200, centerY = 200, radius = 150, levels = 5, axes = 6;
    const data = appData[currentYear].constituencies[currentConstituency];
    if (!data || !data.candidates) return;
    const candidates = data.candidates;

    for (let i = 1; i <= levels; i++) {
        const r = (radius / levels) * i;
        const p = Array.from({length: axes}, (_, a) => {
            const angle = (Math.PI * 2 / axes) * a - Math.PI / 2;
            return `${centerX + r * Math.cos(angle)},${centerY + r * Math.sin(angle)}`;
        });
        const poly = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        poly.setAttribute("points", p.join(' '));
        poly.classList.add("radar-grid");
        svg.appendChild(poly);
    }

    const labels = ["Past Work", "Personal", "Party", "Caste", "Media", "Digital"];
    for (let a = 0; a < axes; a++) {
        const angle = (Math.PI * 2 / axes) * a - Math.PI / 2;
        const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
        line.setAttribute("x1", centerX); line.setAttribute("y1", centerY);
        line.setAttribute("x2", centerX + radius * Math.cos(angle)); line.setAttribute("y2", centerY + radius * Math.sin(angle));
        line.classList.add("radar-axis");
        svg.appendChild(line);

        const text = document.createElementNS("http://www.w3.org/2000/svg", "text");
        text.setAttribute("x", centerX + (radius + 25) * Math.cos(angle));
        text.setAttribute("y", centerY + (radius + 25) * Math.sin(angle));
        text.classList.add("radar-label");
        text.textContent = labels[a];
        svg.appendChild(text);
    }

    candidates.forEach(c => {
        const vals = [c.factors.pastWork/100, c.factors.personalBase/5, c.factors.partyStrength/5, c.factors.casteBase/100, 0.6, 0.7];
        const p = vals.map((v, i) => {
            const angle = (Math.PI * 2 / axes) * i - Math.PI / 2;
            return `${centerX + (v * radius) * Math.cos(angle)},${centerY + (v * radius) * Math.sin(angle)}`;
        });
        const poly = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
        poly.setAttribute("points", p.join(' '));
        poly.classList.add("radar-polygon");
        poly.setAttribute("fill", c.color);
        poly.setAttribute("stroke", c.color);
        svg.appendChild(poly);
    });

    renderRadarLegend(candidates);
}

function renderRadarLegend(candidates) {
    const legend = document.getElementById('radar-legend');
    if (!legend) return;
    legend.innerHTML = candidates.map(c => `
        <div class="legend-item">
            <span class="legend-color" style="background: ${c.color}"></span>
            <span>${c.party}</span>
        </div>
    `).join('');
}

function renderTrendChart() {
    const svg = document.getElementById('sentiment-trend-chart');
    if (!svg) return;
    svg.innerHTML = '';
    const data = appData[currentYear].constituencies[currentConstituency];
    if (!data || !data.candidates) return;
    const candidates = data.candidates;
    const width = 400, height = 200, padding = 30;

    candidates.forEach(c => {
        const data = c.factors.sentiment;
        const step = (width - padding * 2) / (data.length - 1);
        let path = data.map((d, i) => {
            const x = padding + i * step;
            const y = height - padding - (d / 100) * (height - padding * 2);
            return (i === 0 ? 'M' : 'L') + x + ',' + y;
        }).join(' ');

        const line = document.createElementNS("http://www.w3.org/2000/svg", "path");
        line.setAttribute("d", path);
        line.setAttribute("class", "trend-line");
        line.setAttribute("stroke", c.color);
        line.setAttribute("style", `color: ${c.color}`);
        svg.appendChild(line);
    });
}

function renderBriefs() {
    const grid = document.getElementById('brief-grid');
    if (!grid) return;
    const data = appData[currentYear].constituencies[currentConstituency];
    if (!data || !data.briefs) return;
    const briefs = data.briefs;
    grid.innerHTML = briefs.map(b => `
        <div class="brief-item">
            <span class="brief-tag">${b.tag}</span>
            <p class="brief-text">${b.text}</p>
        </div>
    `).join('');
}

function updateForecastBar(scenario) {
    const bar = document.getElementById('vote-share-bar');
    if (!bar) return;
    const data = appData[currentYear].constituencies[currentConstituency];
    if (!data || !data.candidates) return;
    const candidates = data.candidates;
    bar.innerHTML = candidates.map(c => `
        <div class="bar-segment" style="width: ${c.forecast[scenario]}%; background: ${c.color}"></div>
    `).join('');
}

function initTicker() {
    const ticker = document.getElementById('ticker-content');
    if (!ticker) return;
    const tickerItems = [`${currentYear} Projections updated`, "Accuracy models recalibrated", `Sentiment shifting in ${currentConstituency}`];
    ticker.innerHTML = tickerItems.concat(tickerItems).map(item => `<span class="ticker-item"><span>⚡</span> ${item}</span>`).join('');
}

function setupTooltip() {
    const tooltip = document.getElementById('tooltip');
    if (!tooltip) return;
    document.addEventListener('mouseover', (e) => {
        const target = e.target.closest('[data-tip]');
        if (target) {
            tooltip.textContent = target.dataset.tip;
            tooltip.classList.add('visible');
            const x = e.clientX + 15, y = e.clientY + 15;
            tooltip.style.transform = `translate(${x}px, ${y}px)`;
        }
    });
    document.addEventListener('mousemove', (e) => {
        if (tooltip.classList.contains('visible')) {
            const x = e.clientX + 15, y = e.clientY + 15;
            tooltip.style.transform = `translate(${x}px, ${y}px)`;
        }
    });
    document.addEventListener('mouseout', (e) => {
        if (e.target.closest('[data-tip]')) tooltip.classList.remove('visible');
    });
}
