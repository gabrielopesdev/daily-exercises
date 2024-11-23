// Escrever um algoritimo que receba um codigo de produto junto de sua contidade comprada e calc o preco total

const produtos = [

    produto01 = {codProduto: 1001, preco: 5.32},
    produto02 = {codProduto: 1324, preco: 6.45},
    produto03 = {codProduto: 6548, preco: 2.37},
    produto04 = {codProduto: 1111, preco: 5.37},
    produto05 = {codProduto: 7623, preco: 6.45}

]

function calcPrecoTotal(produtos, codigo, quant) {

    let produto = produtos.find((element) => element.codProduto == codigo)

    return quant * produto.preco

}

console.log(calcPrecoTotal(produtos, 6548, 4))