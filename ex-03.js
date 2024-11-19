const notas = [10, 9, 3]
const pesos = [2, 3, 5]

function calcMedia(notas, pesos) {

    mediaSoma = (notas[0] * pesos[0]) + (notas[1] * pesos[1]) + (notas[2] * pesos[2])
    mediaFinal = mediaSoma / (pesos[0] + pesos[1] + pesos[2])

    return mediaFinal

}

console.log(calcMedia(notas, pesos))