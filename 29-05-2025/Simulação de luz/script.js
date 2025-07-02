const toggleButton = document.getElementById("toggleTheme");
const body = document.body;
const lampada = document.getElementById("lampada");

let luzLigada = false;

toggleButton.addEventListener("click", () => {
    luzLigada = !luzLigada;

    if (luzLigada) {
        body.classList.add("luz-ativa");
        toggleButton.textContent = "💡 Desligar Luz";
    } else {
        body.classList.remove("luz-ativa");
        toggleButton.textContent = "💡 Ligar Luz";
    }
});
