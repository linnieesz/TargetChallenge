const faturamentoPorEstado = {
  "SP": 67836.43,
  "RJ": 36678.66,
  "MG": 29229.88,
  "ES": 27165.48,
  "Outros": 19849.53
};

const totalFaturamento = Object.values(faturamentoPorEstado).reduce((acc, valor) => acc + valor, 0);

const resultadoElement = document.getElementById('resultado');

let resultadosHTML = '';
for (const estado in faturamentoPorEstado) {
  const faturamento = faturamentoPorEstado[estado];
  const percentual = ((faturamento / totalFaturamento) * 100).toFixed(2);
  resultadosHTML += `<p>O percentual de faturamento de <b>${estado}</b> é: ${percentual}%</p>`;
}

resultadoElement.innerHTML = resultadosHTML;