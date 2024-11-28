// Escrever um algoritimo que receba um valor X e retorne a quantidade de notas necessarias para atingi-lo;
// considere as notas: 100 50 20 10 5 2


const notas = [100, 50, 20, 10, 5, 2];

function calcNotas(notas, valor) {
    let resultado = {};

    notas.forEach(nota => {
        let contador = 0; 
        while (valor >= nota) {
            valor -= nota;
            contador++;
        }
        if (contador > 0) {
            resultado[nota] = contador;
        }
    });

    return resultado;
}

console.log(calcNotas(notas, 10));
