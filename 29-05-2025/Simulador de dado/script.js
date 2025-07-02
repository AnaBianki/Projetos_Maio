const btnRolar = document.getElementById("rolar");
const imgDado = document.getElementById("dado");
const toggleTheme = document.getElementById("toggleTheme");

btnRolar.addEventListener("click", () => {
    const numero = Math.floor(Math.random() * 6) + 1;
    imgDado.src = `dados/d{numero}.png`;
    imgDado.style.transform = 
    "rotate(" + (Math.random() * 360) + "deg)";
});

toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleTheme.textContent = 
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});