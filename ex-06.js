// calcular a media aritimetica de um aluno e mostrar se o mesmo esta aprovrado ou reprovado

const boletim = {
    n1: 10,
    n2: 10,
    n3: 10
}

function calcMedia(notas) {
    const {n1, n2, n3} = notas // desestruturacao
    const mediaSimples = (n1 + n2 + n3) / Object.keys(notas).length

    return mediaSimples

}

console.log(calcMedia(boletim))