// esxcrever um algoritimo que a leia a indentidicacao de um aluno, suas tres medias de provas e a media de exercicios;
// retorne a media de aproveitamento convertida e conceito;

const turma = [

    aluno01 = {
        id: 1234,
        n1: 9,
        n2: 7,
        n3:7,
        me: 10
    },

    aluno02 = {
        id: 1333,
        n1: 10,
        n2: 6,
        n3:7,
        me: 3
    },

    aluno03 = {
        id: 1222,
        n1: 4,
        n2: 8,
        n3:1,
        me: 7
    }
]



function calcMedia(turma, id) {

    let aluno = turma.find(element => element.id === id);

    if (!aluno) {
        
        return "Aluno nao encontrado"

    }

    let {n1, n2, n3, me} = aluno

    let mediaAproveitamento = (n1 + n2 * 2 + n3 * 3 + me) / 7
    
    let conceito
    if (mediaAproveitamento > 9) {

        conceito = "A"

    } else if (mediaAproveitamento >= 9) {

        conceito = "B"

    } else if (mediaAproveitamento >= 7.5) {

        conceito = "C"

    } else if (mediaAproveitamento > 6) {

        conceito = "D"
        
    } else {

        conceito = "E"

    }

    return conceito

}

console.log(calcMedia(turma, 1234))