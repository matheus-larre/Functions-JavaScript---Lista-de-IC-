/*Questão 8: Par ou ímpar

Descrição: Crie uma função chamada verificarParOuImpar() que recebe um número como
parâmetro (numero) e retorna se este número é par ou ímpar.

Requisitos:
A função deve receber um número como parâmetro.
Retornar "par" se o número for par e "ímpar" se for ímpar.
*/

function verificarParOuImpar(numero) {
  return numero % 2 === 0 ? 'par' : 'ímpar';
}

let resultado = verificarParOuImpar(7);
console.log("O número é: " + resultado);
module.exports = { verificarParOuImpar };
