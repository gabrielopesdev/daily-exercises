// escrever um programa que leia dois numeros e faca a adicao, subtracao, multiplicacao e divisao e imprima os resultados na tela;

#include <stdio.h>

int main() {
    float num1, num2;

    printf("Digite o primeiro numero: ");
    scanf("%f", &num1);

    printf("Digite o segundo numero: ");
    scanf("%f", &num2);

    printf("Adicao: %.2f\n", num1 + num2);
    printf("Subtracao: %.2f\n", num1 - num2);
    printf("Multiplicacao: %.2f\n", num1 * num2);

    if (num2 != 0) {
        printf("Divisao: %.2f\n", num1 / num2);
    } else {
        printf("Divisao: nao e possivel dividir por zero\n");
    }

    return 0;
}
