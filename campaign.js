function showCampaignStep(step) {
    const steps = {
        setup: `
            <div class="campaign-step">
                <h2>🎯 Campaign Objective</h2>
                <select class="campaign-type">
                    <option value="conversions">Conversions</option>
                    <option value="traffic">Traffic</option>
                    <option value="leads">Lead Generation</option>
                </select>
                <label>Daily Budget ($)</label>
                <input type="range" id="budget" min="5" max="50" value="20" class="budget-slider">
                <div class="slider-value">$<span>20</span></div>
                <button class="fb-button" onclick="showCampaignStep('audience')">Next</button>
            </div>
        `,
        audience: `
            <div class="campaign-step">
                <h2>🎯 Audience Targeting</h2>
                <div class="targeting-grid">
                    <div>
                        <label>Age Range</label>
                        <select class="age-range">
                            <option value="18-24">18-24</option>
                            <option value="25-34">25-34</option>
                            <option value="35-44">35-44</option>
                        </select>
                    </div>
                    <div>
                        <label>Interests</label>
                        <select class="interests">
                            <option value="tech">Technology</option>
                            <option value="fashion">Fashion</option>
                            <option value="fitness">Fitness</option>
                        </select>
                    </div>
                </div>
                <button class="fb-button" onclick="showCampaignStep('creative')">Next</button>
            </div>
        `,
        creative: `
            <div class="campaign-step">
                <h2>✍️ Ad Creative</h2>
                <input type="text" class="ad-headline" placeholder="Ad Headline">
                <textarea class="ad-text" placeholder="Ad Text..."></textarea>
                <select class="cta">
                    <option value="signup">Sign Up</option>
                    <option value="learnmore">Learn More</option>
                    <option value="shopnow">Shop Now</option>
                </select>
                <button class="fb-button" onclick="runCampaign()">Launch Campaign</button>
            </div>
        `
    };

    document.querySelector('.campaign-flow').innerHTML = steps[step];
}

function runCampaign() {
    const campaignData = {
        budget: parseInt(document.querySelector('.budget-slider').value),
        age: document.querySelector('.age-range').value,
        interests: document.querySelector('.interests').value,
        headline: document.querySelector('.ad-headline').value,
        adText: document.querySelector('.ad-text').value,
        cta: document.querySelector('.cta').value
    };

    // Simple performance calculation
    let qualityScore = 0.5;
    if (campaignData.headline.length > 20) qualityScore += 0.2;
    if (campaignData.adText.length > 50) qualityScore += 0.3;
    if (campaignData.cta === 'signup') qualityScore += 0.2;

    const results = {
        ctr: (Math.random() * 5 + qualityScore * 3).toFixed(1) + '%',
        cpc: '$' + (Math.random() * 2 + 1).toFixed(2),
        conversions: Math.floor(Math.random() * 10 + qualityScore * 5),
        roas: (Math.random() * 3 + qualityScore).toFixed(1) + 'x'
    };

    gameState.budget -= campaignData.budget;
    gameState.leads += results.conversions;
    gameState.day++;
    
    if (gameState.leads >= 50) {
        alert('Congratulations! You reached the goal!');
        gameState.gameOver = true;
    }
    else if (gameState.budget < 5 || gameState.day > 7) {
        alert('Game Over! You didn\'t reach the goal in time.');
        gameState.gameOver = true;
    }

    showResults(results);
    updateUI();
}


// ... campaign creation steps ...

function runCampaign() {
    // ... campaign performance calculation ...

    if (gameState.leads >= 50) {
        gameState.gameOver = true;
        showResults(results, 'Congratulations! You reached the goal and generated 50 leads within the given timeframe and budget.');
    } else if (gameState.budget < 5 || gameState.day > 7) {
        gameState.gameOver = true;
        showResults(results, 'Game Over! You didn\'t reach the goal of generating 50 leads within the given timeframe and budget.');
    } else {
        showResults(results, 'Great job! Keep optimizing your campaigns to reach the goal.');
    }
}
