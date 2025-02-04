class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.gameState = {
            budget: 100,
            leads: 0,
            day: 1,
            totalSpent: 0,
            gameOver: false
        };
    }
}

let currentUser = null;
let users = JSON.parse(localStorage.getItem('users')) || [];

function showRegister() {
    document.getElementById('login-form').classList.remove('active');
    document.getElementById('register-form').classList.add('active');
}

function showLogin() {
    document.getElementById('register-form').classList.remove('active');
    document.getElementById('login-form').classList.add('active');
}

function register() {
    const username = document.getElementById('register-username').value;
    const password = document.getElementById('register-password').value;

    if (users.some(user => user.username === username)) {
        alert('Username already exists!');
        return;
    }

    const newUser = new User(username, password);
    users.push(newUser);
    localStorage.setItem('users', JSON.stringify(users));
    alert('Registration successful! Please login.');
    showLogin();
}

function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        currentUser = user;
        loadGame();
        document.getElementById('auth-container').classList.remove('active');
        document.querySelector('.game-container').style.display = 'block';
    } else {
        alert('Invalid credentials!');
    }
}
