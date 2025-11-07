/*Questão 4: Divisão com verificação de zero

Descrição: Crie uma função chamada dividir() que recebe dois números como parâmetros
a e b e retorna o resultado da divisão do primeiro pelo segundo. A função deve verificar se o
segundo número é zero e retornar uma mensagem de erro.

Requisitos:
A função deve aceitar dois parâmetros.
Se o divisor for zero, retornar a mensagem "Erro: divisão por zero".
Senão, retornar o resultado da divisão.
*/

function dividir(a, b) {
  if (b === 0) {
    throw new Error("Erro: divisão por zero");
  }
  return a / b;
}

let resultado = dividir(10, 2);
console.log("O resultado da divisão é: " + resultado);
module.exports = { dividir };
