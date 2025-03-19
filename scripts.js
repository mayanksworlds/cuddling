// Show Love Letter
function showSurprise() {
    document.getElementById("love-letter").style.display = "block";
}

// Hide Love Letter
function hideSurprise() {
    document.getElementById("love-letter").style.display = "none";
}

// Falling Hearts Effect
function createFallingHeart() {
    const heart = document.createElement("div");
    heart.innerHTML = "❤️";
    heart.classList.add("heart");
    document.body.appendChild(heart);

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";

    setTimeout(() => {
        heart.remove();
    }, 4000);
}

// Create hearts every 500ms
setInterval(createFallingHeart, 500);

// Cursor Heart Effect
document.addEventListener("mousemove", function(e) {
    let heartCursor = document.getElementById("cursor-heart");
    heartCursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
});
