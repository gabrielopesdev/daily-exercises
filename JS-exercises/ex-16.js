// Escreva um algoritimo que calcule o credito especial de um cliente com base no seu saldo medio do ano passado ao requerimento;

const individuo = {
    
    saldoMedio: 700,
    credito: 0

}

function calcCredito(individuo) {

    const {saldoMedio} = individuo

    if ( saldoMedio < 200) {
        
        individuo.credito = 0

    } else if (saldoMedio >= 201 && saldoMedio <= 400) {

        individuo.credito = (20 * saldoMedio) / 100

    } else if (saldoMedio >= 401 && saldoMedio <= 600) {

        individuo.credito = (30 * saldoMedio) / 100
    
    } else {

        individuo.credito = (40 * saldoMedio) / 100
        
    }

    return individuo

}

console.log(calcCredito(individuo))