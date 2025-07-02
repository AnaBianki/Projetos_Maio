const lights = {
    red: document.querySelector(".light.red"),
    yellow: document.querySelector(".light.yellow"),
    green: document.querySelector(".light.green"),
};

document.getElementById("btnRed").addEventListener("click", () => {
toggleLight("red");
});

document.getElementById("btnYellow").addEventListener("click", () => {
toggleLight("yellow");
});

document.getElementById("btnGreen").addEventListener("click", () => {
toggleLight("green");
});

function toggleLight(color) {
    for (let key in lights) {
        lights[key].classList.remove("on");
    }
    lights[color].classList.add("on");
}

const toggleThemeBtn = document.getElementById("toggleTheme");
toggleThemeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleThemeBtn.textContent =
    document.body.classList.contains("dark") ? "☀️" : "🍌";
});