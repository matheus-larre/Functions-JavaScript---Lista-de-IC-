/*Questão 10: Cálculo de Hipotenusa

Descrição: Crie uma função chamada calcularHipotenusa()que receba os comprimentos
dos dois catetos de um triângulo retângulo (cateto1 e cateto2) e retorne o valor da hipotenusa..

Requisitos:
A função deve aceitar dois parâmetros: os comprimentos dos catetos.
Deve retornar a hipotenusa usando a fórmula √cateto1² + cateto2².
*/

function calcularHipotenusa(cateto1, cateto2) {
  return Math.sqrt(Math.pow(cateto1, 2) + Math.pow(cateto2, 2));
}

let resultado = calcularHipotenusa(3, 4);
console.log("A hipotenusa é: " + resultado);
module.exports = { calcularHipotenusa };
