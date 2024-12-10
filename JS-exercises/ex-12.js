// escrever um algoritimo que leia um numero inteiro;
// ele deve escrever na tela se o mesmo e positivo ou negativo; par ou impar;

const numberInfos =  {
    number: 2,
    posorneg: "",
    pairodd: ""
}

function processNumber(numberInfos) {

    if (numberInfos.number % 2 == 0) {
        
        numberInfos.pairodd = "Pair"

    } else {

        numberInfos.pairodd = "Odd"

    }

    if (numberInfos.number >= 0) {

        numberInfos.posorneg = "Positive"

    } else {

        numberInfos.posorneg = "Negative"

    }

    return numberInfos


}

console.log(processNumber(numberInfos))