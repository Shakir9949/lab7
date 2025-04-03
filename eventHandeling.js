// Mouse Events
const mouseBtn = document.getElementById('mouseBtn');
const mouseMsg = document.getElementById('mouseMsg');

mouseBtn.addEventListener('mouseenter', () => {
    mouseMsg.textContent = 'Mouse is over the button!';
});

mouseBtn.addEventListener('mouseleave', () => {
    mouseMsg.textContent = 'Mouse left the button!';
});

// Keyboard Events
const keyInput = document.getElementById('keyInput');
const keyMsg = document.getElementById('keyMsg');

keyInput.addEventListener('keydown', (event) => {
    keyMsg.textContent = `Last key pressed: ${event.key}`;
});

// Form Events
const eventForm = document.getElementById('eventForm');
const formMsg = document.getElementById('formMsg');

eventForm.addEventListener('submit', (event) => {
    event.preventDefault();
    formMsg.textContent = 'Form submitted successfully!';
});

// Focus and Blur Events
const focusInput = document.getElementById('focusInput');
const focusMsg = document.getElementById('focusMsg');

focusInput.addEventListener('focus', () => {
    focusMsg.textContent = 'Input is focused!';
});

focusInput.addEventListener('blur', () => {
    focusMsg.textContent = 'Input lost focus!';
});

// Event Delegation
const buttonContainer = document.getElementById('buttonContainer');
const delegateMsg = document.getElementById('delegateMsg');

buttonContainer.addEventListener('click', (event) => {
    if (event.target.tagName === 'BUTTON') {
        delegateMsg.textContent = `You clicked: ${event.target.textContent}`;
    }
});