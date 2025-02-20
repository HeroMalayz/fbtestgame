const gameState = {
    budget: 100,
    leads: 0,
    day: 1,
    totalSpent: 0,
    gameOver: false
};

function updateUI() {
    document.getElementById('current-budget').textContent = gameState.budget.toFixed(2);
    document.getElementById('current-leads').textContent = gameState.leads;
    document.getElementById('current-day').textContent = gameState.day;
    
    document.getElementById('budget-progress').style.width = 
        Math.min((gameState.budget / 100) * 100, 100) + '%';
    
    document.getElementById('leads-progress').style.width = 
        Math.min((gameState.leads / 50) * 100, 100) + '%';
}

function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(screen => {
        screen.classList.remove('active');
    });
    document.getElementById(screenId).classList.add('active');
}

document.getElementById('start-campaign').addEventListener('click', () => {
    showScreen('campaign-screen');
    showCampaignStep('setup');
});

document.getElementById('continue-campaign').addEventListener('click', () => {
    if (gameState.gameOver) {
        alert('Game Over! Refresh to start again.');
        return;
    }
    showScreen('campaign-screen');
    showCampaignStep('setup');
});

// Initialize the game
updateUI();
