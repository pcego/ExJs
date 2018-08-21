const readline = require('readline');

const salario = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let nome = []
let i = 0


function recursive (){

    if(i === 3){
        nome.reverse()
        for (let x=0; x < nome.length; x++){
            console.log('nome: ',nome[x])
        }

        salario.close()
        return
    }

    salario.question('Digite Um Nome: ', function(resposta_1) {

        nome[i] = resposta_1
        i++

        recursive()
    })
}

recursive()