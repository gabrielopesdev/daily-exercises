// escrever um algoritimo que receba tres quatro valores(i, a, b, c);
// o primeiro valor deve ser um numero de 1 a 3
// os outros tres podem ser quaisquer numeros reais;
// a) Se i=1 escrever os três valores a, b, c em ordem crescente. 
// b) Se i=2 escrever os três valores a, b, c em ordem decrescente. 
// c) Se i=3 escrever os três valores a, b, c de forma que o maior entre a, b, c fique dentre os dois.

const numeros = {
    i: 3,
    a: 10,
    b: 2,
    c: 20
}

function ordenar(numeros) {
    
    const {i, a, b, c} = numeros
    let numerosAOrdenar = [a, b, c]

    if (i === 1) {

        return numerosAOrdenar.sort((a, b) => a - b)

    } else if (i === 2) {
        

        return numerosAOrdenar.sort((a, b) => b - a)

    } else {

        numerosAOrdenar.sort((a, b) => a - b)
        return [numerosAOrdenar[0], numerosAOrdenar[2], numerosAOrdenar[1]]

    }
}

console.log(ordenar(numeros))

