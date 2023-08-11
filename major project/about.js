// Get the contact form element
const contactForm = document.getElementById('contact-form');

// Add submit event listener to the contact form
contactForm.addEventListener('submit', function (event) {
    event.preventDefault();

    // Get form inputs
    const name = contactForm.querySelector('#name').value;
    const email = contactForm.querySelector('#email').value;
    const message = contactForm.querySelector('#message').value;

    // Log form data to the console
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);

    // You can add code here to send the form data to a server
});
