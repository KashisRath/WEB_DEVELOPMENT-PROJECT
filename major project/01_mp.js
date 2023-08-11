// Get the mobile menu button and navigation menu
const menuButton = document.querySelector('.menu-button');
const navigationMenu = document.querySelector('.navigation-menu');

// Add event listener to the menu button
menuButton.addEventListener('click', () => {
    navigationMenu.classList.toggle('show');
});
