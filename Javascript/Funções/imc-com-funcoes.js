function calcularImc(peso, altura){
    return peso / Math.pow(altura , 2)
}

function classificarImc(imc){

    if(imc > 40) {
        return 'Acima de 40 Obsesidade Grave'
    } else if(imc >30 && imc <= 40 ){
        return 'Entre 30 e 40 Obeso'
    }else if(imc >= 25 && imc <=30  ){
        return 'Entre 25 e 30 Acima do peso' 
    }else if(imc >=18.5 && imc <25 ){
        return 'Entre 18.5 e 25 Peso normal' 
    }else {
        return  'Abaixo de 18.5 Abaixo do peso' 
    }

}

    (function main(){
    const altura = 1.70;
    const peso = 70;
    const imc = calcularImc(peso, altura);
    console.log(imc);
    console.log(classificarImc(imc));
 })();

 main();
 //colocar parenteses para englobar a função é utilizado para chamar a função logo que for criada, chamada de função imediatamente invocada, assim não preciso ficar chamando a main; usamos bastante na parte da WEB emn criações de SubmitEvent, criamos para isolar o código ali que são executados apenas uma vez, normalmente isolam o escopo;
 
//main vai ser sempre o código principal
    (function (){
    const altura = 1.70;
    const peso = 70;
    const imc = calcularImc(peso, altura);
    console.log(imc);
    console.log(classificarImc(imc));
 })();