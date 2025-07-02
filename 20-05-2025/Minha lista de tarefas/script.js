const inputTarefa = document.getElementById('novaTarefa');
const listaTarefas = document.getElementById('listaDeTarefas');

function adicionarTarefa() {
    const textoTarefa = inputTarefa.value.trim();
    if (textoTarefa !== '') {
        const novaLi = document.createElement('li');
        novaLi.innerHTML = `
        <span>${textoTarefa}</span>
        <div class="acoes">
        <button class="concluir-btn"
        onclick="concluirTarefa(this)">Concluir</button>
        <button onclick="removerTarefa(this)">
        Remover</button>
        </div>`;
        listaTarefas.appendChild(novaLi);
        inputTarefa.value = '';
    }
}
function concluirTarefa(botao) {
    const listItem = botao.parentNode.parentNode;
    listItem.querySelector('span').classList.toggle('concluida');
}
function removerTarefa(botao) {
    const listItem = botao.parentNode.parentNode;
    listaTarefas.removeChild(listItem);
}
inputTarefa.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        adicionarTarefa();
    }
});