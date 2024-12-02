function checkIfExist(arr) {
    const seen = new Set(); // Conjunto para armazenar os números já vistos
    for (let num of arr) {
        // Verificar se o dobro do número já foi visto ou se a metade do número (quando for par) já foi vista
        if (seen.has(num * 2) || (num % 2 === 0 && seen.has(num / 2))) {
            return true;
        }
        // Adicionar o número ao conjunto
        seen.add(num);
    }
    return false; // Se não encontrar nenhum par, retorna false
}
