// Escreva um algoritimo que leia o RA e as tres notas de um aluno;
// Ele deve calcular a media ponderada(n1 = 4 e n2,n3 = 3)\
// Exibir todas as informacoes e incluindo o aprovado ou reprovado;

const aluno = {
    ra: 1234321,
    notas: {n1: 10, n2: 5, n3: 10},
    media: 0,
    situacao: ""
}

const pesos = {
    p1: 4,
    p2: 3,
    p3: 3
}

function calcMedia(aluno, pesos) {
    const {n1, n2, n3} = aluno.notas
    const {p1, p2, p3} = pesos

    const soma = (n1 * p1) + (n2 * p2) + (n3 * p3)
    aluno.media = soma / (p1 + p2 + p3)

    if (aluno.media >= 5) {

        aluno.situacao = "Aprovado"

    } else {

        aluno.situacao = "Reprovado"

    }

    return aluno
}

console.log(calcMedia(aluno, pesos))