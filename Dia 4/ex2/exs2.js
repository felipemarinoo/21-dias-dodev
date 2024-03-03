let nome = prompt('Informe seu nome:')
let idade = Number(prompt('Informe sua idade:'))
let carta = prompt('Possui carteira de motorista?(Responda com sim ou nao)')
let carro = prompt('Possui um carro?(Responda com sim ou nao)')

if(idade < 18 || carta === 'nao'){
    console.log(nome + ', voce nao pode dirigir')
}else if( idade >= 18 && carta === 'sim' && carro === 'nao'){
console.log(nome + ', voce pode dirigir mas nao tem carro')
}else if( idade >= 18 && carta === 'sim' && carro === 'sim')
console.log(nome + ', voce sera o motorista!')

