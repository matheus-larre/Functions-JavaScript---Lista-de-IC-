/*Questão 1: Soma simples

Descrição: Crie uma função chamada somar() que recebe dois números como parâmetros a e
b e retorna a soma deles.

Requisitos:
 A função deve receber dois parâmetros numéricos.
 Retornar o resultado da soma dos dois números.
*/

function somar(a, b) {
  return a + b;
}

let resultado = somar(5, 3);
console.log("A soma é: " + resultado);
module.exports = { somar };
