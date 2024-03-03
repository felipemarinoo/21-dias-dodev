let nome = prompt('Insira seu nome: ');
console.log(nome)
let idade = prompt('Insira sua idade: ');
let idadeInt = Number(idade)
console.log(idadeInt)
let altura = prompt('Insira sua altura: ');
let alturaInt = Number(altura)
console.log(alturaInt)
let peso = prompt('Insira seu peso: ');
let pesoInt = Number(peso)
console.log(pesoInt)
let imc = (pesoInt / (alturaInt*alturaInt));
console.log('Ola ' + nome + ' , voce tem ' + idade + ' anos, nasceu em ' +(2024 - idade)+ ' , tem  ' + altura + ' , pesa ' + peso + ' Kg seu IMC é ' + imc + ' Kg/m2 ')