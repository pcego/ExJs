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
    let divisores = 0

    for(let x = numero; x > 1; x--){
        if(numero % x === 0){
            divisores++
        }
    }
    if(divisores > 1){

        return false

    }
    else if(numero !== 0 && numero !== 1){

        return true

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

        if(primo(numero)){
           somaPrimo += numero
        }

        i++

        recursive()

    })
}

recursive()