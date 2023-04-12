/*1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

Média = (nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovação;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;*/
console.log("Exercicio 1 resposta")
const nota1 = 7;
const nota2 = 10;
const nota3 = 5;

const media = (nota1 + nota2 + nota3) / 3;

if(media >= 7   ){
    console.log("Passou de semestre")

}else if(media >=5 && media < 7){
    console.log("Recuperação")
}else {
    console.log("Reprovado") 
}

console.log(" ")


/*2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

Formula do IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

IMC em adultos Condição:
- Abaixo de 18.5 Abaixo do peso;
- Entre 18.5 e 25 Peso normal;
- Entre 25 e 30 Acima do peso;
- Entre 30 e 40 Obeso;
- Acima de 40 Obsesidade Grave;*/
console.log("Exercicio 2 resposta")
const altura = 1.70;
const peso = 70;
const imc = peso / Math.pow(altura, 2)

if(imc > 40) {
    console.log(imc+ " Acima de 40 Obsesidade Grave")
} else if(imc >30 && imc <= 40 ){
    console.log(imc + " Entre 30 e 40 Obeso")
}else if(imc >= 25 && imc <=30  ){
    console.log(imc + " Entre 25 e 30 Acima do peso")
}else if(imc >=18.5 && imc <25 ){
    console.log(imc + " Entre 18.5 e 25 Peso normal")
}else {
    console.log(imc + " Abaixo de 18.5 Abaixo do peso")
}
console.log(" ")

/*3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

Código Condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% de desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;*/
console.log("Exercicio 3 resposta")
const descontoDebito = 0.10;
const dinheiroOuPix  = 0.15;
const divididoEmMaisDuasVezes = 0.10;
let precoEtiqueta = 260;
const formaPagamento = 4 ;
let valorFinal = 0;
if(formaPagamento === 1 ){
    valorFinal = precoEtiqueta - (precoEtiqueta * descontoDebito);
    console.log(valorFinal);
}else if(formaPagamento === 2 ){
    valorFinal = precoEtiqueta - (precoEtiqueta * dinheiroOuPix);
    console.log(valorFinal);
}else if(formaPagamento === 3 ){
    console.log(precoEtiqueta);
}else if(formaPagamento === 4 ){
    valorFinal = precoEtiqueta + (precoEtiqueta * divididoEmMaisDuasVezes);
    console.log(valorFinal);
}

console.log(" ")

