/*Questão 3: Subtração simples

Descrição: Crie uma função chamada subtrair() que recebe dois números como parâmetros
a e b e retorna a diferença do primeiro pelo segundo.

Requisitos:
A função deve aceitar dois parâmetros.
Retornar o resultado da subtração entre o primeiro e o segundo parâmetro.
*/

function subtrair(a, b) {
  return a - b;
}

let resultado = subtrair(10, 4);
console.log("A diferença é: " + resultado);
module.exports = { subtrair };
