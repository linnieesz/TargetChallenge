fetch('http://localhost:8080/faturamento.json')  
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao carregar o arquivo JSON');
    }
    return response.json();  
  })
  .then(data => {
    const faturamentoDiario = data;
    
    const menorFaturamento = Math.min(...faturamentoDiario.filter(item => item.valor > 0).map(item => item.valor));
    const maiorFaturamento = Math.max(...faturamentoDiario.filter(item => item.valor > 0).map(item => item.valor));

    const diasComFaturamento = faturamentoDiario.filter(item => item.valor > 0);
    const somaFaturamento = diasComFaturamento.reduce((acc, item) => acc + item.valor, 0);
    const mediaFaturamento = somaFaturamento / diasComFaturamento.length;

    const diasAcimaDaMedia = diasComFaturamento.filter(item => item.valor > mediaFaturamento).length;

    // Atualizando os valores na página HTML
    document.getElementById('menorFaturamento').textContent = `R$ ${menorFaturamento.toFixed(2)}`;
    document.getElementById('maiorFaturamento').textContent = `R$ ${maiorFaturamento.toFixed(2)}`;
    document.getElementById('mediaFaturamento').textContent = `R$ ${mediaFaturamento.toFixed(2)}`;
    document.getElementById('diasAcimaDaMedia').textContent = diasAcimaDaMedia;

  })
  .catch(error => {
    console.error('Erro ao carregar o arquivo JSON:', error);
  });
