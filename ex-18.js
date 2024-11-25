// escreva um codigo que calcule o valor total que um cliente deve a uma loja lendo o codigo do produto;

const produtos = [
    p1 = {
        codigo: 'ABCD',
        preco: 5.30
    },
    p2 = {
        codigo: 'XYPL',
        preco: 6.00
    },
    p3 = {
        codigo: 'KLMP',
        preco: 3.20
    },
    p4 = {
        codigo: 'QRST',
        preco: 2.50
    }
]

function calcConta(produtos, codigo, quant) {

    let produto = produtos.find(p => p.codigo == codigo)
    let precoTotal = produto.preco * quant

    return precoTotal.toFixed(2)
}

console.log(calcConta(produtos, 'ABCD', 3))