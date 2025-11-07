/*Questão 9: Raiz Quadrada

Descrição: Crie uma função chamada calcularRaizQuadrada() que recebe um número
como parâmetro (numero) e retorna sua raiz quadrada.

Requisitos:
A função deve receber um número como parâmetro.
Retornar a raiz quadrada do número.
*/

function calcularRaizQuadrada(numero) {
  return Math.sqrt(numero);
}

let resultado = calcularRaizQuadrada(16);
console.log("A raiz quadrada é: " + resultado);
module.exports = { calcularRaizQuadrada };
