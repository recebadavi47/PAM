export function verificarLogin(usuario, senha) {
  if (usuario === 'jedi' && senha === '1234') {
    return true;
  }

  return false;
}


export function realizarCalculo(numero1, numero2, operacao) {

  if (numero1 === '' || numero2 === '') {
    return 'Digite os dois números';
  }

  const n1 = Number(numero1);
  const n2 = Number(numero2);

  switch (operacao) {

    case '+':
      return n1 + n2;

    case '-':
      return n1 - n2;

    case '*':
      return n1 * n2;

    case '/':

      if (n2 === 0) {
        return 'Não é possível dividir por zero';
      }

      return n1 / n2;

    default:
      return 'Operação inválida';
  }
}


export function verificarQuiz(resposta, respostaCorreta) {

  if (resposta === respostaCorreta) {
    return true;
  }

  return false;
}