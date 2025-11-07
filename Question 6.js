/*Questão 6: Exponeciação

Descrição: Crie uma função chamada elevarPotencia() que recebe dois números como
parâmetros base e expoente e retorna o resultado da base elevada ao expoente.

Requisitos:
A função deve aceitar dois parâmetros: base e expoente.
*/

function elevarPotencia(base, expoente) {
  return Math.pow(base, expoente);
}

let resultado = elevarPotencia(2, 3);
console.log("O resultado da elevação é: " + resultado);
module.exports = { elevarPotencia };
