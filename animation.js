function fadeIn(element) {
    element.style.opacity = 0;
    element.classList.add('active');
    setTimeout(() => {
        element.style.opacity = 1;
    }, 100);
}

function fadeOut(element, callback) {
    element.style.opacity = 1;
    element.classList.remove('active');
    setTimeout(() => {
        element.style.opacity = 0;
        callback();
    }, 300);
}

// ... additional animation functions ...
