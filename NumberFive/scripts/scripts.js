// Função para inverter os caracteres de uma string
function inverterString(str) {
  let stringInvertida = '';
  
  // Percorre a string de trás para frente
  for (let i = str.length - 1; i >= 0; i--) {
    stringInvertida += str[i];
  }

  return stringInvertida;
}

// Exemplo de uso
let stringOriginal = "Exemplo de string";
let stringInvertida = inverterString(stringOriginal);

console.log("String original:", stringOriginal);
console.log("String invertida:", stringInvertida);
