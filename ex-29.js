// escrever um progrema que leia um array e um alvo;
// faca uma soma de dois elementos desses arrays que resulte no valor do alvo;
// retorne os idices dos numeros somados;

const numeros = [3, 2, 4]
const alvo = 6

function twoSum(array, target) {
    
    var indices = []

    for(let i = 0; i < array.length; i++) {

        if((array[i] + array[i+1]) == target) {

            indices.push(i)
            indices.push(i+1)

        }

    }

    return indices

}

console.log(twoSum(numeros, alvo))