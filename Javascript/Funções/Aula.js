console.log("Exemplo 1"); 
//função que leva como parametro o name, ou seja, toda vez que ela for chamada apresentará a mensagem escrita em console.log + o parametro, nos casos abaixo são Ighor e DigDin.
function sayMyName(name){
    console.log('Your name is:' + name)
}
sayMyName('Ighor');
sayMyName('DigDin');

//exemplo 2
console.log("Exemplo 2"); 
function quadrado(valor){
   return valor * valor;  
}

const quadradoDeQuatro = quadrado('4');
const quadradoDeSeis = quadrado('6');
console.log(quadradoDeQuatro);
console.log(quadradoDeSeis);

//exemplo 3
console.log("Exemplo 3");
function incrementarJuros(valor, valorJuros){
    const valorDeAcrescimo = (valorJuros / 100) * valor;
    return valor +valorDeAcrescimo;
}

console.log(incrementarJuros(100, 10));
console.log(incrementarJuros(350, 18));
console.log(incrementarJuros(1500, 32));