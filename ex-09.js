// escreva um algoritimo que classifique um nadador de acordo com sua idade, sendo:
//infantil A = 5 - 7 anos

//infantil B = 8-10 anos

//juvenil A = 11-13 anos

//juvenil B = 14-17 anos

//adulto = maiores de 18 anos

const nadadorIdade = 12

function classificar(idade) {

    if(idade <= 5 || idade <= 7) {
        return "Infantil - A"

    } else if (idade <= 8 || idade <= 10) {
        return "Infantil - B"

    } else if (idade <= 11 || idade <= 13) {
        return "juvenil - A"

    } else if (idade <= 14 || idade <= 17) {
        return "Juvenil - B"

    } else {
        return "Adulto"
    }
}

console.log(classificar(nadadorIdade))