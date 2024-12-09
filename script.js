
window.onload = function() {
    document.querySelector('.twitter-link').addEventListener('mouseover', function() {
        this.style.backgroundColor = '#0d95e8';
    });

    document.querySelector('.twitter-link').addEventListener('mouseout', function() {
        this.style.backgroundColor = '#1da1f2';
    });
};
