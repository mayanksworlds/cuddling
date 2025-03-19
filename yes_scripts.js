// Love Timer (Set the date you both met)
const startDate = new Date("2023-03-01"); // Change this to your actual date

function updateTimer() {
    const now = new Date();
    const timeTogether = Math.floor((now - startDate) / (1000 * 60 * 60 * 24)); // Days count
    document.getElementById("timer").innerText = timeTogether + " Days ❤️";
}
setInterval(updateTimer, 1000);
updateTimer();

// Magic Love Button
function showLoveMagic() {
    alert("💕 I Love You Forever! 💕");
}

// Fireworks Effect
const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

function fireworks() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for (let i = 0; i < 10; i++) {
        const x = Math.random() * canvas.width;
        const y = Math.random() * canvas.height;
        const size = Math.random() * 5 + 2;
        ctx.fillStyle = `rgba(255, ${Math.random() * 255}, ${Math.random() * 255}, 0.8)`;
        ctx.beginPath();
        ctx.arc(x, y, size, 0, Math.PI * 2);
        ctx.fill();
    }
}
setInterval(fireworks, 100);
