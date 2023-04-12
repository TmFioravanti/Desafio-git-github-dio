/*Faça um programa para calcular o valor gasto de combustível em uma viagem!

você terá três variáveis, sendo elas:
- Preço do combustível;
- Gasto médio do combustível do carro por KM;
- Distância em KM do percurso;
Imprima no console o valor que será gasto de combustível para realizar esta viagem;*/

const combustivelPreco = 4.99;
const consumoCarro = 13;
let distanciaPercurso = 142;

let valorFinal = (distanciaPercurso / consumoCarro) * combustivelPreco;

console.log("VALOR GASTO É = " + valorFinal);   