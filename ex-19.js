// Escrever um codigo que de um aumento salarial a funcionarios de uma impressa de acordo com seu cargo;



function calcAumento(codigo, salario) {

    const db = [
        
        cargoUm = {
            nome: 'Gerente',
            cod: 101,
            percentual: 10
        },

        cargoDois = {
        nome: 'Engenheiro',
        cod: 102,
        percentual: 20  

        },

        cargoTres = {
            nome: 'Tecnico',
            cod: 103,
            percentual: 30
        }
    ]

    let cargo = db.find(elemento => elemento.cod == codigo)

    if (codigo != 101 || codigo != 102 || codigo != 103) {

        let valorAumento = (40 * salario) / 100
        let novoSalario = salario += valorAumento

        return novoSalario

    } else if (cargo.cod == 101) {

        let valorAumento = (cargo.percentual * salario) / 100
        let novoSalario = salario += valorAumento

        return novoSalario

    } else if (cargo.cod == 102) {

        let valorAumento = (cargo.percentual * salario) / 100
        let novoSalario = salario += valorAumento

        return  novoSalario

    } else if (cargo.cod == 103) {

        let valorAumento = (cargo.percentual * salario) / 100
        let novoSalario = salario += valorAumento

        return novoSalario

    }
}

console.log(calcAumento(101, 1000))