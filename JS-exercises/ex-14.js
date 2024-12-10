// Escrever um algoritimo que leia tres notas e uma formar de calcular media e retorne a media calculada:

const notes = {
    n1: 10,
    n2: 5,
    n3: 8
} 

// aritimetica
// ponderada (3, 3, 4)
// harmonica

function calcAvarage(notes, typeCalc) {

    const {n1, n2, n3} = notes

    if (typeCalc == 1) {

        const avarage = (n1 + n2 + n3) / 3
        return avarage.toFixed(2)           

    } else if (typeCalc == 2) {

        const avarage = ((n1 * 3) + (n2 * 3) + (n3 * 4)) / 10
        return avarage.toFixed(2)        
        

    } else if (typeCalc == 3) {

        const avarage = 3 / ((1 / n1) + (1 / n2) + (1 / n3))
        return avarage.toFixed(2)

    } else {

        return "O tipo de media digitado e invalido"

    }
}

console.log(calcAvarage(notes, 1))