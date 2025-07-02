const imagens = ['imagens/imagem1.jpg', 'imagens/imagem2.jpg', 'imagens/imagem3.jpg'];
let indiceAtual = 0;
const imagemElemento = document.getElementById('imagemAtual');
const botaoAnterior = document.getElementById('anterior');
const botaoProxima = document.getElementById('proxima');

function atualizarImagem() {
    imagemElemento.src = imagens[indiceAtual];
}

function mostraProximaImagem() {
    if (indiceAtual < imagens.length - 1) {
        indiceAtual++;
    } else {
        indiceAtual = 0;
    }
    atualizarImagem();
}
function mostrarImagemAnterior() {
    if (indiceAtual > 0) {
        indiceAtual--;
    } else {
        indiceAtual = imagens.length - 1;
    }
    atualizarImagem();
}
botaoProxima.addEventListener('click', mostraProximaImagem);
botaoAnterior.addEventListener('click', mostrarImagemAnterior);

atualizarImagem();
