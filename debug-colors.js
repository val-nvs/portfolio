// debug-colors.js
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('*').forEach(el => {
        el.style.boxShadow = `0 0 2px hsl(${Math.random() * 360}, 100%, 50%)`;
    });
});