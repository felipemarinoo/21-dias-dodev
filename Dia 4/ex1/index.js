let fome = prompt('Esta com fome?(Responda com sim ou nao)')


let dinheiro = prompt('Tem dinheiro?(Responda com sim ou nao)')


let restaurante = prompt('O restaurante esta aberto?(Responda com sim ou nao)')



if(fome === 'nao' || dinheiro === 'nao'){
console.log('Hoje a janta será em casa')
}else if(fome === 'sim' && dinheiro === 'sim' && restaurante === 'nao'){
console.log('Peça um delivery!')
}else if(fome === 'sim' && dinheiro === 'sim' && restaurante === 'sim')
console.log('Hoje o jantar sera no seu restaurante favorito!')

