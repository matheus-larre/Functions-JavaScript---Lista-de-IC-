/*Questão 2: Multiplicação simples

Descrição: Crie uma função chamada multiplicar() que recebe dois números como
parâmetros a e b e retorna o produto deles.

Requisitos:
A função deve aceitar dois parâmetros numéricos.
O retorno deve ser o produto dos dois números fornecidos.
*/

function multiplicar(a, b) {
  return a * b;
}

let resultado = multiplicar(4, 6);
console.log("O produto é: " + resultado);
module.exports = { multiplicar };

