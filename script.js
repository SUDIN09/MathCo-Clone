// Smooth Scrolling

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Search Button Functionality (Basic Example)
document.getElementById('search-btn').addEventListener('click', function() {
    // For demonstration, simply log a message
    alert('Search functionality not implemented yet.');
});

document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', function() {
        this.classList.toggle('circle');
    });
});
