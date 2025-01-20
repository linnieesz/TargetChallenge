function isFibonacci(num) {
  let a = 0, b = 1; 
  
  while (a <= num) {
    if (a === num) {
      return true; 
    }
    [a, b] = [b, a + b]; 
  }
  
  return false; 
}


document.getElementById('verificarBtn').addEventListener('click', function() {
  const input = parseInt(document.getElementById('numero').value); 
  
  const resultadoElement = document.getElementById('resultado');
  
  if (isNaN(input)) {
    resultadoElement.textContent = 'Por favor, insira um número válido.';
  } else if (isFibonacci(input)) {
    resultadoElement.textContent = `O número ${input} pertence à sequência de Fibonacci.`;
  } else {
    resultadoElement.textContent = `O número ${input} não pertence à sequência de Fibonacci.`;
  }
});
