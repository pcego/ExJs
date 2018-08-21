const readline = require('readline');

const salario = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let idade = []
let qtMaior = 0
let qtMenor = 0
let i = 0


function recursive (){

    if(i === 3){

        for(let x=0; x < idade.length; x++) {
            if (idade[x] > 18){
                qtMaior++
            }
            else{
                qtMenor++
            }

        }
        console.log('Quantidade de Maiores de 18 Anos: ', qtMaior)
        console.log('Quantidade de Menores de 18 Anos: ', qtMenor)

        salario.close()
        return
    }

    salario.question('Digite Uma Idade: ', function(resposta_1) {

        idade[i] = parseInt(resposta_1)
        i++

        recursive()
    })
}

recursive()