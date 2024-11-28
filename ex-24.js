// escrever um programa que leia o IPI a ser acrescentado ao valor da peca;
// o codigo da peca 1, valor unitario e quantidade
// o codigo da peca 2, valor unitario e quantidade
// formula: (valorP1 * quantP1 + valorP2 * valorP2) *(IPI / 100 + 1)

const pecas = [

    {
        cod: 112,
        valor: 12,
        quant: 1
    },

    {
        cod: 113,
        valor: 13,
        quant: 2
    }

]

function calcIpi(pecas) {

    let p1 = pecas[0]
    let p2 = pecas[1]

    const valor = (p1.valor * p1.quant + p2.valor * p2.quant) * (20 / 100 + 1)

    return valor

}

console.log(calcIpi(pecas))