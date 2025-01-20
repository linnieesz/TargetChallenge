// Dados de faturamento por estado
const faturamentoPorEstado = {
  "SP": 67836.43,
  "RJ": 36678.66,
  "MG": 29229.88,
  "ES": 27165.48,
  "Outros": 19849.53
};

// Calcular o total de faturamento mensal
const totalFaturamento = Object.values(faturamentoPorEstado).reduce((acc, valor) => acc + valor, 0);

// Calcular e exibir o percentual de cada estado
for (const estado in faturamentoPorEstado) {
  const faturamento = faturamentoPorEstado[estado];
  const percentual = ((faturamento / totalFaturamento) * 100).toFixed(2);
  console.log(`O percentual de faturamento de ${estado} é: ${percentual}%`);
}
