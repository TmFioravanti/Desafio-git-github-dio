/*você terá 5 variáveis, sendo elas:
1 - Preço do etanol;
2 - Preçop da gasolina;
3 - O tipo de combustível que está no carro;
4 - Gasto Médio de combustível por Km;
5 - Distância em Km da viagem;

Imprima no console o valor que será gastp para realizar esta viagem.*/

const precoGasolina = 5.49;
const precoAlcool = 3.29;
const consumoCarro = 16;
const distanciaEmKm = 800;
const tipoCombustivel = 'Etanol'; 

const consumoEmLitros = distanciaEmKm / consumoCarro;

if(tipoCombustivel === "Etanol"){
    const valorTotal = consumoEmLitros * precoAlcool;

    console.log("O Valor total gasto é = " +valorTotal.toFixed(2))
}else{
    const valorTotal = consumoEmLitros * precoGasolina;

    console.log("O Valor total gasto é = " +valorTotal.toFixed(2))
}