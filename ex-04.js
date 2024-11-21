const custoInicialFabrica = 30000
const impostos = (48 / 100) * custoInicialFabrica
const custoFinalFabrica = custoInicialFabrica + impostos

const porcDistribuidor = (28 / 100) * custoFinalFabrica

function calcCustoCliente(custoFabrica, porcDistribuidor) {

    console.log(custoFabrica + porcDistribuidor)

}

calcCustoCliente(custoFinalFabrica, porcDistribuidor)