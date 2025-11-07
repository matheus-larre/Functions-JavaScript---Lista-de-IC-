/*Questão 5: Calculadora de média

Descrição: Crie uma função chamada calcularMedia() que recebe quatro notas como
parâmetros nota1, nota2, nota3 e nota4 e retorna a média aritmética dessas notas.

Requisitos:
A função deve receber quatro parâmetros numéricos.
Retornar a média aritmética (soma dos números dividida pela quantidade de notas).
*/

function calcularMedia(nota1, nota2, nota3, nota4) {
  return (nota1 + nota2 + nota3 + nota4) / 4;
}

let resultado = calcularMedia(7, 8, 9, 10);
console.log("A média é: " + resultado);
module.exports = { calcularMedia };
