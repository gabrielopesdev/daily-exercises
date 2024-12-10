// escrever um programa que com verta numeros romanos em numeros inteiros;
// considere 
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000

var numberRoman = "MCMXCIV";

function romanToInt(n) {
    let arrayNumRoman = n.split("");

    let romanToIntMap = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    };

    let total = 0;

    for (let i = 0; i < arrayNumRoman.length; i++) {

        let current = romanToIntMap[arrayNumRoman[i]];
        let next = romanToIntMap[arrayNumRoman[i + 1]];

        if (current < next) {

            total -= current;

        } else {
            
            total += current;

        }
    }

    return total;
}

console.log(romanToInt(numberRoman));