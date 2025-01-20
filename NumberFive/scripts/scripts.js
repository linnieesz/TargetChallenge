function inverterString(str) {
  let stringInvertida = '';
  for (let i = str.length - 1; i >= 0; i--) {
    stringInvertida += str[i];
  }
  return stringInvertida;
}

function atualizarInvertida() {
  const stringOriginal = document.getElementById('inputOriginal').value;
  
  const stringInvertida = inverterString(stringOriginal);

  document.getElementById('inputInvertida').value = stringInvertida;
}

document.getElementById('invertButton').addEventListener('click', atualizarInvertida);
