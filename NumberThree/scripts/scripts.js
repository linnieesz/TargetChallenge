fetch('http://localhost:8080/faturamento.json')  
  .then(response => {
    if (!response.ok) {
      throw new Error('Erro ao carregar o arquivo JSON');
    }
    return response.json();  
  })
  .then(data => {
    console.log(data);

    const faturamentoDiario = data;
    
    const menorFaturamento = Math.min(...faturamentoDiario.filter(item => item.valor > 0).map(item => item.valor));
    const maiorFaturamento = Math.max(...faturamentoDiario.filter(item => item.valor > 0).map(item => item.valor));

    console.log(`Menor faturamento: R$ ${menorFaturamento}`);
    console.log(`Maior faturamento: R$ ${maiorFaturamento}`);

    const diasComFaturamento = faturamentoDiario.filter(item => item.valor > 0);
    const somaFaturamento = diasComFaturamento.reduce((acc, item) => acc + item.valor, 0);
    const mediaFaturamento = somaFaturamento / diasComFaturamento.length;

    console.log(`Média de faturamento: R$ ${mediaFaturamento}`);


    const diasAcimaDaMedia = diasComFaturamento.filter(item => item.valor > mediaFaturamento).length;
    console.log(`Número de dias com faturamento superior à média: ${diasAcimaDaMedia}`);
  })
  .catch(error => {
    console.error('Erro ao carregar o arquivo JSON:', error);
  });
