const readline = require('readline');

const salario = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

/*
a média das idades das pessoas que responderam ótimo;
a quantidade de pessoas que responderam regular;
a porcentagem de pessoas que responderam bom entre todos os espectadores analisados.
 */

let idade = 0
let array = []
let i = 0
let soma = 0.0
let countRegular = 0
let countOtimo = 0
let opiniao = 0
let countBom = 0
let porcentagem = 0.0


function recursive (){

    if(i === 3){

        porcentagem = parseFloat((countBom*100)/array.length)

        console.log('Média de Idade dos que responderam "Ótimo": ' + soma/countOtimo)
        console.log('Quantidade de pessoas que responderam "Regular": ', countRegular)
        console.log('Porcentagem de pessoas que responderam "Bom": ', porcentagem)

        salario.close()
        return
    }

    salario.question('Digite sua Idade: ', function(resposta_1) {

        salario.question('Qual a sua opinião sobre o filme(3-Ótimo, 2-Bom, 1-Regular: ', function(respost_2){

            idade = parseInt(resposta_1)
            opiniao = parseInt(respost_2)

            array[i] = {idade: idade, opiniao: opiniao}

            switch (array[i].opiniao) {

                case 1:
                    countRegular++
                    break
                case 2:
                    countBom++
                    break
                case 3:
                    countOtimo++
                    soma += array[i].idade
                    break


            }

            i++

            recursive()

        })

    })

}

recursive()