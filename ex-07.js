// elaborar um algoritimo que leia tres valores e os exiba na tela. Ele tambem deve encontar o maior valor entre eles.

const valores = {
    a: 1,
    b: 2,
    c: 3
}

function encotrarOMaior(valores) {
    const {a, b, c} = valores
    const maiorNumero = Math.max(a, b, c)
    console.log(valores)

    if (maiorNumero == a) {
        console.log('Maior de ' + c + ' e ' + b + ' e ' + a)

    } else if (maiorNumero == b) {
        console.log('Maior de ' + a + ' e ' + c + ' e ' + b)

    } else {
        console.log('Maior de ' + a + ' e ' + b + ' e ' + c)
    }
}

encotrarOMaior(valores)
