let INDICE = 13, SOMA = 0, K = 0;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}

document.getElementById('resultadoSoma').textContent = SOMA;
document.getElementById('soma').value = SOMA;