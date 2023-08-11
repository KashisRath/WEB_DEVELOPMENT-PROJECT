// Get all service sections and toggle buttons
const serviceSections = document.querySelectorAll('.service');
const toggleButtons = document.querySelectorAll('.toggle-button');

// Add click event listener to each toggle button
toggleButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Toggle the visibility of additional info for the clicked service
        serviceSections[index].querySelector('.additional-info').classList.toggle('show');
    });
});

// Smooth scroll to anchor links


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const offset = 60; // Adjust this value based on your header height
        const target = document.querySelector(this.getAttribute('href'));
        const targetPosition = target.getBoundingClientRect().top + window.scrollY;

        window.scrollTo({
            top: targetPosition - offset,
            behavior: 'smooth'
        });
    });
});
