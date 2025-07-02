let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let tentativas = 10;
const mensagemElemento = document.getElementById('mensagem');
const tentativasRestantesElemento = 
document.getElementById('tentativasRestantes');
const tentativaInput = document.getElementById('tentativa');

tentativasRestantesElemento.textContent = 
`Você tem ${tentativas} tentativas.`;

function verificarTentativa() {
    const tentativaUsuario = parseInt(tentativaInput.value);
    if (isNaN(tentativaUsuario)
    || tentativaUsuario < 1 || tentativaUsuario > 100) {
mensagemElemento.textContent = 
'Por favor, digite um número entre 1 e 100.';
return;
}
tentativas--;
tentativasRestantesElemento.textContent = 
`Você tem ${tentativas} tentativas restantes.`;
if (tentativaUsuario === numeroSecreto) {
mensagemElemento.textContent =
`Parábens! Você adivinhou o número ${numeroSecreto} em ${10 - tentativas} tentativas.`;
desabilitarInput();
} else if (tentativaUsuario < numeroSecreto) {
    mensagemElemento.textContent = 
    'Muito baixo! Tente um número maior';
} else {
    mensagemElemento.textContent = 
    'Muito alto! Tente um número menor.';
}
if (tentativas === 0 && tentativaUsuario !== numeroSecreto) {
    mensagemElemento.textContent =
    `Você perdeu! O número era ${numeroSecreto}.`;
    desabilitarInput();
}
tentativaInput.value = '';
tentativaInput.focus();
}
function desabilitarInput() {
    tentativaInput.disabled = true;
    document.querySelector('button').disabled = true;
}
tentativaInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        verificarTentativa();
    }
});