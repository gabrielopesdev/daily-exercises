// escrever um programa que identifique se um numero e um polinomio

var x = 121

function polinomioNumber(x) {

    let xString = x.toString()
    let XInverse = xString.split("").reverse().join("")

    var polinomio = false

    if (XInverse == x) {

        var polinomio = true

    }
    
    return polinomio

}

console.log(polinomioNumber(x))