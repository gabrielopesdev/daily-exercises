// escreva um algoritimo que leia tres numeros inteiros e escreva o maior deles

valores = {
    n1: 12,
    n2: 21,
    n3: 31
}

function enconMaior(valores) {
    const {n1, n2, n3} = valores    

    return Math.max(n1, n2, n3)

}

console.log(enconMaior(valores))