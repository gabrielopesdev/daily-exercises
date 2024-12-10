// Escreva um algoritimo que leia o horario de inicio de um jogo
// Leia o horario final
// Calcule a duracao do jogo em horas
// Considere o tempo limite de jogo como 24hrs

const tempJogo = {
    ini: new Date("November 26, 2024 7:00:00"),
    fim: new Date("November 26, 2024 23:00:00")
}

function calcTempJogo(tempJogo) {

    let {ini, fim} = tempJogo

    let iniHoras = ini.getHours()
    let fimHoras = fim.getHours()

    const duracaoJogo = fimHoras - iniHoras

    return duracaoJogo >= 24 ? "Jogo esxewdeu o tempo limite de 24hrs" : duracaoJogo;

}

console.log(calcTempJogo(tempJogo))
