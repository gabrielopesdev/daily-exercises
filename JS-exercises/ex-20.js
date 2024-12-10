// Escrever um algoritimo que leia tres valores;
// Defina se eles formam ou nao um triangulo;
// Se sim, calcule a area do triangulo formado;

const valores = {
    v1: 24,
    v2: 12,
    v3: 12
}

function calcAreaTriangulo(valores) {

    const {v1, v2, v3} = valores

    if( v1 >= v2 + v3) {

        return 'Valores invalidos'

    } else {

        let sp = (v1 + v2 + v3) / 2

        const area = Math.sqrt(sp * (sp - v1) * (sp - v2) * (sp - v3))
        return area.toFixed(2)

    }    

}

console.log(calcAreaTriangulo(valores))