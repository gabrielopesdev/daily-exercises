// escrever um codigo que escreva 4 variaveis de tipos diferentes na tela;

#include <stdio.h>

int main() {
    int inteiro = 10;
    float flutuante = 3.14;
    char caractere = 'A';
    double grandeDecimal = 9.87654321;

    printf("Inteiro: %d\n", inteiro);
    printf("Flutuante: %.2f\n", flutuante);
    printf("Caractere: %c\n", caractere);
    printf("Double: %.8f\n", grandeDecimal);

    return 0;
}
