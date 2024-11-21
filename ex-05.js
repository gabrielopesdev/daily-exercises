const valores = {
    a: 2,
    b: 3,
    c: 2,
    d: 2,
    e: 4,
    f: 2
}

function calcEquacao(valores) {
    const {a, b, c, d, e, f} = valores

    const det = a * e - b * d
    if (det === 0) {

        return "O sistema nao possui solucao unica"

    }

    const detX = c * e - b * f
    const detY = a * f - c * d

    const x = detX / det
    const y = detY / det

    return {x, y} 
}

console.log(calcEquacao(valores))
