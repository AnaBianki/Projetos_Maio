const listaOriginalElement = document.getElementById("listaOriginal");
const listaOrdenadaElement = document.getElementById("listaOrdenada");
const ordenarPorNomeBtn = document.getElementById("ordenarPorNomeBtn");
const ordenarPorIdadeBtn = document.getElementById("ordenarPorIdadeBtn");
const criterioAtual = document.getElementById("criterioAtual");

const pessoas = [
    { nome: "Carlos", idade: 30 },
    { nome: "Ana", idade: 25 },
    { nome: "Beatriz", idade: 35 },
    { nome: "João", idade: 20 },
    { nome: "Renata", idade: 15 },
    { nome: "Eduardo", idade: 28 },
    { nome: "Fernanda", idade: 22 },
    { nome: "Gabriel", idade: 32 },
    { nome: "Helena", idade: 27 },
    { nome: "Isabela", idade: 19 },
    { nome: "Lucas", idade: 24 },
    { nome: "Marina", idade: 26 },
    { nome: "Natália", idade: 31 },
    { nome: "Otávio", idade: 29 },
    { nome: "Pedro", idade: 23 },
    { nome: "Raquel", idade: 33 },
    { nome: "Thiago", idade: 21 },
    { nome: "Vanessa", idade: 34 },
    { nome: "Yasmin", idade: 18 },
    { nome: "Zeca", idade: 17 },
];

function exibirLista(lista, elemento) {
    elemento.innerHTML = "";
    lista.forEach(item => {
        const li = document.createElement("li");
        li.textContent = `Nome: ${item.nome}, Idade: ${item.idade}`;
        elemento.appendChild(li);
    });
}

function ordenarLista(lista, funcaoComparacao) {
    return [...lista].sort(funcaoComparacao);
}

function compararPorNome(a, b) {
    return a.nome.localeCompare(b.nome);
}

function compararPorIdade(a, b) {
    return a.idade - b.idade;
}

function handleSortClick(funcaoComparacao, criterio) {
    const listaOrdenada = ordenarLista(pessoas, funcaoComparacao);
    exibirLista(listaOrdenada, listaOrdenadaElement);
    criterioAtual.textContent = `Ordenado por ${criterio}.`;
}

window.onload = () => {
    exibirLista(pessoas, listaOriginalElement);
};

ordenarPorNomeBtn.addEventListener("click", () =>
    handleSortClick(compararPorNome, "nome")
);

ordenarPorIdadeBtn.addEventListener("click", () =>
    handleSortClick(compararPorIdade, "idade")
);
