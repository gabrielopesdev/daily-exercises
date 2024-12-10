// programa que leia um pedido de uma lanchonete e retorne o produto, o seu valor e o total a ser pago;

const menu = [
    product01 = {
        name: "Cachorro Quente",
        code: 100,
        price: 1.20
    }, 

    product02 = {
        name: "Bauru Simples",
        code: 101,
        price: 1.30
    },

    product03 = {
        name: "Bauru com Ovo",
        code: 102,
        price: 1.50
    },

    product04 = {
        name: "Humburger",
        code: 103,
        price: 1.20
    },

    product05 = {
        name: "Cheseburger",
        code: 104,
        price: 1.30 
    },

    product06 = {
        name: "Refrigerante",
        code: 105,
        price: 1.00
    }
]

function processOrder(menu, code, amount) {

    let product = menu.find((element) => element.code == code)
    let totalPrice = product.price * amount

    return "name Product: " + product.name + " total price: " + totalPrice
}

console.log(processOrder(menu, 100, 2))
console.log(processOrder(menu, 102, 2))
console.log(processOrder(menu, 105, 2))
console.log(processOrder(menu, 103, 2))

