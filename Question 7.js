/*Questão 7: Área de um retângulo

Descrição: Crie uma função chamada calcularAreaRetangulo() que recebe dois números
como parâmetros largura e altura e retorna a área do retângulo.

Requisitos:
A função deve receber dois parâmetros: largura e altura.
Retornar a área do retângulo (largura multiplicada pela altura).
*/

function calcularAreaRetangulo(largura, altura) {
  return largura * altura;
} 

let resultado = calcularAreaRetangulo(5, 8);
console.log("A área do retângulo é: " + resultado);
module.exports = { calcularAreaRetangulo };
