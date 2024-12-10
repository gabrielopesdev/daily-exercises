// Escrever um algoritimo que receba a altura e o peso de um individuo e retorne o que seria seu peso ideal

const individuo = {
    sexo: "Feminino",
    altura: 1.75,
    pesoIdeal: 0
}

function calcPeso(individuo) {

    if (individuo.sexo == "Masculino") {

        individuo.pesoIdeal = (72.7 * individuo.altura) - 58

    } else if (individuo.sexo == "Feminino") {

        individuo.pesoIdeal = (62.1 * individuo.altura) - 44.7

    } else {

        return "Sexo do individuo e invalido"

    }

    return individuo.pesoIdeal.toFixed(0)

}

console.log(calcPeso(individuo))
console.log(individuo)