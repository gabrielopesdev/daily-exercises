const dataNacimento = new Date("March, 9, 2006")

function calcIdadeEmDias(dataNacimento) {

    //data atual:
    var data = new Date()
    var diaAtual = data.getDate()
    var mesAtual = data.getMonth() + 1
    var anoAtual= data.getFullYear()

    //data de nascimento:
    var diaNascimento = dataNacimento.getDate()
    var mesNascimento = dataNacimento.getMonth() + 1
    var anoNascimento = dataNacimento.getFullYear()

    //calculo:
    var idadeAnos = anoAtual - anoNascimento
    var idadeMeses = mesAtual  - mesNascimento
    var idadeDias = diaAtual - diaNascimento
    const totalDias = (idadeAnos * 365) + (idadeMeses * 30) + idadeDias;

    return totalDias


}

console.log(calcIdadeEmDias(dataNacimento))