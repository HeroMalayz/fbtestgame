const TASKS = ["Generate 50 leads within 7 days"];

function loadGame() {
    if (!currentUser) return;
    updateUI();
    document.getElementById('current-task').textContent = TASKS[0];
}

function saveGame() {
    if (currentUser) {
        currentUser.gameState = {
            budget: parseFloat(document.getElementById('current-budget').textContent),
            leads: parseInt(document.getElementById('current-leads').textContent),
            day: parseInt(document.getElementById('current-day').textContent),
            gameOver: false
        };
        localStorage.setItem('users', JSON.stringify(users));
    }
}

function updateUI() {
    if (!currentUser) return;
    
    document.getElementById('current-budget').textContent = currentUser.gameState.budget.toFixed(2);
    document.getElementById('current-leads').textContent = currentUser.gameState.leads;
    document.getElementById('current-day').textContent = currentUser.gameState.day;
    
    document.getElementById('budget-progress').style.width = 
        Math.min((currentUser.gameState.budget / 100) * 100, 100) + '%';
    
    document.getElementById('leads-progress').style.width = 
        Math.min((currentUser.gameState.leads / 50) * 100, 100) + '%';
}

// Add remaining game functions from previous combined JS

// Initialize the game
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.game-container').style.display = 'none';
});
