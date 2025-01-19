// Pop-up functionality when the CTA button is clicked
document.querySelector(".cta-btn").addEventListener("click", function() {
    showPopup();
});

// Show the Pop-up with a nerdy message
function showPopup() {
    const popup = document.createElement("div");
    popup.classList.add("pop-up");
    popup.innerHTML = `
        <h3>Warning!</h3>
        <p>You're about to enter the mind of a true nerd. Proceed with caution, or get lost in memes forever.</p>
        <button onclick="closePopup()">Close</button>
    `;
    document.body.appendChild(popup);
    setTimeout(() => {
        popup.style.display = "block";
    }, 100);
}

// Close the Pop-up when clicking on the close button
function closePopup() {
    const popup = document.querySelector(".pop-up");
    popup.style.display = "none";
    setTimeout(() => {
        popup.remove();
    }, 300);
}

// Sticker functionality that follows the mouse and adds some fun
const sticker = document.createElement("div");
sticker.classList.add("sticker");
sticker.textContent = "Nerd Alert!";
document.body.appendChild(sticker);

// Move the sticker based on mouse position
document.addEventListener("mousemove", function(e) {
    sticker.style.top = `${e.clientY + 20}px`;
    sticker.style.left = `${e.clientX + 20}px`;
});

// Contact form submission simulation (for fun)
document.querySelector("#contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from actually submitting
    alert("You just sent a roast message to N. Ryan! He'll ignore you as usual.");
});

// Simple gallery hover effect to surprise
const galleryItems = document.querySelectorAll(".gallery-item");
galleryItems.forEach(item => {
    item.addEventListener("mouseenter", function() {
        item.style.transform = "scale(1.1)";
        item.style.transition = "all 0.3s ease";
    });
    item.addEventListener("mouseleave", function() {
        item.style.transform = "scale(1)";
        item.style.transition = "all 0.3s ease";
    });
});