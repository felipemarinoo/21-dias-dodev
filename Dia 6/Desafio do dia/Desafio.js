let num = Number(prompt('Escolha um numero para tabuada'))
console.log('Numero  ' + num + '           Numero ' + (num + 1) + '                Numero ' + (num + 2))

for(let i = 1; i<=10; i++){
    console.log(num + ' x ' + i + ' = ' + (num * i ) + '         '+(num + 1) + ' x ' + i + ' = ' + ((num + 1) * i ) +  '              ' +(num + 2) + ' x ' + i + ' = ' + ((num + 2) * i ))


}

