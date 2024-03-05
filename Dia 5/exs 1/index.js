let num1 = Number(prompt('Escolha um numero de 1 a 100'))
let num2 = Number(prompt('Escolha outro numero de 1 a 100'))
let operacao = prompt('Escolha a operação matematica (1 = soma, 2 = divisão, 3 = multiplicação, 4 = subtração)')

switch(operacao){
    case '1':
        console.log(num1 + num2)
        break;
    case '2':
        console.log(num1 / num2)
        break;
    case '3':
        console.log(num1 * num2)        
        break;
    case '4':
        console.log(num1 - num2)    
        break;



}

