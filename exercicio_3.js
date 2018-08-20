const readline = require('readline');

const salario = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let numero = 0
let i = 0
let somaPar = 0
let somaPrimo = 0

function primo(numero) {

    if(numero !== 0 && numero !== 1){
        numero % numero === 0
        return true
    }
    else {
        return false
    }
}


function recursive (){

    if(i === 3){

        console.log('Soma dos Números Pares: ', somaPar)
        console.log('Soma dos Números Primos: ', somaPrimo)

        salario.close()
        return
    }

    salario.question('Digite um Número: ', function(resposta_1) {

        numero = parseInt(resposta_1)

        if(numero % 2 === 0){
            somaPar += numero
        }

        if(primo(numero)) {
           somaPrimo += numero
        }

        i++

        recursive()

    })
}

recursive()