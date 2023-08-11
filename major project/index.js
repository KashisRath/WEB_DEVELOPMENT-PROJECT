// Get all feature sections and toggle buttons
const featureSections = document.querySelectorAll('.feature');
const toggleButtons = document.querySelectorAll('.toggle-button');

// Add click event listener to each toggle button
toggleButtons.forEach((button, index) => {
    button.addEventListener('click', () => {
        // Toggle the visibility of additional info for the clicked feature
        featureSections[index].querySelector('.additional-info').classList.toggle('show');
    });
});
