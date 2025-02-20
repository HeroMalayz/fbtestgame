function showResults(results) {
    document.querySelector('.metrics-grid').innerHTML = `
        <div class="metric-card">
            <div class="metric-value">${results.ctr}</div>
            <div class="metric-label">CTR</div>
        </div>
        <div class="metric-card">
            <div class="metric-value">${results.cpc}</div>
            <div class="metric-label">CPC</div>
        </div>
        <div class="metric-card">
            <div class="metric-value">+${results.conversions}</div>
            <div class="metric-label">Leads</div>
        </div>
        <div class="metric-card">
            <div class="metric-value">${results.roas}</div>
            <div class="metric-label">ROAS</div>
        </div>
    `;
    
    showScreen('results-screen');

document.querySelector('.feedback-message').textContent = message;
    showScreen('results-screen');
}
