// animations.js

// GSAP animation for sarcastic movement of the title text
gsap.from(".title-text", {
    duration: 2,          // Animation duration
    y: -50,               // Start 50px above
    opacity: 0,           // Start with 0 opacity
    scale: 0.5,           // Start with 50% size
    ease: "bounce.out",   // Easing function for a bouncy effect
    delay: 0.5            // Delay before the animation starts
});

// GSAP animation for rotating and fading in the image of "N. Ryan"
gsap.from(".profile-image", {
    duration: 3,          // Animation duration
    rotation: 360,        // Rotate 360 degrees
    opacity: 0,           // Start with 0 opacity
    scale: 0.8,           // Start smaller, then grow
    ease: "power4.out",   // Ease function for smooth animation
    delay: 1.5            // Delay before animation starts
});

// GSAP animation for bouncing buttons
gsap.from(".action-button", {
    duration: 1,          // Duration of animation
    y: 20,                // Start 20px below
    opacity: 0,           // Start with 0 opacity
    scale: 0.8,           // Start smaller
    ease: "elastic.out(1, 0.75)",  // Elastic bounce effect
    stagger: 0.2          // Stagger delay between button animations
});

// Animation for sarcastic text that pops up when the user interacts
gsap.to(".sarcastic-text", {
    duration: 2,          // Duration
    opacity: 1,           // Fade in to full opacity
    scale: 1.2,           // Slightly enlarge the text
    rotation: 10,         // Add slight rotation
    delay: 2,             // Wait before the animation starts
    ease: "back.out(1.7)" // Easing function for a bouncy pop-up effect
});

// Animation for sliding in a sarcastic comment box
gsap.from(".comment-box", {
    duration: 1.5,        // Duration of slide-in animation
    x: -300,              // Start from left (outside view)
    opacity: 0,           // Start with 0 opacity
    ease: "power3.out",   // Ease function for smooth slide-in
    delay: 3              // Delay before the box slides in
});