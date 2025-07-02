const progress = document.getElementById("progress");
const percent = document.getElementById("percent");
const toggleTheme = document.getElementById("toggleTheme");

let value = 0;
function carregar() {
    if (value < 100) {
        value++;
        progress.style.width = `${value}%`;
        percent.textContent = `${value}%`;
        setTimeout(carregar, 50);
    } else {
        percent.textContent = "Completo!";
    }
}
carregar();
toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleTheme.textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});