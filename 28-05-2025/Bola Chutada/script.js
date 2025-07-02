const bola = document.getElementById("bola");
const toggleTheme = document.getElementById("toggleTheme");
const container = document.querySelector(".container");
let isDragging = false;
let offsetX = 0;
let offsetY = 0;
let posX = 0;
let posY = 0;
let velocity = 0;
let gravity = 1;
let bounce = 0.6;
let animationFrame;

function setBolaPosition(x, y) {
    bola.style.left = `${x}px`;
    bola.style.top = `${y}px`;
}
bola.addEventListener("mousedown", (e) => {
    isDragging = true;
    cancelAnimationFrame(animationFrame);
    bola.classList.add("dragging");
    const rect = bola.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
});
document.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const containerRect = container.getBoundingClientRect();
    let x = e.clientX - containerRect.left - offsetX;
    let y = e.clientY - containerRect.top - offsetY;
    const maxX = container.offsetWidth - bola.offsetWidth;
    const maxY = container.offsetHeight - bola.offsetHeight;
    x = Math.max(0, Math.min(x, maxX));
    y = Math.max(0, Math.min(y, maxY));
    posX = x;
    posY = y;

    setBolaPosition(x, y);
});
document.addEventListener("mouseup", () => {
    if (!isDragging) return;
    isDragging = false;
    bola.classList.remove("dragging");

    velocity = 0;
    quicar();
});
function quicar() {
    const chao = container.offsetHeight - bola.offsetHeight;
    function animar() {
        velocity += gravity;
        posY += velocity;

        if (posY >= chao) {
            posY = chao;
            velocity *= -bounce;

            if (Math.abs(velocity) < 2) {
                cancelAnimationFrame(animationFrame);
                return;
            }
        }
        setBolaPosition(posX, posY);
        animationFrame = requestAnimationFrame(animar);
    }
    animationFrame = requestAnimationFrame(animar);
}
toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleTheme.textContent = document.body.classList.contains("dark")
});