let display = document.getElementById('display');
let operadorAtual = null;
let primeiroNumero = null;
let operatorPressed = false;
let calculationDone = false;


function inserirNumero(numero) {
    if (operatorPressed || calculationDone) {
        display.value = '';
        operatorPressed = false;
        calculationDone = false;
    }
    display.value += numero;
}


function inserirOperador(operador) {
    if (display.value === '' && primeiroNumero === null) return;


    if (primeiroNumero !== null && !operatorPressed) {
        calcular();
    }


    primeiroNumero = parseFloat(display.value);
    operadorAtual = operador;
    operatorPressed = true;
    calculationDone = false;
}


function inserirDecimal() {
    if (operatorPressed || calculationDone) {
        display.value = '0.';
        operatorPressed = false;
        calculationDone = false;
    } else if (!display.value.includes('.')) {
        display.value += '.';
    }
}


function limparDisplay() {
    display.value = '';
    primeiroNumero = null;
    operadorAtual = null;
    operatorPressed = false;
    calculationDone = false;
}


function apagarUltimo() {
    if (!calculationDone) {
        display.value = display.value.slice(0, -1);
    }
}


function calcular() {
    if (operadorAtual === null || primeiroNumero === null || operatorPressed) return;


    const segundoNumero = parseFloat(display.value);
    let resultado;


    switch (operadorAtual) {
        case '+':
            resultado = primeiroNumero + segundoNumero;
            break;
        case '-':
            resultado = primeiroNumero - segundoNumero;
            break;
        case '*':
            resultado = primeiroNumero * segundoNumero;
            break;
        case '/':
            resultado = segundoNumero !== 0 ? primeiroNumero / segundoNumero : 'Erro';
            break;
        default:
            return;
    }


    display.value = resultado;
    primeiroNumero = resultado;
    operadorAtual = null;
    calculationDone = true;
}
