const form = document.getElementById("formDesejo");
const titulo = document.getElementById("titulo");
const descricao = document.getElementById("descricao");
const lista = document.getElementById("listaDesejo");
const toggleTheme = document.getElementById("toggleTheme");
let desejos = JSON.parse(localStorage.getItem("desejos")) || [];

function salvar() {
    localStorage.setItem("desejos", JSON.stringify(desejos));
}
function renderizar() {
    lista.innerHTML = "";
    desejos.forEach((item, index) => {
        const card = document.createElement("div");
        card.className = "produto";
        card.innerHTML = `
        <strong>${item.titulo}</strong>
        <p>${item.descricao}</p>
        <button onclick="removerDesejo(${index})">Remover</button>
        `;
        lista.appendChild(card);
    });
}
function removerDesejo(index) {
    desejos.splice(index, 1);
    salvar();
    renderizar();
}
form.addEventListener("submit", e => {
    e.preventDefault();
    desejos.push({
        titulo: titulo.value.trim(),
        descricao: descricao.value.trim()
    });
    salvar();
    renderizar();
    form.reset();
    titulo.focus();
});
toggleTheme.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggleTheme.textContent =
    document.body.classList.contains("dark") ? "☀️" : "🌙";
});
renderizar();
