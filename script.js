// Smooth scrolling for navigation links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1); // Get the section ID
        const targetSection = document.getElementById(targetId);
        
        // Dynamically calculate the navbar height (useful for responsive designs)
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        
        // Scroll to the section with dynamic offset based on navbar height
        window.scrollTo({
            top: targetSection.offsetTop - navbarHeight, // Dynamic offset
            behavior: 'smooth'
        });
    });
});

// JavaScript for Timeline Scroll Effect
window.addEventListener('scroll', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach(item => {
        const rect = item.getBoundingClientRect();
        if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });
});

// Add event listeners to toggle timeline tile visibility
document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('click', function() {
        const tile = this.querySelector('.timeline-tile');
        
        // Toggle visibility of the tile content
        if (tile.style.display === 'none' || tile.style.display === '') {
            tile.style.display = 'block';
        } else {
            tile.style.display = 'none';
        }
    });
});

