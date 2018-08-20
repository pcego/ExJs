const readline = require('readline');

const salario = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let idade = 0, peso = 0.0, sexo=''
let array = []
let i = 0
let mediaIdade = 0.0
let mediaPeso = 0.0
let countH = 0
let countM = 0


/*
total de homens;
total de mulheres;
média das idades dos homens;
média dos pesos das mulheres.
 */


function recursive (){

    if(i === 3){

        console.log('Quantidade de Homens: ' + countH)
        console.log('Quantidade de Mulheres: ' + countM)
        console.log('Média de idade dos Homens: ' + mediaIdade/(array.length - countM))
        console.log('Média de peso das Mulheres: ' + mediaPeso/(array.length - countH))

        salario.close()
        return
    }

    salario.question('Digite sua Idade: ', function(resposta_1) {

        salario.question('Digite seu Peso: ', function(respost_2){

            salario.question('Sexo (M ou F): ', function(respost_3){

                idade = resposta_1
                peso = parseFloat(respost_2)
                sexo = respost_3

                array[i] = {idade: idade, peso: peso, sexo: sexo}

                if(array[i].sexo.toUpperCase() === 'M'){
                    countH++
                    mediaIdade+=array[i].idade
                }
                else if(array[i].sexo.toUpperCase() === 'F'){
                    countM++
                    mediaPeso+=array[i].peso
                }

                i++

                recursive()

            })
        })

    })

}

recursive()