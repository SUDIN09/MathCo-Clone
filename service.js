document.querySelectorAll('.service-card').forEach(card => {
    card.addEventListener('click', function() {
        this.classList.toggle('circle');
    });
});
