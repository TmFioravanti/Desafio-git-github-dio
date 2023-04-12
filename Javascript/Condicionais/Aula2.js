// no inicio de uma variavel booleanda sempre usamos a palavra is
const numero = 10;

const isNumeroPar = (numero % 2) === 0 ;
console.log(numero)
console.log(eNumeroPar)

if(eNumeroPar){
    console.log("É par")
}
else{
    console.log("É Impar")
}

//ou podemos usar apenas o código abaixo
//if(!eNumeroPar){
//    console.log("É Impar")}
// o exclamação na frente usa a negação do boolean.

const numero1 = 25;

const isnumeroDivisivelPor5 = (numero1 % 5) === 0;
    console.log(numero1)
    console.log(numeroDivisivelPor5)
if (numero1 === 0){

    console.log("Número Inválido")

}else if(numeroDivisivelPor5){

    console.log("É Divisível por 5")
}
else{

    console.log("Não É Divisível por 5")

}

