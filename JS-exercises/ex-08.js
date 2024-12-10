const valores = {
    a: 35,
    b: 7
}

function encontrarMultiplo(valores) {
    const {a, b} = valores
    const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const numeroMultiplo = numeros.find(n => n * b === a)
    
    return numeroMultiplo !== undefined
    ? `É múltiplo: ${numeroMultiplo}`
    : "Não é múltiplo";
}

console.log(encontrarMultiplo(valores));