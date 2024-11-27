// Escrever um algoritimo que receba um valor X e retorne a quantidade de notas necessarias para atingi-lo;
// considere as notas: 100 50 20 10 5 2


const notas = [100, 50, 20, 10, 5, 2];

function calcNotas(notas, valor) {
    let resultado = {}; // Objeto para armazenar a quantidade de cada nota

    // Itera sobre as notas disponíveis
    notas.forEach(nota => {
        let contador = 0; // Contador de notas para cada valor
        while (valor >= nota) {
            valor -= nota; // Subtrai o valor da nota
            contador++; // Incrementa o contador para essa nota
        }
        if (contador > 0) {
            resultado[nota] = contador; // Armazena o número de notas de cada valor
        }
    });

    return resultado;
}

console.log(calcNotas(notas, 187)); // Exemplo de entrada
