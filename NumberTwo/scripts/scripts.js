
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
  
  const input = parseInt(prompt("Digite um número para verificar se pertence à sequência de Fibonacci:"));
  
  if (isNaN(input)) {
    prompt("Por favor, insira um número válido.");
  } else if (isFibonacci(input)) {
    prompt(`O número ${input} pertence à sequência de Fibonacci.`);
  } else {
    prompt(`O número ${input} não pertence à sequência de Fibonacci.`);
  }
  