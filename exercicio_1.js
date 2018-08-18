const readline = require('readline');

const salario = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

var name='', altura = 0.0, sexo=''
var array = []
var i = 0
var soma = 0.0
var count = 0
var maior = 0.0
var menor = 999

function recursive (){
		
		if(i === 3){
			for(let x=0; x < array.length; x++){
				if(maior < array[x].altura){
					maior = array[x].altura					
				}
				
				if(menor > array[x].altura){
					menor = array[x].altura
				}

			}

			console.log('Quantidade de Homens: ' + count)
			console.log('Média de altura das Mulheres: ' + soma/(array.length - count))
			console.log('Maior Altura: ' + maior)
			console.log('Menor Altura: ' + menor)

			salario.close()
			return	
		}	

		salario.question('Digite seu Nome: ', function(resposta_1) {
				
		salario.question('Digite sua altura: ', function(respost_2){
			
		salario.question('Sexo (M ou F): ', function(respost_3){

		name = resposta_1
		altura = parseFloat(respost_2)
		sexo = respost_3

		array[i] = {name: name, altura: altura, sexo: sexo}

		if(array[i].sexo.toUpperCase() === 'M'){
			count++
		}
		else{
			soma += array[i].altura
		}

		i++		
		
		recursive()

		})
			})		

				})		
	
}

recursive()