// Pop-up function
function showPopUp() {
    const popUp = document.querySelector('.pop-up');
    popUp.style.display = 'flex';
}

// Close pop-up
function closePopUp() {
    const popUp = document.querySelector('.pop-up');
    popUp.style.display = 'none';
}

// Sticker function
function showSticker() {
    const sticker = document.querySelector('.sticker');
    sticker.classList.add('show');
    setTimeout(() => {
        sticker.classList.remove('show');
    }, 5000); // Sticker will disappear after 5 seconds
}

// Randomly show a sticker when the page loads
window.addEventListener('load', () => {
    showSticker();
});

// Form Submission Alert (Joke Message)
const form = document.getElementById('contact-form');
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission
    alert("N. Ryan will definitely respond... in 10 years.");
    form.reset(); // Reset the form after submission
});